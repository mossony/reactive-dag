import { createHash } from "node:crypto";

const inputs = JSON.parse(process.env.RUNX_INPUTS_JSON || "{}");
const { evidence, report, verification } = inputs;

if (!evidence || !report || !verification) {
  throw new Error("evidence, report, and verification context are required");
}
if (verification.verified !== true) {
  throw new Error("validation did not prove the adopted public documentation");
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function canonicalJson(value) {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalJson).join(",")}]`;
  }
  if (value && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

if (verification.evidence_sha256 !== sha256(canonicalJson(evidence))) {
  throw new Error("evidence digest changed between validation and finalization");
}
if (report.markdown_sha256 !== sha256(report.markdown)) {
  throw new Error("report digest changed between validation and finalization");
}

const delivery = {
  schema: "runx.release.verification_summary.v1",
  created_at: new Date().toISOString(),
  verified: true,
  target: {
    repository: verification.repository,
    commit: verification.commit,
    public_url: verification.public_url,
    adoption_url: verification.adoption_url,
  },
  checks: verification.checks,
  packet_digests: {
    evidence: `sha256:${verification.evidence_sha256}`,
    report: `sha256:${verification.report_sha256}`,
    verification: `sha256:${sha256(canonicalJson(verification))}`,
  },
};
delivery.delivery_digest = `sha256:${sha256(canonicalJson(delivery))}`;

process.stdout.write(JSON.stringify({ delivery }));
