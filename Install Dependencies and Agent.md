
On this page, you will find the instructions for setting up the dependencies for the "Don't Be Afraid Of The Terminal" workshop. 

## Windows

To use Windows, we need to install something called "Windows Subsystem for Linux" (WSL). You don't need to know much about what that is, but it's basically another operating system running inside your Windows machine that we will run the future CLI software on. 

Fistly open the "Command Prompt", or CMD, you can search for it in the main search bar. 
### 1. Setup WSL (Windows Only)

Firstly we need to install the wsl software, and also download the version of Linux we need, the version we will be using is called Ubuntu.

`wsl --install Ubuntu`
`wsl`
### 2. Install Homebrew (All)

We will next install Homebrew, a software package manager that will help us easily install the software that we need. You can find a better description of it here: https://brew.sh/

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

**Important**: *When this is finished, there will be some commands it asks you to copy and page, keep an eye out for them at the end of the install process.* 
### 3. Install Node.js (Codex Only)

Via Brew, we will install Node.JS a programming language that Codex is written in (kind of, happy to elaborate if you need more clarity).

`brew install nodejs`

---
# Install & Start Agent

Running the agents is the same 
## Claude Code
	> brew install claude-code
	> claude

## Codex
	> npm install @openai/codex
	> codex
