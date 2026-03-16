# freshFX — VFX Artist Portfolio

Personal portfolio website for **Pawel Wesolowski** — VFX Artist with 15+ years of experience in Houdini, Nuke, Unreal Engine, SynthEyes, After Effects, Python and Blender.

Live: https://freshfx.pl

---

## Tech stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| TypeScript | 5.8 | Type safety |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | 3.4 | Styling |
| React Router | 6.28 | Client-side routing |
| react-icons | 5.5 | Skill icons |

---

## Project structure

```
web_freshfx/
├── public/                     # Static files (served as-is)
│   ├── images/
│   │   ├── about-photo.png     # Photo in About section
│   │   ├── home-illustration.png
│   │   └── demo-thumbnail.jpg  # Showreel thumbnail + OG image
│   ├── resume.pdf              # Downloadable CV
│   ├── sitemap.xml             # SEO sitemap
│   ├── robots.txt
│   ├── manifest.json           # PWA manifest
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── icons/
│   │       └── SiSynthEyes.tsx # Custom SVG icon (not in react-icons)
│   │
│   ├── components/
│   │   ├── AboutDetails.tsx    # About section with contact info
│   │   ├── BackgroundAnimation.tsx  # Canvas particle background
│   │   ├── DemoReelPlayer.tsx  # Vimeo showreel embed
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── HomeHero.tsx        # Hero with typewriter + stats counters
│   │   ├── Layout.tsx          # Page wrapper (Navbar + Footer + BG)
│   │   ├── LoaderSpinner.tsx   # Initial loading screen (1.5s)
│   │   ├── Navbar.tsx          # Fixed navbar, blur on scroll, mobile menu
│   │   ├── ProjectCard.tsx     # Card with iframe or image
│   │   ├── Resume.tsx          # CV download button
│   │   ├── ScrollToTop.tsx     # Floating scroll-to-top button
│   │   ├── SectionReveal.tsx   # Scroll animation wrapper
│   │   ├── SkillsAccordion.tsx # Clickable skill tiles with expand panel
│   │   ├── SocialLink.tsx      # Social icon link wrapper
│   │   ├── StatsCounter.tsx    # Animated number counters in hero
│   │   └── Typewriter.tsx      # Typewriter text effect
│   │
│   ├── data/                   # All content lives here — edit to update site
│   │   ├── constants.ts        # Name, email, phone, image paths
│   │   ├── projects.ts         # Showreel / project list
│   │   ├── skills.tsx          # Skill icons + descriptions + badges
│   │   └── social.ts           # GitHub, LinkedIn, X links
│   │
│   ├── hooks/
│   │   ├── useCountUp.ts       # Animated number counter hook
│   │   ├── useIsLoaded.ts      # Delay-based loaded state
│   │   └── useScrollReveal.ts  # IntersectionObserver visibility hook
│   │
│   ├── pages/                  # Individual skill subpages
│   │   ├── houdini.tsx         # /houdini
│   │   ├── nuke.tsx            # /nuke
│   │   ├── unreal-engine.tsx   # /unreal-engine
│   │   ├── syntheyes.tsx       # /syntheyes
│   │   ├── python.tsx          # /python
│   │   └── blender.tsx         # /blender
│   │
│   ├── styles/
│   │   ├── globals.css         # Base styles, scrollbar, nav underline
│   │   └── components/         # CSS Modules (Navbar, HomeHero, LoaderSpinner)
│   │
│   ├── types/index.ts          # Project and Skill interfaces
│   ├── utils/formatPhone.ts    # Strips spaces from phone for tel: links
│   ├── App.tsx                 # Router + page layout
│   └── index.tsx               # React entry point
│
├── index.html                  # HTML entry — OG tags, fonts, meta
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Routes

| Path | Description |
|------|-------------|
| `/` | One-page scroll: Hero -> Showreel -> About -> Skills -> Resume |
| `/houdini` | Houdini skill detail |
| `/nuke` | Nuke + Netflix Liberator |
| `/unreal-engine` | Unreal Engine + AEAF Award |
| `/syntheyes` | SynthEyes 3D tracking |
| `/python` | Python pipeline scripting |
| `/blender` | Blender — 20 years |

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:5175
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Updating content

All site content is in `src/data/` — no component changes needed:

- **Personal info** (name, email, phone, image paths) -> `src/data/constants.ts`
- **Showreel / projects** -> `src/data/projects.ts`
- **Skill descriptions and badges** -> `src/data/skills.tsx`
- **Social links** -> `src/data/social.ts`

To add a new skill subpage:
1. Create `src/pages/yourskill.tsx`
2. Add a route in `src/App.tsx`
3. Add the skill entry in `src/data/skills.tsx`

---

## SEO

- Open Graph and Twitter Card meta tags in `index.html`
- `public/sitemap.xml` — all 7 routes with priorities
- `public/robots.txt` — allows all, references sitemap
- OG image: `public/images/demo-thumbnail.jpg`
  (replace with a dedicated 1200x630px image for best results on LinkedIn/X)

---

## Deployment

The server expects:
- **Domain:** `freshfx.pl`
- **Port:** `5175` (dev) / served from `dist/` (production)
- **SPA routing:** configure server to serve `index.html` for all routes

Nginx example:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

---

© 2025 Pawel Wesolowski — freshFX
