# Product

## Register

brand

## Users

Non-technical workshop attendees in Berlin ("Build Your First App With AI In One Evening" / "Don't Be Afraid Of The Terminal"). Many have never opened a terminal. They are in a dimmed venue, watching slides projected on a large screen from a distance, mildly anxious, following along live on their own laptops. Secondary user: the two presenters (Phil, Igor) driving the deck live and reusing it across sessions.

## Product Purpose

A live-presentation slide deck that de-intimidates the command line and walks beginners through installing an AI coding agent and shipping a small app in one evening. Success: every command and code block is legible from the back of a dim room, the deck never makes the terminal look scary, and attendees can follow without taking notes. Built in Slidev (`slides.md`), migrated from an earlier editorial HTML deck whose content is authoritative and must stay verbatim.

## Brand Personality

Reassuring, plain-spoken, quietly confident. Three words: calm, clear, capable. It should feel like a steady expert sitting next to a nervous beginner, not a hype tech keynote.

## Anti-references

- The original Claude deck's warm vintage-paper editorial look: Fraunces serif, terracotta (#b3402a), cream paper texture. Deliberate clean break.
- Terminal-neon-on-black "hacker" decks (green-on-black everywhere as decoration).
- Generic SaaS keynote: gradient hero text, identical icon-card grids, big-number hero metrics.
- Raw, unstyled stock Slidev default.

## Design Principles

- **Don't be afraid of the terminal, literally.** The slide canvas stays calm and light; the real terminal/code appears on its own honest dark surface. Dark is reserved for "this is the actual terminal," never decoration.
- **Projector-first legibility.** High contrast and large type are non-negotiable; if a command can't be read from 8 meters in a dim room, the slide has failed.
- **Content is fixed; only the frame changes.** Slide copy and prompts are verbatim from the source deck. Design serves readability and calm, never rewrites content.
- **Restraint over decoration.** One accent, tight type scale, generous whitespace, no cards-by-reflex.
- **The copyable affordance is sacred.** Anything the audience is meant to type must be unmistakably marked as copyable, consistently, everywhere.

## Accessibility & Inclusion

WCAG AA minimum; target AAA contrast for body and code text given projector viewing. Large minimum type sizes. No meaning conveyed by color alone (copyable code is marked by surface + type, not hue). Respect `prefers-reduced-motion`; transitions are slide-level only and never block reading.
