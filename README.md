# Handoff Skill

Handoff Skill creates a durable state packet for coding agents. It captures what is true now, what changed, what was verified, and the exact plan a later agent should follow.

## Use Cases

- Stop a task without losing implementation state.
- Resume work in a fresh session.
- Transfer a task to another coding agent.
- Give QA or review agents a precise continuation brief.
- Preserve decisions, rejected options, and verification evidence.

## Install

From this repository:

```bash
./install.sh
```

Manual install:

```bash
mkdir -p "$HOME/.agents/skills/handoff"
cp skill/SKILL.md "$HOME/.agents/skills/handoff/SKILL.md"
```

## Test

```bash
npm test
```

The test validates the skill metadata, required workflow sections, handoff template coverage, and text hygiene.

## Package

If you have the global `skill-creator` scripts installed:

```bash
python -m scripts.package_skill "$(pwd)/skill"
```

## Output Contract

A good handoff packet includes:

- Goal and latest request.
- Current workspace, branch, running sessions, and artifacts.
- Completed work with evidence.
- Decisions and rejected options.
- Files changed and untouched relevant files.
- Remaining implementation plan with completion criteria.
- Verification plan.
- Risks, assumptions, suggested skills, resume prompt, and redactions.

## GitHub Pages

The landing page lives in `docs/`. Enable GitHub Pages with source `main` and folder `/docs`.
