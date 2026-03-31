[&larr; Back to Workshop Home](README.md)

# Debug Prompt

Something will break — no software is perfect. When it does, use this template to describe the problem clearly. The better you describe the gap between what you expected and what actually happened, the faster the agent can fix it.

Copy the template, fill in the parts in square brackets `[like this]`, and paste it into your agent.

```markdown
## Mode: Debug

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

**Previous step:** [Build Prompt](build-prompt.md) | **Next step (optional):** [Sub-Agents &rarr;](claude-sub-agent.md)
