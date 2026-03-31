## Template


```
## Mode: Build | Debug | Review | Explore]

## Goal
[One clear sentence: what should exist or be true when you're done?]

## Context
- Relevant files: [list them or say "see src/auth/"]
- Constraints: [e.g. "must not touch the DB layer", "iOS compatible"]
- Related issue/ticket: [link or description]

## What I've Already Tried (Debug mode only)
[Error message, logs, what you ruled out]

## Acceptance Criteria
- [ ] [Specific, testable outcome]
- [ ] [Another outcome]

## Notes
[Any edge cases, preferences, or things to watch out for]
```


## Pomodoro Timer

```
## Mode: Build

## Goal
I want to create a Pomodoro timer to help me focus on my tasks and avoid distractions when working on important work. 

## Context
- The timer should work in both Windows and MacOs
- It should sit in the top menu bar in macOS and in the systems tray in Windows
- The app should block access to a configurable set of apps and websites. 

## Acceptance Criteria
- [ ] I can start timers for focus time and break time
- [ ] During focus time, a set of websites and apps is blocked
- [ ] The set of websites and apps is configurable in some kind of configuration area

## Notes
Please make sure the application is thoroughly tested before delivery, and build a test plan based on the technology already in this directory. 
```
## Task Manager


```
## Mode: Build

## Goal
Build a simple task manager app that lets me manage a to-do list.

## Context
- This is a brand new project, start from scratch
- It should run in the browser

## Acceptance Criteria
- [ ] I can add a task by typing and hitting enter or clicking a button
- [ ] I can see all my tasks in a list
- [ ] I can mark a task as done
- [ ] I can delete a task
- [ ] My tasks are still there if I refresh the page

## Notes
- Keep it simple and clean looking
```
## Chrome Extension

```
## Mode: Build

## Goal
Build a Chrome extension that spots LinkedIn posts that look like they were written by AI and fades them out.

## Context
- This is a Chrome browser extension
- It should work on the LinkedIn feed page

## Acceptance Criteria
- [ ] When I scroll LinkedIn, posts that sound like generic AI writing get faded out
- [ ] Faded posts show a small label saying "Likely AI"
- [ ] I can click the label to restore the post if I still want to read it
- [ ] Normal scrolling and loading more posts still works fine

## Notes
- No API calls — just pattern matching on common AI phrases like "In today's fast-paced world" or "Let that sink in"
- Should catch new posts as they load while scrolling
```