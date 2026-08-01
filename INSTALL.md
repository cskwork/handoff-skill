# Install handoff

<details>
<summary><strong>Claude Code</strong></summary>

### Install

```bash
claude plugin marketplace add cskwork/handoff
claude plugin install handoff@handoff
```

Type `/handoff`.

### Verify

```bash
claude plugin list
```

### Update

```bash
claude plugin marketplace update handoff
```

### Uninstall

```bash
claude plugin uninstall handoff
claude plugin marketplace remove handoff
```

</details>

<details>
<summary><strong>Codex</strong></summary>

### Install

```bash
codex plugin marketplace add cskwork/handoff --ref main
codex plugin add handoff@handoff
```

Type `$handoff`.

### Verify

```bash
codex plugin list
```

### Uninstall

```bash
codex plugin remove handoff
codex plugin marketplace remove handoff
```

</details>

<details>
<summary><strong>Gemini CLI</strong></summary>

### Install (extension, always-on)

```bash
gemini extensions install https://github.com/cskwork/handoff
```

### Install (command, opt-in)

```bash
mkdir -p ~/.gemini/commands
curl -fsSL https://raw.githubusercontent.com/cskwork/handoff/main/skills/handoff/agents/gemini.toml \
  -o ~/.gemini/commands/handoff.toml
```

Type `/handoff` in a new session.

### Verify

```bash
gemini extensions list
```

### Uninstall

```bash
gemini extensions uninstall handoff
```

</details>

<details>
<summary><strong>Cursor, OpenCode, Amp, and other agent-skills harnesses</strong></summary>

### Install

```bash
npx skills add cskwork/handoff
npx skills add cskwork/handoff -g
```

Type `/handoff` in a new agent chat.

### Verify

```bash
npx skills list
```

### Update

```bash
npx skills update handoff
```

### Uninstall

```bash
npx skills remove handoff
```

</details>

<details>
<summary><strong>Antigravity (agy)</strong></summary>

### Install

```bash
agy plugin install https://github.com/cskwork/handoff
```

### Verify

```bash
agy plugin list
```

### Uninstall

```bash
agy plugin uninstall handoff
```

</details>
