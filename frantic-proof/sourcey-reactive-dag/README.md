# ReactiveDAG Sourcey proof

This directory preserves the evidence package submitted for Frantic bounty #33.

- Public documentation: https://richardsmythe.github.io/reactive-dag/
- Adopted contribution: https://github.com/richardsmythe/reactive-dag/pull/2
- Verified deployment commit: `8b1ba36fdde1c8013fdcece8c2acf08606341796`
- runx version: `runx-cli 0.7.1`
- runx receipt: `runx:receipt:sha256:106b6a32fe703d42214fe8b0e49ab72e76b06127dddf7227f18a12ed4483b05a`

The governed validation rebuilt the documentation from a clean checkout, ran the
project verification, checked the live Pages surface, and sealed evidence for 75
public C# declarations and 83 search entries. The report also discloses that four
Reference links required maintainer follow-up fixes after the original merge
because the first deployment QA pass did not click those rewritten links.

## Contents

- `evidence.json`: machine-readable observations and coverage.
- `report.md`: maintainer-facing value and remaining gaps.
- `verification.json`: evidence digests and receipt verification result.
- `verification-key.json`: public Ed25519 verification key.
- `receipts/`: the signed root and child receipt tree.
- `runx-skill/`: the governed validation source used to recompute the proof.

Runx reports the receipt signature as production mode. The verification key is a
public, proof-specific key published alongside the receipt; it is not presented
as a third-party Runx notary attestation.

## Verify

```sh
RUNX_RECEIPT_VERIFY_KID=mossony-frantic-33-20260719 \
RUNX_RECEIPT_VERIFY_ED25519_PUBLIC_KEY_BASE64=zO2+kJQLyHrCDUAdmx9/i7GYKCb0LK9Wq1xBItDZVOE= \
runx verify sha256:106b6a32fe703d42214fe8b0e49ab72e76b06127dddf7227f18a12ed4483b05a \
  --receipt-dir ./receipts --json
```

## Recompute

```sh
runx skill ./runx-skill verify \
  -i repository_url=https://github.com/richardsmythe/reactive-dag \
  -i commit=8b1ba36fdde1c8013fdcece8c2acf08606341796 \
  -i public_url=https://richardsmythe.github.io/reactive-dag/ \
  -i adoption_url=https://github.com/richardsmythe/reactive-dag/pull/2 \
  -i 'runx_version_output=runx-cli 0.7.1'
```
