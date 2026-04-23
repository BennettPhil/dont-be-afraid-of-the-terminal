[&larr; Back to Workshop Home](README.md)

# Things to Know Before You Trust the Agent

Coding agents are genuinely useful, but they behave in ways that can catch you out if you assume they work like a person or a deterministic tool. This page is a quick honest guide to the things worth knowing before you lean on one for anything that matters.

Twelve short points, split across two sections.

---

## Part 1 — The Essentials

### 1. It doesn't know when it's wrong
An LLM produces confident-sounding text whether the answer is right, wrong, or entirely invented. There's no reliable "I'm not sure" signal. It will hallucinate function names, invent library APIs, cite nonexistent docs — and it will do it confidently. When your agent says "I've fixed the bug," that is not evidence the bug is fixed. Run the code. Read the output. **Confidence is not correctness.**

### 2. It doesn't read your codebase the way you do
When you point an agent at a bunch of files, it isn't reading them one by one. It's reaching into the pile and pulling out whatever resembles your prompt — similar words, similar shapes, similar names. If the relevant file doesn't resemble your question, it gets missed, even though it's sitting right there.

**Practical consequence:** don't hope the agent finds the right file. Point it at the right file. The more specific your reference (`look at auth/session.ts`), the better your result. This is also what `CLAUDE.md` and `AGENTS.md` files are for — they tell the agent where to look without you having to repeat yourself every time.

### 3. More context isn't better context
It's tempting to dump the whole project into the prompt and let the model sort it out. Don't. The model's attention spreads thin across long contexts, important details get buried in the middle, and accuracy drops measurably. **The right five files beat all fifty.** Curate what you give it.

### 4. If it has to be right, verify it
LLMs produce output that is probably right, often right, usually right — but not always right. For anything where "usually" isn't good enough (production code, anything touching money, anything touching authentication, anything a user will see), you need a human or a deterministic check in the loop.

In practice this means: run the code, run the tests, read the diff before you accept it. The agent is a fast junior developer. You're still the reviewer.

### 5. The model is a mirror for your prompt
Vague prompt, vague output. Sloppy thinking in, sloppy thinking out. The single biggest difference between people who get great results and people who don't isn't which model they use — it's how clearly they can specify what they want. **Prompting is the skill. The model is the tool.**

---

## Part 2 — Also Good to Know

### 6. It can't do math reliably, even simple math
An LLM predicts the next likely token, not the correct numerical result. Ask it to add a column of numbers and you'll often get something that looks right and isn't. When coding this matters less (the code does the math), but never ask the model itself to be your calculator. If numbers matter, give the agent a tool — a Python script, a spreadsheet — and let the tool do the math.

### 7. It is extremely suggestible
If you ask "are you sure?" after a correct answer, it will often reverse itself and apologise. If you phrase a question as though you expect a certain answer, it tends to comply. It's trained to be agreeable, not accurate.

This means leading questions give misleading results, and second-guessing a correct answer can flip it into a wrong one. **Ask neutrally. If you disagree, say why — don't just express doubt.**

### 8. Same prompt, different answer
LLMs are non-deterministic. Ask the exact same question twice and you'll often get two different answers — sometimes in small ways, sometimes in big ones, depending on the topic. This is fine for brainstorming and exploration. It's a problem anywhere you need reproducibility. If something worked yesterday and doesn't today, you didn't necessarily break anything — the model just rolled differently.

### 9. No memory between conversations (unless you give it one)
Every new chat starts from zero. The agent doesn't "get to know you" over time the way the marketing suggests. What looks like memory is usually the system pasting notes from earlier chats into the new one behind the scenes.

This is why tools like Claude Code rely on files — `CLAUDE.md`, `AGENTS.md`, project context files. They're how you give the agent the memory it doesn't have on its own.

### 10. The model behind the name keeps changing
"Claude Opus 4.6" today isn't necessarily "Claude Opus 4.6" in six months. Providers retrain, patch behaviour, tweak system prompts, swap checkpoints. Prompts that worked perfectly last quarter can quietly start producing different output.

You can pin specific dated versions via the API, but in a chat app or terminal you're always on the moving target. If you need guaranteed long-term consistency, the only real answer is an open-weight model you download and freeze yourself.

### 11. It won't write like you, no matter what you prompt
Relevant when you start using agents for writing — emails, docs, posts. You can suppress the obvious tells (em-dashes, "it's worth noting," tidy three-part lists), but the deeper signature of a writer — what they notice, how they open, the jokes they don't make — comes from pretraining and can't really be prompted away. For actual voice-matching you need fine-tuning, not prompting.

### 12. The "pink elephant" effect
Once something is in the context, the model can't un-see it. Telling it "ignore X" or "don't mention X" often makes X *more* prominent, not less. If you want to suppress something, the best move is usually to not mention it at all. If you must override prior information, state the override positively (`use Y`) rather than negatively (`don't use X`).

---

## The Short Version

- **Confidence is not correctness.** Verify everything that matters.
- **Point it at files, don't hope it finds them.**
- **Curate the context; don't dump it.**
- **Prompt clearly and neutrally.** Leading questions give leading answers.
- **Treat the agent as a fast, suggestible junior.** You're still the one signing off.

---

**See also:** [Terminal Cheat Sheet](terminal-cheat-sheet.md) | [Slash Commands Cheat Sheet](slash-commands-cheat-sheet.md) | [Git and GitHub Guide](git-github-guide.md)
