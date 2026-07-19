---
name: reactivedag-sourcey-proof
description: Rebuild and independently verify ReactiveDAG's adopted Sourcey API documentation from an immutable public commit.
source:
  type: cli-tool
  command: node
  args:
    - validate.mjs
  timeout_seconds: 240
  sandbox:
    profile: network
    cwd_policy: skill-directory
    network: true
    require_enforcement: false
inputs:
  repository_url:
    type: string
    required: true
  commit:
    type: string
    required: true
  public_url:
    type: string
    required: true
  adoption_url:
    type: string
    required: true
  runx_version_output:
    type: string
    required: true
runx:
  category: content
  artifacts:
    named_emits:
      evidence: evidence
      report: report
      verification: verification
---

# ReactiveDAG Sourcey proof

Rebuild and verify ReactiveDAG's Sourcey documentation after the contribution
has been adopted upstream. The validator checks out the exact public commit in a
temporary directory, installs the pinned docs dependencies, builds and verifies
the site, and compares that output with the project-owned GitHub Pages surface.

The run is read-only with respect to both the caller workspace and the target
repository. It refuses mutable commits, non-project publication URLs, unmerged
adoption pull requests, incomplete API coverage, root-scoped search links, or a
site that does not expose Sourcey navigation and immutable source links.

## Inputs

- `repository_url`: exactly `https://github.com/richardsmythe/reactive-dag`.
- `commit`: full 40-character upstream deployment commit containing the adopted
  docs. It must equal or descend from the merged PR commit so maintainer-owned
  post-merge fixes can be verified without misattributing them to the claimant.
- `public_url`: the project-owned Pages URL under
  `https://richardsmythe.github.io/reactive-dag/`.
- `adoption_url`: the merged upstream pull request URL.
- `runx_version_output`: exact output captured from the CLI sealing this run.

## Output

The governed graph emits an evidence packet, maintainer-facing Markdown report,
independent verification summary, and a final delivery packet. The graph and
its child steps are sealed in a recomputable Runx receipt tree.
