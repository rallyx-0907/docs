# RallyX Docs

Documentation site for [RallyX](https://github.com/rallyx-0907) — a research lab
building innovations for Vietnam — and for Rally, its badminton court booking
platform.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Develop

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # production build into ./dist
pnpm preview   # serve the built site locally
```

`pnpm build` is the real check: Starlight fails the build on missing frontmatter
and broken internal links.

## Structure

```
src/
├── assets/            logo-light.svg, logo-dark.svg
├── content/docs/      every page — Markdown / MDX, one file per URL
│   ├── index.mdx      splash landing page
│   ├── about.md
│   ├── missions.md
│   └── rally/
├── styles/rallyx.css  theme tokens (jade accent, cool grays)
└── content.config.ts  Starlight docs collection
public/favicon.svg
astro.config.mjs       site config: title, logo, sidebar, locales
```

## Adding a page

Drop a `.md` or `.mdx` file in `src/content/docs/` with `title` and `description`
frontmatter. Anything under `rally/` joins that sidebar section automatically;
top-level pages need an entry in the `sidebar` array in `astro.config.mjs`.

## Adding Vietnamese

The site declares a root locale, so English content sits at the top level and URLs
have no `/en/` prefix. To add Vietnamese, add to `locales` in `astro.config.mjs`:

```js
locales: {
  root: { label: 'English', lang: 'en' },
  vi: { label: 'Tiếng Việt', lang: 'vi' },
}
```

then put translated pages in `src/content/docs/vi/`. No existing file moves.
