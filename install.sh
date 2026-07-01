#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="${AGENTS_SKILLS_DIR:-$HOME/.agents/skills}/handoff"

mkdir -p "$TARGET"
cp "$ROOT/skill/SKILL.md" "$TARGET/SKILL.md"

echo "Installed handoff skill to $TARGET"
