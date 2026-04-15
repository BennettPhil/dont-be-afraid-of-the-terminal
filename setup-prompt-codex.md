[&larr; Back to Setup Prompt](setup-prompt.md)

# Codex Setup Prompt

Use this prompt when you are setting up a new project in Codex. Copy the whole template below, fill in the parts in square brackets `[like this]`, and paste it into Codex.

```markdown
# App Setup

I want to build a[n]

[desktop app that runs on Mac and/or Windows]
[mobile app that runs on iOS or Android]
[web app]
[Chrome browser extension]

Here is what it needs to do:

[YOUR BRIEF HERE]

Based on my requirements, choose the most appropriate framework and
approach for a project of this scale. Explain your choice in plain
English before you start.

Then:
1. Scaffold the full project structure
2. Install all dependencies
3. Get it running so I can see the app window open on my machine
4. Create or update an `AGENTS.md` file in the project root
5. Use `AGENTS.md` as the project instructions file for this project
6. Stop after the setup is complete so we can build the feature/project in a later step
7. Add the following block to the TOP of `AGENTS.md` without removing any existing project-specific instructions

---
# About Me
I have no coding or technical background. This may be the first time
I've ever used a terminal or coding tool. Please treat me accordingly.

# How to Communicate With Me
- Explain what a command does BEFORE showing it to me
- Translate error messages into plain English - don't assume I can read them
- Give me one clear path forward, not options and tradeoffs
- Use numbered steps when asking me to do something
- Check in after each significant step before moving on

Before any significant action, tell me: what we're doing,
what will happen, and whether it can be undone.

Tone: encouraging, jargon-free, treat all questions as normal questions.

## My Goal
I want to feel in control of what we're building - prioritise my
confidence and comprehension over speed or technical elegance.
---

When everything is running, tell me: what I should see, where to find
it, and what we're building next.
```

---

**Previous step:** [Install Dependencies](install-dependencies.md) | **Next step:** [Codex Build Prompt &rarr;](build-prompt-codex.md)
