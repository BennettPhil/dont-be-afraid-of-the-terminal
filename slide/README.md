# Don't Be Afraid Of The Terminal — Slidev

A [Slidev](https://sli.dev) version of the workshop deck. Content is copied
verbatim from the original Claude Design HTML deck; the theme is intentionally
plain (Slidev's `default` theme) so it's easy to edit.

## Run

```bash
npm install
npm run dev      # opens at http://localhost:3030
```

## Edit

All slides live in `slides.md` — one file, separated by `---`. Images are in
`public/media/` and `public/images/`.

## Export

```bash
npm run build    # static site -> dist/
npm run export   # PDF (needs playwright-chromium)
```
