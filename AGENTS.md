# AGENTS.md
## Purpose
Expense Splitter: records who paid for shared expenses and calculates balances and settlements. Money is stored as integer cents.
## Architecture
- src/logic/: pure functions for money, splitting, balances, settlements and validation. No React imports.
- src/App.tsx and src/components/: UI. Calls only src/logic functions. No money math in components.
- src/logic/*.test.ts: unit tests (Vitest).
## Setup
- Install: npm install
- Run tests: npm run test
- Lint: npm run lint
- Typecheck: npm run typecheck
- Build: npm run build
## Safe commands
npm run test, npm run lint, npm run typecheck, npm run build, npm run dev.
## Coding conventions
- Never use floating-point arithmetic for money. Use integer cents.
- Prefer pure functions. Keep changes minimal.
- Do not add design patterns unless a concrete problem requires one.
## Test expectations
- Every change to src/logic needs a test.
- Do not weaken or delete existing tests.
- Run npm run test before proposing any change as complete.
## Forbidden actions
- No secrets, API keys or real personal data in code or tests.
- No production deployments or publishing.
- No destructive commands (rm -rf, deleting files outside the change).
- No new dependencies without explicit approval.
- Do not change the UI when the task is about logic, and do not change logic when the task is about UI.
- Do not claim that tests pass unless they were run and the output is shown.
## Review gates
- A human reviews every diff before it is accepted.
- No merge or deployment without human approval.
