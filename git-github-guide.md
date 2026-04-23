[&larr; Back to Workshop Home](README.md)

# An Idiot's Guide to Git and GitHub

This is a gentle, no-jargon guide for people who aren't software engineers. By the end of it, you'll have a GitHub account, your project saved safely online, and a simple habit for using your coding agent to handle the scary bits for you.

You do **not** need to memorise any of this. The whole point is that your agent can do the hard parts — you just need to understand what's happening and when to ask for help.

---

## What even is Git and GitHub?

Two different things that work together.

- **Git** is a tool that lives on your computer. It takes snapshots of your project every time you tell it to, so you can always go back to a working version if something breaks. Think of it like an unlimited "undo" button for your whole project.
- **GitHub** is a website that stores those snapshots online. It's like Google Drive, but designed for code. It also lets you share your project, back it up, and — eventually — collaborate with others.

That's it. Git saves versions. GitHub stores them online.

---

## Why should I bother?

- **Safety net.** If your agent breaks something and you can't figure out how to fix it, you can roll back to yesterday's version in seconds.
- **Backup.** If your laptop dies tomorrow, your project isn't gone.
- **Shareable.** You can send someone a link instead of zipping up folders.
- **Your agent works better with it.** Claude Code and Codex both understand git. They can make cleaner changes, review their own work, and help you undo mistakes when your project is in git.

---

## The One-Time Setup

You only do this once. After that, everything is a simple daily habit.

### 1. Create a GitHub account

Go to [github.com](https://github.com) and sign up. It's free. Pick a username you don't mind people seeing — it becomes part of your project links.

### 2. Install the GitHub command line tool

This is a small program called `gh`. It lets your terminal talk to GitHub without you having to fiddle with passwords, SSH keys, or anything scary.

On macOS or Windows (WSL), run:

```
brew install gh
```

### 3. Log in

In the terminal, run:

```
gh auth login
```

It will ask you a few questions. The safe defaults are:

- **Where do you use GitHub?** → GitHub.com
- **Preferred protocol?** → HTTPS
- **Authenticate Git with your GitHub credentials?** → Yes
- **How would you like to authenticate?** → Login with a web browser

It will show you a code, open your browser, and ask you to paste the code in. Do that, approve the access, and you're done.

### 4. Tell git who you are

One last thing. Git needs to know your name and email so it can label your snapshots. Run these two commands (swap in your real name and the email on your GitHub account):

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

That's the setup done. You will never do any of this again on this machine.

---

## Getting Your Project Into GitHub

Once you have a project folder on your computer (from the Setup Prompt step of this workshop, for example), you want to get it saved into GitHub.

**The easy way: ask your agent.**

Open Claude Code or Codex inside your project folder and paste this:

```
Please set this project up with git and push it to a new private
repository on my GitHub account.

Walk me through it before you run anything. Explain:
- what each command does
- whether it can be undone
- what I should see at the end

Use the `gh` command line tool, which is already logged in.
Make the repository private by default.
```

Your agent will handle it. It will typically:

1. Run `git init` to turn your folder into a git project
2. Run `git add .` to mark everything to be saved
3. Run `git commit -m "Initial commit"` to take the first snapshot
4. Run `gh repo create` to make a new repository on GitHub
5. Run `git push` to upload everything

When it's done, you'll have a link like `https://github.com/yourname/your-project` — that's your project, safely online.

---

## The Daily Habit

You don't need to understand the commands. You just need one simple rule:

> **Whenever you finish something that works, tell your agent to commit and push.**

That's it. Try this prompt at the end of each working session:

```
Everything is working how I want it. Please commit these changes
with a clear short message describing what we did, and push it
to GitHub. Tell me what the commit message will be before you run it.
```

Your agent will do the rest. Over time, you'll build up a clean history of working versions you can always return to.

---

## When Something Breaks

This is where git becomes your best friend. If your agent makes a change that breaks your project and you can't figure out how to fix it, you have options. The best one is almost always:

> **Ask your agent to undo the last change.**

Try this prompt:

```
Something isn't working and I'd like to go back to how things were
before your last change. Please help me undo it safely.

Before you run anything, tell me:
- what you're about to do
- what will be lost
- whether it can be reversed
```

Your agent knows the git commands for undoing things (`git restore`, `git reset`, `git revert`, checking out an old commit). You don't need to learn them — just ask, and always make it explain before it runs anything destructive.

---

## The Words You'll Hear

You don't need to memorise these. They're here so you recognise them when your agent uses them.

| Word | What it really means |
|---|---|
| **Repository** (or **repo**) | A project folder that git is keeping track of. |
| **Commit** | A snapshot of your project at a moment in time. Always has a short message saying what changed. |
| **Push** | Upload your local snapshots to GitHub. |
| **Pull** | Download the latest snapshots from GitHub to your computer. |
| **Branch** | A separate line of work, so you can try something risky without breaking the main version. Ignore this until you need it. |
| **Merge** | Combine the work from one branch into another. Your agent will handle this. |
| **Clone** | Download a project from GitHub to your computer for the first time. |
| **Remote** | The online copy of your project (i.e., GitHub). |
| **Staging** | The list of changes you're about to save in the next commit. |

---

## Good Prompts to Keep Handy

Copy these. Paste them into your agent when you need them.

**"Save my progress"**
```
Please commit all my current changes and push them to GitHub.
Use a short, clear commit message describing what we changed
in this session. Show me the message before you run the commit.
```

**"Undo the last thing"**
```
I'd like to undo your last change because [reason].
Walk me through the safest way to do that, tell me what will
be lost, and wait for me to confirm before you run anything.
```

**"What's the state of my project?"**
```
Please run `git status` and `git log --oneline -10` and explain
in plain English:
- what has changed since my last save
- what my recent history looks like
- whether there is anything I should commit now
```

**"I'm scared I'm going to lose my work"**
```
Before we do anything else, please commit and push everything
so I have a safe backup on GitHub. Then we'll carry on.
```

---

## Golden Rules

- **Commit often, especially when things work.** A working version is gold. Save it.
- **Ask your agent to explain before it runs anything destructive.** Words like `reset`, `rebase`, `force`, or `delete` in a git command are worth pausing on.
- **You cannot break GitHub.** The worst you can do locally can almost always be recovered from the online copy.
- **When in doubt, push.** An extra snapshot online has never hurt anyone.

---

**Next step:** [Terminal Cheat Sheet](terminal-cheat-sheet.md) | [Slash Commands Cheat Sheet &rarr;](slash-commands-cheat-sheet.md)
