[&larr; Back to Workshop Home](README.md)

# Terminal Cheat Sheet

A quick reference for the terminal commands you'll use during this workshop. These all work the same way on macOS and Windows (via WSL).

---

## Getting Around

| Command | What it does | Example |
|---|---|---|
| `pwd` | Shows where you are right now (your current folder) | `pwd` |
| `ls` | Lists the files and folders in the current folder | `ls` |
| `ls -la` | Lists everything including hidden files, with details | `ls -la` |
| `cd foldername` | Move into a folder | `cd my-project` |
| `cd ..` | Go back up one folder | `cd ..` |
| `cd ~` | Go to your home folder | `cd ~` |
| `cd ~/Desktop` | Go to a specific place from anywhere | `cd ~/Desktop` |

---

## Creating and Managing Files and Folders

| Command | What it does | Example |
|---|---|---|
| `mkdir foldername` | Create a new folder | `mkdir my-project` |
| `touch filename` | Create a new empty file | `touch notes.txt` |
| `cp source destination` | Copy a file | `cp notes.txt backup.txt` |
| `mv oldname newname` | Rename or move a file | `mv notes.txt my-notes.txt` |
| `rm filename` | Delete a file (be careful — no undo!) | `rm old-file.txt` |
| `rm -r foldername` | Delete a folder and everything inside it | `rm -r old-project` |

---

## Reading Files

| Command | What it does | Example |
|---|---|---|
| `cat filename` | Show the entire contents of a file | `cat README.md` |
| `head filename` | Show the first 10 lines of a file | `head README.md` |
| `tail filename` | Show the last 10 lines of a file | `tail README.md` |

---

## Installing Software

| Command | What it does |
|---|---|
| `brew install packagename` | Install software using Homebrew |
| `brew update` | Update Homebrew itself |
| `npm install packagename` | Install a Node.js package |

---

## Starting the Coding Agents

| Command | What it does |
|---|---|
| `claude` | Start Claude Code |
| `codex` | Start Codex |

---

## Inside Claude Code

| Command | What it does |
|---|---|
| `/init` | Set up a CLAUDE.md file for your project |
| `/model` | Switch between models (Opus for complex tasks, Sonnet for simple ones) |
| `/agents` | Add or manage sub-agents |
| `/effort auto` | Set thinking level (auto lets it decide) |
| `/help` | Show all available commands |
| `/clear` | Clear the conversation and start fresh |
| `Ctrl + C` | Cancel the current action |
| `Escape` | Exit Claude Code |

---

## Inside Codex

| Command | What it does |
|---|---|
| `/model` | Switch between models |
| `/help` | Show all available commands |
| `Ctrl + C` | Cancel the current action |

---

## Useful Shortcuts

| Shortcut | What it does |
|---|---|
| `Tab` | Auto-complete a file or folder name (saves typing) |
| `Up arrow` | Scroll through your previous commands |
| `Ctrl + C` | Cancel whatever is currently running |
| `Ctrl + L` | Clear the screen (your history is still there) |
| `Ctrl + A` | Jump to the start of the line |
| `Ctrl + E` | Jump to the end of the line |

---

## Windows WSL Only

| Command | What it does |
|---|---|
| `wsl` | Enter the Linux environment from Command Prompt |
| `exit` | Leave the Linux environment and go back to Command Prompt |
| `explorer.exe .` | Open the current folder in Windows File Explorer |

---

## Tips

- **You can't break your computer** by typing the wrong command. The worst that usually happens is an error message.
- **Use Tab to auto-complete.** Start typing a file or folder name, then press Tab — the terminal will finish it for you.
- **Use the up arrow** to repeat previous commands instead of retyping them.
- **Copy and paste works**, but the shortcut might be different. On macOS it's `Cmd + C` / `Cmd + V`. In WSL, right-click often pastes.
- If something seems stuck, try pressing `Ctrl + C` to cancel it.
