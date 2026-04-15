[&larr; Back to Debug Prompt](debug-prompt.md)

# Claude Code Debug Prompt

Use this template when something is broken and you want Claude Code to investigate it. Copy the template, fill in the parts in square brackets `[like this]`, and paste it into Claude Code.

```markdown
Before you start:
- Read `CLAUDE.md` if it exists and follow it
- Stay within Claude Code conventions
- Use `CLAUDE.md` as the project instructions file for this task
- Explain the likely root cause in plain English before making major changes

## Mode
Debug

## Expected Behaviour
A few short sentences about what you expected the software to do.
Include what you were doing when the problem happened.

## Current Behaviour
A few short sentences about what is happening instead.

## Context
- Relevant files/paths: [list them or say "see src/auth/"]
- Any error messages that you see when the problem occurs
- Any log files that exist and can be checked
- Related issue/ticket: [link or description]

## What I've Already Tried
A list of everything you've tried

## Acceptance Criteria
- [ ] [Specific, testable outcome]
- [ ] [Another outcome]

## Notes
[Any edge cases, preferences, or things to watch out for]
```

---

**Previous step:** [Claude Code Build Prompt](build-prompt-claude.md) | **Next step (optional):** [Claude Code Sub-Agent &rarr;](claude-sub-agent.md)
