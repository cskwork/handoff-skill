#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const skillPath = path.join(root, "skill", "SKILL.md");
const skill = fs.readFileSync(skillPath, "utf8");

let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL ${message}`);
}

function pass(message) {
  console.log(`PASS ${message}`);
}

function assert(condition, message) {
  if (condition) pass(message);
  else fail(message);
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

assert(/^---\nname: handoff\n/m.test(skill), "frontmatter names the handoff skill");
assert(/description: .*handoff.*resume.*another agent/i.test(skill), "description covers handoff, resume, and agent transfer triggers");
assert(skill.includes("## Workflow"), "workflow section exists");
assert(skill.includes("## Handoff Packet Template"), "handoff packet template exists");
assert(skill.includes("## Resume Check"), "resume check exists");
assert(skill.includes("## Final Response"), "final response contract exists");

const requiredTemplateTerms = [
  "## Goal",
  "## Current State",
  "## Completed Work",
  "## Decisions",
  "## Files And Changes",
  "## Commands And Evidence",
  "## Remaining Plan",
  "## Verification Plan",
  "## Risks And Assumptions",
  "## Suggested Skills",
  "## Resume Prompt",
  "## Redactions"
];

for (const term of requiredTemplateTerms) {
  assert(skill.includes(term), `template contains ${term}`);
}

const lineCount = skill.split(/\r?\n/).length;
assert(lineCount <= 240, `skill stays compact (${lineCount} lines)`);

const allTextFiles = walk(root).filter((file) => /\.(md|json|js|html|css|svg|sh|txt)$/.test(file));
const emDash = String.fromCharCode(0x2014);
const enDash = String.fromCharCode(0x2013);
const emojiPattern = /[\u{1F300}-\u{1FAFF}]/u;

for (const file of allTextFiles) {
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  assert(!text.includes(emDash), `${rel} has no em dash`);
  assert(!text.includes(enDash), `${rel} has no en dash`);
  assert(!emojiPattern.test(text), `${rel} has no emoji`);
}

if (failures > 0) {
  console.error(`\n${failures} validation failure(s).`);
  process.exit(1);
}

console.log("\nAll handoff skill checks passed.");
