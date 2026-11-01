# Omid — Portfolio

A static, accessible portfolio for **Omid**, a web designer and front-end
developer based in Kyiv. The site is built with TanStack Start and prerendered
into plain HTML for GitHub Pages.

Live site: [hopeo2.github.io](https://hopeo2.github.io)

## Design direction

The visual language is an **editorial terminal**: large confident type, generous
negative space, fine rules, a restrained purple accent and code-inspired
metadata. Surfaces, radii, spacing and colour are driven by semantic tokens in
`src/styles.css` rather than one-off utility colours.

- Dark canvas (`#282C33`) with a single purple accent (`#C778DD`)
- Chivo Mono throughout, with fluid `clamp()` display type
- One container width (`max-w-6xl`) shared by the header, pages and footer
- Project covers generated with CSS gradients, grids and abstract shapes — no
  stock photography or missing image files
- Motion limited to short hover transitions, one subtle entrance animation and
  a single ambient background layer. All motion is disabled through
  `prefers-reduced-motion`.

## Stack

| Layer      | Choice                                         |
| ---------- | ---------------------------------------------- |
| Framework  | TanStack Start 1.169 / TanStack Router 1.170   |
| UI         | React 19                                       |
| Styling    | Tailwind CSS 4 (`@tailwindcss/vite`)           |
| Language   | TypeScript 6, strict mode                      |
| Tooling    | Vite 8, Biome 2.4                              |
| Deployment | GitHub Pages, static output in `dist/client`   |

No additional UI, animation or utility packages are used.

## Routes

| Route                | Purpose                                                        |
| -------------------- | -------------------------------------------------------------- |
| `/`                  | Hero, selected work, capabilities, about preview, note, contact |
| `/projects`          | Full archive with an accessible technology filter              |
| `/projects/$slug`    | Case study for each project                                    |
| `/about`             | Story, path, working principles and contact CTA                |
| `/contact`           | Email CTA, details, social links and services                  |

The four primary routes are explicitly prerendered, along with every project
case study. A styled in-app 404/error view is provided by the root route, and
`public/404.html` mirrors the same visual language for GitHub Pages.

## Architecture

```text
src/
  components/
    about/        PortraitCard (CSS/SVG monogram)
    layout/       Container, Section, Header, Footer, Layout
    nav/          Brand, DesktopNav, MobileMenu, SocialLinks
    projects/     ProjectCard, ProjectCover, ProjectsArchive
    sections/     Hero, SelectedWork, Skills, AboutPreview, Quote, ContactCta
    system/       NotFoundView, ErrorView
    ui/           AppLink, ButtonLink, Badge, Icon, PageIntro, SectionHeading
  data/           site, navigation, projects, skills, about, contact, quote
  lib/            cn, link classification, route metadata helper
  routes/         file-based routes; routeTree.gen.ts is generated
  styles.css      theme tokens, base styles, shared utility classes
```

Content lives in `src/data/*`. Components never hardcode the email address or
social URLs.

### Link handling

`src/components/ui/AppLink.tsx` is the single link primitive:

- internal paths use TanStack Router `<Link>` (no page reload)
- `http(s)` links open in a new tab with `rel="noopener noreferrer"` and a
  screen-reader hint
- `mailto:` links stay in the current tab
- hash links scroll without reloading the document

`src/lib/links.ts` defines the allowed external, mail and hash href types.

## Content editing

- **Identity, email, location, socials** — `src/data/site.ts`
- **Projects and case-study copy** — `src/data/projects.ts`
- **Navigation labels and order** — `src/data/navigation.ts`
- **Skills groups** — `src/data/skills.ts`
- **About story, timeline, principles** — `src/data/about.ts`
- **Contact copy and services** — `src/data/contact.ts`
- **Pull quote** — `src/data/quote.ts`

### Adding a project

1. Add an entry to `projects` in `src/data/projects.ts` with a unique `slug`,
   cover variant, case-study fields and an optional `liveUrl`.
2. The explicit page list in `vite.config.ts` is generated from `projects`, so
   the new case study is prerendered automatically.
3. Run `npm run generate-routes` if any route files changed.
4. Run `npm run check && npm run typecheck && npm run build`.

There are no repository URLs in the data because no verified URLs exist. Live
project URLs use the `liveUrl` field and render through `AppLink`; add
`repoUrl` fields and render them the same way when repository links become
available.

## Scripts

```bash
npm run dev              # Vite dev server on http://localhost:3000
npm run build            # client + SSR build and static prerender
npm run preview          # preview the production build
npm run check            # Biome lint, format and import checks
npm run format           # write Biome formatting
npm run lint             # Biome lint only
npm run typecheck        # tsc --noEmit
npm run generate-routes  # regenerate src/routeTree.gen.ts
```

## Build and deployment

`npm run build` writes the static site to `dist/client`. The Vite config:

- lists every page explicitly (`/`, `/projects`, `/about`, `/contact`, plus each
  project case study)
- disables link crawling and automatic static path discovery so the sitemap
  contains only canonical routes, each exactly once
- generates `sitemap.xml` for `https://hopeo2.github.io`
- copies `public/404.html` and `public/robots.txt` into the bundle
- uses `autoSubfolderIndex` so `/about` resolves to `/about/index.html`

The GitHub Actions workflow (`.github/workflows/deploy.yml`) uses Node 22 and
runs `npm ci`, `npm run check`, `npm run typecheck` and `npm run build` before
uploading `dist/client` as the Pages artifact.

> **Required repository setting:** Settings → Pages → Build and deployment →
> Source must be **GitHub Actions**. With "Deploy from a branch" selected,
> GitHub also runs its own Jekyll build of `main`; because Jekyll renders
> `README.md` as the home page, that build replaces the deployed site with the
> README. The workflow prints a warning when the Pages source is still a branch.

## Accessibility

- Semantic landmarks, one `h1` per page and no skipped heading levels
- Skip link is the first focusable element and targets
  `<main id="main-content" tabindex="-1">`
- Visible `:focus-visible` outlines throughout; the primary button uses a white
  outline on the purple surface
- All icon-only controls have accessible names
- External links announce new-tab behaviour; email links do not open a tab
- Mobile menu: `aria-expanded` / `aria-controls`, `inert` and `aria-hidden` when
  closed, closes on Escape, outside pointer-down, link selection and route
  change
- Interactive targets meet the 24×24 CSS px minimum; card links are stretched
  across the whole card, and buttons and icon controls are 44px tall
- Decorative symbols, grids and project covers are `aria-hidden`

## Notes

- The portrait is a designed monogram card, not a missing image. Replace
  `PortraitCard` with a real optimized image if one becomes available.
- Project case-study copy is derived from the existing project descriptions. No
  employers, testimonials, metrics or credentials were invented.
- The site intentionally has no contact form because there is no backend; email
  is the reliable contact path.
