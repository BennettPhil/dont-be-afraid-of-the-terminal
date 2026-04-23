[&larr; Back to Workshop Home](README.md)

# Slash Commands Cheat Sheet

Slash commands are shortcuts you type inside your coding agent — Claude Code or Codex — to change how it behaves, check on it, or clean up your session. They always start with a forward slash (`/`).

You don't need to learn all of these. The ones in **bold** are the ones you'll actually use day to day.

---

## Claude Code — Most Useful

| Command | What it does |
|---|---|
| **`/init`** | Creates or updates a `CLAUDE.md` file that tells Claude about your project. Run this once at the start of a new project. |
| **`/clear`** | Clears the conversation so far. Use when you want to start a new task with a clean slate. |
| **`/model`** | Switch between Claude models. Pick Opus for complex thinking, Sonnet for faster day-to-day work. |
| **`/help`** | Shows every command available. The safest thing to type if you're lost. |
| **`/cost`** | Shows how much this session has cost you so far. |
| **`/compact`** | Squashes older parts of the conversation into a short summary so Claude doesn't run out of memory on long sessions. |
| **`/resume`** | Continue a previous conversation instead of starting fresh. |

---

## Claude Code — Project Setup and Configuration

| Command | What it does |
|---|---|
| `/agents` | Add, edit or manage sub-agents (specialist helpers like the Fractional CTO reviewer). |
| `/memory` | View or edit the long-term notes Claude keeps about you and your preferences. |
| `/config` | Change settings like the theme or default model. |
| `/permissions` | Decide which commands Claude is allowed to run without asking. |
| `/hooks` | Set up automatic actions that run before or after certain tool calls. Advanced. |
| `/statusline` | Customise the status line at the bottom of the terminal. |
| `/mcp` | Manage MCP servers — extra integrations Claude can use (Notion, Figma, Gmail, etc.). |

---

## Claude Code — Checking and Debugging

| Command | What it does |
|---|---|
| `/status` | Shows which model, account and settings are currently active. |
| `/doctor` | Runs a health check on your Claude Code installation. Useful if something seems off. |
| `/bug` | Report a bug directly to the Claude Code team. |
| `/release-notes` | See what's changed in recent versions of Claude Code. |

---

## Claude Code — Code and Git Helpers

| Command | What it does |
|---|---|
| `/review` | Ask Claude to review a pull request or recent changes. |
| `/pr` | Shortcut for pull request workflows. |
| `/security-review` | Run a security review across your pending changes. |

---

## Claude Code — Exiting

| Command | What it does |
|---|---|
| `/exit` or `/quit` | Close Claude Code cleanly. |
| `Ctrl + C` | Cancel whatever Claude is currently doing (doesn't close the app). |
| `Escape` | Interrupt Claude while it's typing a response. |

---

## Codex — Most Useful

| Command | What it does |
|---|---|
| **`/init`** | Creates or updates an `AGENTS.md` file describing your project to Codex. Run this once at the start. |
| **`/new`** | Start a fresh conversation. Like `/clear` in Claude. |
| **`/model`** | Switch between the available Codex models. |
| **`/help`** | Shows every command available. |
| **`/status`** | Shows the current model, token usage and session details. |
| **`/compact`** | Summarise the older part of the conversation to free up memory. |
| **`/diff`** | Show the changes Codex has made to your files so far. |

---

## Codex — Controlling How It Runs

| Command | What it does |
|---|---|
| `/approval` | Change when Codex asks for permission before running things (full auto, ask first, etc.). |
| `/settings` | Open the Codex settings. |
| `/mention` | Quickly reference a file or folder in your project. |

---

## Codex — Exiting

| Command | What it does |
|---|---|
| `/quit` | Close Codex cleanly. |
| `Ctrl + C` | Cancel whatever Codex is currently doing. |

---

## The Rule of Thumb

If you forget any of this, type **`/help`** inside either agent. It will list every command available right there in your terminal, which is always more up-to-date than any cheat sheet.

---

## Tips

- **Slash commands are not prompts.** `/model` changes the model. Typing "please switch models" in English will usually also work, but the slash command is faster and more reliable.
- **Both agents use `/init` and `/help` and `/model` the same way.** If you only remember three commands, remember those.
- **You can't break anything by trying a slash command.** If it doesn't exist, the agent will just tell you so.
- **`/clear` (Claude) and `/new` (Codex) are your reset button.** If the agent is stuck on a weird tangent, clearing the conversation often fixes it faster than arguing with it.

---

**See also:** [Terminal Cheat Sheet](terminal-cheat-sheet.md) | [Git and GitHub Guide](git-github-guide.md)
