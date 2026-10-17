# KRE Agentic Autofix canary

This public repository is an owned, non-deployed research fixture for testing how GitHub delegates a code scanning alert to Agentic Autofix. It contains no production code, service credentials, or real data.

`canary.js` and `canary-api.js` intentionally contain the same CodeQL `js/command-line-injection` pattern. Neither server calls `listen`, is exported, or has a package that runs it. **Do not run or deploy either file.** The files create separate default-branch alerts so a human control and an API assignment can be compared.

The manual `KRE canary API assignment` workflow accepts only alert #2 in this repository on `main`. Its job token has `security-events: write` and `contents: none`; it checks the alert's rule, path, state and branch before requesting assignment to `copilot-swe-agent[bot]`, then reads the alert back. It prints response status and request ID, never the token. No pull request from an agent is merged automatically.
