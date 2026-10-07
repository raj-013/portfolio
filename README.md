# Raj Patel: portfolio

Personal site. React, TypeScript, Vite and Tailwind. No animation or icon libraries.

## Run it

```bash
npm install
npm run dev
```

`npm run build` type-checks and writes the production build to `dist/`.

## Editing content

Everything on the page comes from `src/data/resume.ts`, apart from the two intro paragraphs in
`src/components/Intro.tsx` and the short note in `src/components/Contact.tsx`.

A project with `featured: true` gets a full entry (tagline, metrics, first two bullets). The
rest are listed under "All projects" with their first bullet only.

## Design

- Colours are CSS variables in `src/index.css`, with a second set for `prefers-color-scheme: dark`.
  Tailwind reads them as `paper`, `ink`, `muted`, `rule` and `accent`.
- Type is Archivo (variable, using the width axis for the condensed headings) and IBM Plex Mono,
  both self-hosted through Fontsource.
- Each section is a stack of `Row`s from `src/components/Layout.tsx`: metadata in the left
  column, content in the right.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch. In the repository settings,
set Pages to deploy from that branch. `vite.config.ts` uses `base: './'`, so it works from a
project path such as `https://<username>.github.io/<repo>/` without changes.

## License

MIT
