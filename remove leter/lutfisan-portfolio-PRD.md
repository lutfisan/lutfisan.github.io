# PRD: lutfisan.github.io — Personal Portfolio Website

---

| Field | Value |
|---|---|
| **Document** | Product Requirements Document (PRD) |
| **Version** | v1.3.0 |
| **Status** | Confirmed Draft |
| **Owner** | Muhammad Lutfi Santoso |
| **Created** | June 2026 |
| **Last Updated** | 2026-06-06 |
| **Repo** | https://github.com/lutfisan/lutfisan.github.io |
| **Live URL** | https://lutfisan.github.io |

### Revision History

| Version | Date | Summary of Changes |
|---|---|---|
| v1.0.0 | 2026-06-06 | Initial PRD — technical scaffold, stack definition, design system |
| v1.2.0 | 2026-06-06 | Tailored positioning — cybersecurity/network security framing, impact metrics, certifications, security/privacy redaction rules |
| v1.3.0 | 2026-06-06 | Merged v1.0.0 + v1.2.0 · Corrected owner name to Muhammad Lutfi Santoso · Added Blog / Writing section · Updated IA, file structure, milestones |

---

## Table of Contents

1. [Executive Summary & Positioning Strategy](#1-executive-summary--positioning-strategy)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Target Audience](#3-target-audience)
4. [Tech Stack](#4-tech-stack)
5. [Repository & Deployment](#5-repository--deployment)
6. [Information Architecture](#6-information-architecture)
7. [Section Requirements](#7-section-requirements)
8. [Design System](#8-design-system)
9. [Non-Functional Requirements](#9-non-functional-requirements)
10. [Security, Privacy & Professional Risk Requirements](#10-security-privacy--professional-risk-requirements)
11. [Content Data Model](#11-content-data-model)
12. [SEO & Metadata](#12-seo--metadata)
13. [Project File Structure](#13-project-file-structure)
14. [Build & Deployment Pipeline](#14-build--deployment-pipeline)
15. [Out of Scope](#15-out-of-scope)
16. [Implementation Milestones](#16-implementation-milestones)
17. [Acceptance Criteria](#17-acceptance-criteria)
18. [Confirmed Public Profile Inputs](#18-confirmed-public-profile-inputs)
19. [Appendix A: index.html Skeleton](#appendix-a-indexhtml-skeleton)
20. [Appendix B: Tailwind CSS v4 vs v3 Key Differences](#appendix-b-tailwind-css-v4-vs-v3-key-differences)

---

## 1. Executive Summary & Positioning Strategy

### 1.1 Problem Statement

Muhammad Lutfi Santoso is a cybersecurity and network security professional with deep hands-on experience in enterprise PAM/IAM, large-scale infrastructure operations, Python-based security automation, and practical AI-agent systems. Despite a strong technical track record, he currently lacks a single authoritative digital presence that communicates this profile clearly to recruiters, security leaders, and collaborators.

The portfolio must solve three problems simultaneously:

1. Establish professional credibility and seniority in cybersecurity and network security — within the first 10 seconds of a recruiter's visit
2. Surface measurable outcomes rather than just listing tools and responsibilities
3. Remain technically simple, low-maintenance, fast, and easy to audit from a security standpoint

### 1.2 Primary Professional Narrative

The site should frame Lutfi's profile around four connected strengths, presented in this priority order:

**1 — Cybersecurity and PAM/IAM leadership**
CyberArk PAM implementation and operations, identity and privileged access governance, secure access workflow design, auditability, compliance, and operational control.

**2 — Network security and mission-critical infrastructure**
Network security architecture, large-scale infrastructure support, SIEM/log ingestion and operational monitoring, vulnerability/patch/incident-response governance.

**3 — Automation and engineering leverage**
Python-based network and security automation, CSV/Excel data processing, Nornir/Netmiko/Ansible-style workflows, reporting automation and operational dashboards.

**4 — AI-agent and productivity systems**
AI assistant workflow design, agent orchestration concepts, knowledge management pipelines, practical AI for finance, coding, and operations.

### 1.3 Recommended Headlines

| Tone | Headline |
|---|---|
| **Recommended** | Cybersecurity & Network Security Leader building secure automation for mission-critical infrastructure. |
| **More technical** | Network Security Manager specializing in PAM, secure infrastructure, automation, and AI-agent systems. |
| **More executive** | I help secure and automate large-scale infrastructure through PAM, network security, and operational intelligence. |

### 1.4 Avoided Positioning

The site must **not** present Lutfi primarily as a "Senior Software Architect." If architecture thinking is referenced, it should be clearly scoped to security automation and infrastructure systems design.

Preferred title family:

- Cybersecurity & Network Security Professional
- Network Security Manager
- PAM / CyberArk Specialist
- Security Automation Builder
- AI-Agent Systems Explorer

### 1.5 Product Description

A **static, single-page portfolio website** with a dedicated **blog section** hosted on GitHub Pages (`lutfisan.github.io`), built with a minimal vanilla stack. The site prioritises:

- **Zero framework runtime** — no React, Vue, Angular
- **Modern build tooling** — Vite 8 for development experience and optimised production bundles
- **Utility-first styling** — Tailwind CSS v4 with CSS-first configuration model
- **Type safety** — TypeScript 6.0.3 strict mode throughout
- **Content-driven** — all copyable content in typed data files; layout never needs touching for content updates
- **Security-conscious supply chain** — minimal dependencies; no analytics, no CMS, no backend, auditable codebase

---

## 2. Goals & Success Metrics

### 2.1 Primary Goals

1. **Professional credibility** — Make Lutfi's cybersecurity, PAM, and network security seniority clear within the first 10 seconds.
2. **Achievement visibility** — Surface measurable, non-exaggerated outcomes from real operational work.
3. **Technical differentiation** — Show that Lutfi is not only an operator but a builder of secure automation systems.
4. **Thought leadership** — The Blog section establishes a public knowledge-sharing track record.
5. **Low maintenance** — Content updates (projects, posts, certifications) require only editing typed data files.
6. **Recruiter and manager clarity** — The site must quickly answer: What does Lutfi specialise in? What scale has he worked at? What outcomes has he produced? How can someone contact him?

### 2.2 Success Metrics

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| First Contentful Paint (FCP) | < 1.0s |
| Largest Contentful Paint (LCP) | < 1.5s |
| Cumulative Layout Shift (CLS) | < 0.05 |
| JS + CSS gzipped bundle (portfolio) | < 50 KB |
| Recruiter scan time | Core profile understood in ≤ 30 seconds |
| Maintenance cost | New project or blog post added by editing one data/content file |

---

## 3. Target Audience

| Audience | Primary Question | Site Response |
|---|---|---|
| Recruiters / HR | Is Lutfi senior enough and relevant? | Clear title, measurable impact metrics, credential verification links |
| Security Leaders | Can Lutfi own complex security operations? | PAM, IAM, incident response, compliance, SIEM, vulnerability governance experience |
| Network / Infra Managers | Can Lutfi handle mission-critical scale? | 100,000+ device context, automation, NMS, telemetry, operational reporting outcomes |
| Engineering Collaborators | Can Lutfi build useful systems? | Project cards, architecture highlights, GitHub links |
| AI / Automation Community | What is Lutfi building and thinking about? | AI-agent systems, blog posts, automation projects |
| Blog / Writing Audience | What insights does Lutfi share publicly? | Technical blog posts on security, automation, AI agents, and career experience |

---

## 4. Tech Stack

### 4.1 Core Stack

| Layer | Technology | Version | Rationale |
|---|---|---|---|
| Language | TypeScript | **6.0.3** | Strict typing, modern language features, zero runtime overhead |
| Build Tool | Vite | **8.0.16** | Rolldown-based bundler, instant HMR, native ESM, MPA support |
| CSS Framework | Tailwind CSS | **4.3.0** | CSS-first config model, zero-JS runtime, zero dead CSS in production |
| Markdown Parser | marked | latest | Lightweight, zero-dependency markdown → HTML (blog posts only) |
| Package Manager | npm | latest | Lockfile committed for reproducible builds |
| Hosting | GitHub Pages | — | Free, CDN-backed, native `github.io` domain |
| CI/CD | GitHub Actions | — | Native; zero-cost for public repos |

> **Design constraint:** Zero runtime framework. Only `marked` is added beyond the core stack and only for blog build-time processing — it runs at build time, not in the browser.

### 4.2 Development Dependencies

```jsonc
// package.json
{
  "devDependencies": {
    "typescript": "^6.0.3",
    "vite": "^8.0.16",
    "@tailwindcss/vite": "^4.3.0",
    "tailwindcss": "^4.3.0",
    "marked": "^12.0.0",    // build-time only: markdown → HTML for blog posts
    "@types/marked": "^6.0.0"
  }
}
```

> **Zero runtime dependencies.** `marked` runs only during `vite build` via a custom Vite plugin. No `node_modules` are shipped to the browser.

### 4.3 TypeScript 6.0.3 Configuration

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2024",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2024", "DOM", "DOM.Iterable"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "verbatimModuleSyntax": true,
    "useDefineForClassFields": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "baseUrl": ".",
    "paths": {
      "@/*":            ["src/*"],
      "@data/*":        ["src/data/*"],
      "@content/*":     ["src/content/*"],
      "@components/*":  ["src/components/*"],
      "@utils/*":       ["src/utils/*"]
    }
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### 4.4 Tailwind CSS v4 — CSS-First Configuration

Tailwind CSS v4 uses **CSS-first configuration**. No `tailwind.config.js`. All theme tokens live in the root CSS file.

```css
/* src/styles/main.css */
@import "tailwindcss";

@theme {
  /* Typography */
  --font-display: "Sora", sans-serif;
  --font-body:    "DM Sans", sans-serif;
  --font-mono:    "JetBrains Mono", monospace;

  /* Colour Palette — Precision Dark */
  --color-background:     #0a0f1a;
  --color-surface:        #111827;
  --color-surface-raised: #1a2234;
  --color-border:         #1f2d42;
  --color-text:           #e2e8f0;
  --color-muted:          #64748b;
  --color-accent:         #38bdf8;   /* sky-400 — primary interactive accent */
  --color-accent-warm:    #fb923c;   /* orange-400 — category / secondary accent */
  --color-success:        #4ade80;   /* green-400 — production status */
  --color-warning:        #facc15;   /* yellow-400 — active-dev status */

  /* Spacing */
  --spacing-section: 6rem;

  /* Radius */
  --radius-card: 0.75rem;

  /* Shadows */
  --shadow-card: 0 4px 24px -4px rgba(56, 189, 248, 0.08);
  --shadow-glow: 0 0 40px -8px rgba(56, 189, 248, 0.25);
}

/* Light mode overrides — toggled by adding .light class to <html> */
@variant light (&:where(.light, .light *)) {
  --color-background:     #f8fafc;
  --color-surface:        #ffffff;
  --color-surface-raised: #f1f5f9;
  --color-border:         #e2e8f0;
  --color-text:           #0f172a;
  --color-muted:          #64748b;
}

/* Respect reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration:   0.01ms !important;
    transition-duration:  0.01ms !important;
  }
}
```

### 4.5 Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { blogPlugin } from './src/plugins/blog-plugin';  // custom build-time MD plugin

export default defineConfig({
  plugins: [
    tailwindcss(),
    blogPlugin(),   // parses src/content/blog/*.md → injects rendered HTML at build time
  ],
  base: '/',      // root domain: username.github.io
  build: {
    outDir: 'dist',
    target: 'es2024',
    cssMinify: true,
    rollupOptions: {
      // MPA: portfolio SPA + blog index + individual post pages
      input: {
        main:  'index.html',
        blog:  'blog/index.html',
        // Individual post entry points are generated dynamically by blogPlugin()
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
```

---

## 5. Repository & Deployment

### 5.1 Branch Strategy

```
main          ← source code (TypeScript, CSS, HTML, Markdown posts)
              ↕ GitHub Actions builds on every push to main
gh-pages      ← compiled /dist output (auto-managed by CI — never push manually)
```

### 5.2 GitHub Pages Settings

| Setting | Value |
|---|---|
| Source | Deploy from branch: `gh-pages` / `/ (root)` |
| Custom domain | *(not required for v1)* |
| Enforce HTTPS | ✅ Enabled |

### 5.3 `.gitignore`

```gitignore
node_modules/
dist/
.DS_Store
*.local
.env*
```

### 5.4 GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npx tsc --noEmit

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: ''   # Add custom domain here if needed
```

---

## 6. Information Architecture

### 6.1 Single-Page Portfolio + Blog MPA

```
index.html  (portfolio SPA — smooth-scroll anchor navigation)
├── <header>   Navigation (logo MLS + section links + CTAs)
├── <main>
│   ├── #hero             Full-viewport landing
│   ├── #impact           Impact metrics band
│   ├── #about            Professional narrative
│   ├── #skills           Technology domain groups
│   ├── #projects         Featured project cards
│   ├── #experience       Career timeline
│   ├── #certifications   Credential band
│   ├── #latest-writing   3 most recent blog post teasers
│   └── #contact          Email CTA + social links
└── <footer>

/blog/index.html            (Blog index — all posts, reverse chronological)
/blog/[slug]/index.html     (Individual blog post pages — generated at build time)
```

### 6.2 Recommended Section Order (portfolio page)

The order is deliberate: impact before narrative. Recruiters and managers should see measurable outcomes before reading longer background text.

1. Hero
2. Impact Metrics
3. About
4. Skills
5. Projects
6. Experience
7. Certifications
8. Latest Writing
9. Contact

### 6.3 Navigation Structure

- **Desktop nav links:** `About` · `Skills` · `Projects` · `Experience` · `Certifications` · `Blog` · `Contact`
- **Logo:** `MLS` initials in monospace with accent-colour underline
- **CTAs:** `View Projects` (primary) · `Get in Touch` (secondary)
- **No downloadable CV in v1**
- **Mobile:** hamburger → full-screen overlay with staggered link animations

---

## 7. Section Requirements

### 7.1 Header / Navigation

**Requirements:**

- Logo: `MLS` in monospace font with accent-colour underline
- Nav links: `About`, `Skills`, `Projects`, `Experience`, `Certifications`, `Blog`, `Contact`
- CTA buttons: `View Projects` (primary, anchor) + `Get in Touch` (secondary, anchor)
- No downloadable CV link in v1
- Theme toggle: light/dark mode icon, persisted in `localStorage`
- Sticky with `backdrop-filter: blur(12px)` and subtle bottom border on scroll

**Behaviour:**

- Active nav link reflects current in-viewport section via `IntersectionObserver`
- `Blog` link navigates to `/blog/` (full page navigation, not anchor)
- External links use `target="_blank" rel="noopener noreferrer"`
- Hamburger menu: `aria-expanded` and `aria-controls` managed by TypeScript

---

### 7.2 Hero Section

**Layout:** Full viewport height (`min-h-screen`), vertically centred content.

**Copy:**

| Element | Content |
|---|---|
| Eyebrow | `Jakarta, Indonesia · Cybersecurity · Network Security · Automation` |
| H1 | `Muhammad Lutfi Santoso` |
| Rotating subtitle | Network Security Manager → CyberArk PAM / IAM Specialist → Security Automation Builder → Mission-Critical Infrastructure Operator → AI-Agent Systems Explorer |
| Tagline | `I secure and automate large-scale infrastructure by combining PAM, network security, operational visibility, and practical engineering.` |
| CTA primary | `View Projects` (anchor: `#projects`) |
| CTA secondary | `Get in Touch` (anchor: `#contact`) |
| Social links | GitHub · LinkedIn · Email |

**Tone:** Confident, specific, measurable. Avoid phrases like "world-class," "visionary," or "elite."

**Technical implementation:**

- Title cycling: vanilla TypeScript class with CSS `animation` or `requestAnimationFrame`; respect `prefers-reduced-motion`
- Social icons: inline SVG, no icon library
- Background decoration: CSS-only animated grid or noise texture (no JS)
- Scroll indicator: animated chevron at bottom centre

---

### 7.3 Impact Metrics Section

A full-width band placed immediately after the hero, before the About section. This is the highest-attention placement for measurable achievements.

**Layout:** `grid-cols-2 md:grid-cols-3 lg:grid-cols-6` of stat cards; or two rows of 3.

**Required metrics:**

| Value | Label | Description |
|---|---|---|
| `100,000+` | Mission-critical devices | Supported CyberArk integration context across large-scale device environments |
| `1,000+` | Critical systems supported | Worked across large infrastructure estates requiring reliable operational control |
| `24h → <15m` | Workflow acceleration | Reduced multivendor configuration processing time through automation |
| `80%` | Manual effort reduced | Automated router-data processing workflows to reduce repetitive manual work |
| `15-min` | Operational visibility | Improved reporting cadence toward near-real-time operational awareness |
| `30%` | IPAM efficiency gain | Built IPAM-style workflows that improved operational efficiency |

**Copy rule:** Each metric must include a short qualifier beneath the value to avoid exaggeration. The numbers should read as real and credible, not inflated.

**Data source:** `src/data/impact.ts`

---

### 7.4 About Section

**Layout:** Two-column desktop (`md:grid-cols-[1fr_2fr]`), stacked on mobile.

**Left column:**
- Professional photo (circular, accent ring) — or monogram avatar as placeholder
- Stats badges:
  - `6+ Years Experience`
  - `Based in Jakarta, ID`
  - `Cybersecurity & Network Security`
  - `Open to Strategic Collaboration`

> **Note:** Do not use `10+ Years Experience` unless explicitly confirmed.

**Right column — recommended narrative:**

> I am a cybersecurity and network security professional based in Jakarta, Indonesia, with experience across PAM/IAM, CyberArk operations, network security architecture, SIEM/log ingestion, incident response, and vulnerability governance.
>
> My work focuses on making mission-critical infrastructure more secure, observable, and efficient. I have supported large-scale environments involving thousands of systems and high-volume operational data, while building automation that reduces manual effort and improves reporting speed.
>
> I am currently focused on security automation, privileged access governance, infrastructure visibility, and practical AI-agent workflows that help technical teams work faster without weakening control, auditability, or security.

**Data source:** `src/data/about.ts`

---

### 7.5 Skills Section

**Layout:** Domain-grouped badges. No percentage bars or star ratings.

**Skill groups and items:**

#### Security, PAM & IAM
CyberArk PAM · Privileged Access Management · Identity & Access Management · Zero Trust · PKI · SIEM / Log Ingestion · Incident Response · Vulnerability Governance · Patch Governance · ISO 27001 Awareness

#### Network Security & Infrastructure
Network Security Architecture · Firewall / Routing / Switching · ESXi · NMS Platforms · LibreNMS · NEC iPasoLink · SNMP · gNMI · Network Telemetry

#### Automation & Data Processing
Python · Nornir · Netmiko · Ansible-style Automation · CSV / Excel Processing · API Integration · Reporting Automation · Tableau · Power BI

#### Software & Systems Engineering
TypeScript · Go · REST APIs · GitHub Actions · Docker · Linux / systemd · Secure Scripting · Logging & Error Handling

#### AI Agents & Knowledge Systems
AI-Agent Orchestration · Hermes Agent · Prompt Engineering · Obsidian / Second-Brain Workflows · Finance & Coding Assistant Workflows · Retrieval-style Knowledge Management

**Implementation rules:**

- Each group has a heading with its domain icon (inline SVG)
- Items render as pill badges using `font-mono`
- Hover: slight glow in accent colour
- No sorting, no proficiency levels — presence in the list implies meaningful working experience

**Data source:** `src/data/skills.ts`

---

### 7.6 Projects Section

**Layout:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

**Project ordering** (security/PAM credibility first):

1. CybArBot
2. CyberArk PAS REST Auditor
3. Hyperscale Telemetry NMS
4. OpenClaw AI Agents
5. Axiom Portfolio Agent
6. CyberShield Indonesia

**Each ProjectCard displays:**
- Project name (bold)
- Category badge
- One-sentence description
- Architecture highlights (3–5 bullet points) — visible on hover expand or always shown for featured
- Tech stack pills (up to 6 tags)
- Status badge: `Production` / `Active Dev` / `Concept / PRD`
- Links: GitHub (if public), Docs

**Project definitions:**

| # | Project | Category | Status |
|---|---|---|---|
| 1 | **CybArBot** | PAM Tooling | Active Dev |
| 2 | **CyberArk PAS REST Auditor** | Security Tooling | Active Dev |
| 3 | **Hyperscale Telemetry NMS** | Network Monitoring | Concept / PRD |
| 4 | **OpenClaw AI Agents** | AI Infrastructure | Active Dev |
| 5 | **Axiom Portfolio Agent** | AI Agent / Finance | Active Dev |
| 6 | **CyberShield Indonesia** | Cybersec Education | Concept / PRD |

**Redaction rule:** Every project description is reviewed against Section 10 (Security, Privacy & Professional Risk Requirements) before publication. No internal IP addresses, customer names, tenant details, or non-public architecture data.

**Data source:** `src/data/projects.ts`

---

### 7.7 Experience Section

**Layout:** Vertical timeline with left accent line and circular node markers. Staggered entrance animation via `IntersectionObserver`.

**Required entry:**

**Role:** Network Security Manager
**Company:** Huawei
**Location:** Jakarta, Indonesia
**Date:** July 2019 – Present

**Highlights:**
- Managed network security operations and governance across mission-critical infrastructure environments.
- Supported CyberArk PAM integration and privileged access workflows across large-scale device estates.
- Improved configuration and reporting workflows through Python-based automation, reducing multivendor processing time from approximately 24 hours to under 15 minutes.
- Automated large router-data processing activities, reducing manual workload by approximately 80%.
- Supported vulnerability governance, patch coordination, SIEM/log ingestion, and incident-response activities across operational teams.

**Data integrity rule:** Only include employer names, dates, certifications, and metrics that have been explicitly confirmed. When in doubt, keep values generic or omit them.

**Data source:** `src/data/experience.ts`

---

### 7.8 Certifications Section

**Placement:** After Experience, as a compact credential grid.

**Layout:** Cards grouped by category. Each card shows: cert name, issuer, category badge, and a verification link (opens in `_blank`).

**Display rules:**
- Group by: Security · Cloud · Networking · Automation · Data · AI · IoT
- Show external Credly/Coursera link where available
- Open all links with `rel="noopener noreferrer"`
- Use the public spelling **CCNA Cybersecurity Operations** (not CyberOps or CyberSec)

**Confirmed certifications:**

| Certification | Issuer | Category | Verification URL |
|---|---|---|---|
| HCIA IoT | Huawei | IoT | *(pending)* |
| HCIA Security | Huawei | Security | *(pending)* |
| Microsoft Certified: Azure Fundamentals | Microsoft | Cloud | https://www.credly.com/badges/956a4498-6df9-446f-b069-32ed0fe1b2d8/public_url |
| AWS Certified Cloud Practitioner | Amazon Web Services | Cloud | https://www.credly.com/badges/3e0c62f3-8bba-4c22-b19b-c1e606d08ba4/public_url |
| Google AI Essentials | Google / Coursera | AI | https://www.coursera.org/account/accomplishments/specialization/BS89XSFM0PLZ |
| Cisco DevNet Associate | Cisco | Automation | https://www.credly.com/badges/08572150-a887-49b8-9c51-6f4d7c355b43/linked_in_profile |
| CCNA | Cisco | Networking | https://www.credly.com/badges/fd78aa61-0e8b-4dca-b3c7-797839fb4733?source=linked_in_profile |
| CCNA Cybersecurity Operations | Cisco | Security | https://www.credly.com/badges/ad5fb410-2ca9-4178-a550-ef50aade5825/public_url |
| CCNA Automation | Cisco | Automation | https://www.credly.com/badges/08572150-a887-49b8-9c51-6f4d7c355b43/public_url |
| Data Science Foundations | IBM / Credly | Data | https://www.credly.com/badges/06337717-d185-4644-a01f-17a256fcb67f/public_url |

**Data source:** `src/data/certifications.ts`

---

### 7.9 Blog / Writing Section

#### 7.9.1 Purpose

The blog establishes a public knowledge-sharing track record that supports three goals:

1. Demonstrates thought leadership in cybersecurity, automation, and AI-agent workflows
2. Improves organic SEO through long-form technical content
3. Gives collaborators and employers insight into how Lutfi thinks and communicates

#### 7.9.2 Blog Architecture

The blog is implemented as a **Multi-Page Application (MPA)** — separate HTML entry points generated at Vite build time. Blog posts are authored as `.md` files with YAML frontmatter. A custom Vite plugin (`src/plugins/blog-plugin.ts`) parses them at build time using `marked`, injects rendered HTML into post page templates, and registers each post as a Vite input entry.

```
/blog/               → Blog index page (all posts, reverse chronological)
/blog/[slug]/        → Individual post page (e.g., /blog/cyberark-api-audit-tips/)
```

#### 7.9.3 Blog Index Page (`/blog/`)

**Requirements:**
- Header: same shared nav component as portfolio
- Page title: `Writing` or `Blog` with eyebrow label
- Post grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Category filter tabs: `All` · `Security` · `Automation` · `AI & Agents` · `Network` · `Career`
- Filter is client-side only (no page reload); implemented in vanilla TypeScript
- Search: optional in v1 — can be deferred to v1.1

**Each PostCard displays:**
- Title (bold, links to post)
- Category badge (colour-coded per category)
- Published date (formatted: `June 2026`)
- Estimated read time (computed at build time: `word count ÷ 200 wpm`)
- 1–2 sentence excerpt (from frontmatter or auto-generated from first 150 words)
- Cover image (optional; falls back to category-coloured abstract pattern)

#### 7.9.4 Individual Post Page (`/blog/[slug]/`)

**Requirements:**
- Same header/nav as portfolio
- Back link: `← All posts` (links to `/blog/`)
- Post header: title, eyebrow (category + date + read time)
- Body: markdown-rendered HTML with styled typography
- Related posts: 2 posts from the same category (computed at build time)
- No comments, no likes, no social sharing widgets in v1
- Share link: copy-URL-to-clipboard button only (no third-party SDK)

#### 7.9.5 Latest Writing Strip (on portfolio page)

A `#latest-writing` section on the main portfolio page, placed between Certifications and Contact:

- Shows the 3 most recent blog posts as compact horizontal cards
- `View all posts →` link to `/blog/`
- This section is generated from `src/data/blog.ts` (populated at build time by `blog-plugin.ts`)

#### 7.9.6 Post Content Model (Frontmatter)

```markdown
---
title: "How I Automated CyberArk Access Auditing with Python"
slug: cyberark-access-audit-automation
date: 2026-05-20
category: Security
tags: [CyberArk, Python, PAM, Automation]
excerpt: "A practical walkthrough of building an async Python tool that maps IP addresses to accessible CyberArk users — and the proxy/401 edge cases that will test you."
featured: false
coverImage: ""   # optional: path relative to /public/assets/blog/
---

<!-- Post content in Markdown below -->
```

#### 7.9.7 Recommended First Posts (Backlog)

| Title | Category | Priority |
|---|---|---|
| How I Automated CyberArk Access Auditing with Python | Security | High |
| Building CybArBot: Telegram + CyberArk PAM in Go | Security / Automation | High |
| AI Agents for Infrastructure Engineers: What Actually Works | AI & Agents | Medium |
| Making Sense of gNMI and Network Telemetry at Scale | Network | Medium |
| From Operator to Builder: Why I Started Writing Automation Tools | Career | Medium |
| CCNA to CyberArk: My Path Through Network Security | Career | Low |

#### 7.9.8 Content Guidelines

- Write in first person; be specific and honest; avoid keyword-stuffed corporate voice
- Always include a concrete example, code snippet, or architectural diagram
- Do not publish internal architecture details, customer names, hostnames, or credentials — apply the same redaction rules as project cards (see Section 10)
- Target post length: 800–2,000 words

**Data source:** `src/content/blog/*.md` → parsed by `src/plugins/blog-plugin.ts` → injected into `/blog/` and `/blog/[slug]/` pages

---

### 7.10 Contact Section

**Layout:** Minimal, high-impact. No contact form.

**Copy:**

| Element | Content |
|---|---|
| Headline | `Let's Secure and Automate What Matters.` |
| Subtext | `Open to cybersecurity, PAM/IAM, network security, infrastructure automation, and AI-agent collaboration opportunities.` |
| Primary CTA | `Send an Email` → `mailto:` |
| Secondary links | LinkedIn · GitHub |
| Location note | `Jakarta, Indonesia — open to remote, hybrid, and strategic collaboration.` |

> **No contact form in v1.** Forms require a backend or third-party service. To maintain the zero-backend constraint, direct `mailto` and social links are used.

---

### 7.11 Footer

- Left: `© 2026 Muhammad Lutfi Santoso` + `Built with TypeScript + Vite + Tailwind CSS v4`
- Right: GitHub · LinkedIn · Email icon links
- Divider line above

---

## 8. Design System

### 8.1 Aesthetic Direction

**"Precision Dark"** — a refined dark-background editorial aesthetic reflecting technical authority. Not a generic "developer portfolio." References: Linear.app, Raycast, Oxide Computer, Vercel dashboard.

Characteristics:
- **Dark-first** with a well-considered light mode
- **Accent sparsity** — sky-400 appears on interactive elements and heading underlines only; never as background fill
- **Sparse, scannable typography** — no paragraph walls; deliberate hierarchy
- **Subtle motion** — entrance animations are quick (200–400ms), purposeful, not decorative

### 8.2 Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / H1 | Sora | 700 | Hero name only |
| Heading H2–H3 | Sora | 600 | Section titles |
| Body | DM Sans | 400 / 500 | All paragraphs and body copy |
| Labels / Tags / Nav | DM Sans | 500 | Pills, nav links, metadata |
| Code / Monospace | JetBrains Mono | 400 | Tech tags, inline code, initials logo |

**Font loading:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

### 8.3 Colour Palette

| Token | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| `--color-background` | `#0a0f1a` | `#f8fafc` | Page background |
| `--color-surface` | `#111827` | `#ffffff` | Cards, nav background |
| `--color-surface-raised` | `#1a2234` | `#f1f5f9` | Hover states |
| `--color-border` | `#1f2d42` | `#e2e8f0` | Dividers, card borders |
| `--color-text` | `#e2e8f0` | `#0f172a` | Primary body text |
| `--color-muted` | `#64748b` | `#64748b` | Metadata, secondary text |
| `--color-accent` | `#38bdf8` | `#0284c7` | Links, CTAs, active states |
| `--color-accent-warm` | `#fb923c` | `#ea580c` | Category badges |
| `--color-success` | `#4ade80` | `#16a34a` | Production status |
| `--color-warning` | `#facc15` | `#ca8a04` | Active-dev status |

### 8.4 Component Patterns

#### Pill / Tag Badge
```html
<span class="inline-flex items-center px-3 py-1 rounded-full
             text-xs font-mono font-medium
             bg-[--color-surface] border border-[--color-border]
             text-[--color-accent]">
  Go
</span>
```

#### Section Heading
```html
<div class="mb-16">
  <p class="text-sm font-mono text-[--color-accent] tracking-widest uppercase mb-3">
    02 / Skills
  </p>
  <h2 class="text-3xl md:text-4xl font-display font-semibold text-[--color-text]">
    What I Work With
  </h2>
</div>
```

#### Project / Blog Card
```html
<article class="group relative flex flex-col p-6 rounded-[--radius-card]
                bg-[--color-surface] border border-[--color-border]
                hover:border-[--color-accent]/30 hover:shadow-[--shadow-card]
                transition-all duration-300">
  <!-- ... -->
</article>
```

#### Impact Metric Card
```html
<div class="flex flex-col items-center text-center p-6
            border border-[--color-border] rounded-[--radius-card]">
  <span class="text-3xl font-display font-bold text-[--color-accent] mb-1">
    24h → &lt;15m
  </span>
  <span class="text-sm font-medium text-[--color-text] mb-2">
    Workflow acceleration
  </span>
  <span class="text-xs text-[--color-muted] leading-relaxed">
    Reduced multivendor configuration processing time through automation.
  </span>
</div>
```

### 8.5 Animations

All animations use CSS or the Web Animations API (vanilla TypeScript). No animation libraries.

| Animation | Trigger | Duration | Easing |
|---|---|---|---|
| Section entrance (fade-up) | `IntersectionObserver` | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Hero title cycling | `setInterval` / CSS | 3000ms cycle | `ease-in-out` |
| Card hover (border + shadow) | CSS `:hover` | 300ms | `ease` |
| Nav link hover | CSS `:hover` | 150ms | `ease` |
| Theme toggle | CSS class toggle | 200ms | `ease` |
| Post category filter | CSS class show/hide | 200ms | `ease` |

---

## 9. Non-Functional Requirements

### 9.1 Performance

- Zero JS framework runtime — vanilla TypeScript compiles to minimal modern JS
- All fonts with `display=swap` to prevent FOIT
- Images: WebP format, `loading="lazy"`, explicit `width` and `height` attributes
- Profile photo: max 400×400px WebP, < 50KB
- Blog cover images: max 800×400px WebP, < 100KB
- All icons: inline SVG — no icon library
- Preconnect hints for Google Fonts in `<head>`
- `cssMinify: true` in Vite build config

### 9.2 Responsive Design

Mobile-first. All components default to mobile layout (`sm`) and are enhanced for wider breakpoints.

| Breakpoint | Width | Key Layout Changes |
|---|---|---|
| default | < 640px | Single column; full-width cards |
| `md` | ≥ 768px | Two-column grids; full nav bar visible |
| `lg` | ≥ 1024px | Three-column project/blog grid; full timeline |
| `xl` | ≥ 1280px | `max-w-6xl` content width cap applied |

### 9.3 Accessibility (WCAG 2.1 AA)

- Semantic HTML5: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<aside>`
- All `<section>` elements have `aria-labelledby` pointing to their heading `id`
- Keyboard navigation: all interactive elements reachable via `Tab`; custom focus ring using `ring-[--color-accent]`
- Skip-to-content link: first focusable element in `<body>`
- `aria-label` on all icon-only buttons and social links
- Minimum contrast ratios: 4.5:1 (normal text), 3:1 (large text)
- Hamburger menu: `aria-expanded` and `aria-controls` managed in TypeScript
- Blog post body: semantic heading hierarchy enforced (`h2` → `h3` → `h4`), prose `max-w-prose` for readability

### 9.4 Browser Support

Last 2 major versions of Chrome, Firefox, Safari, and Edge. No IE11.

---

## 10. Security, Privacy & Professional Risk Requirements

Because Lutfi works in cybersecurity and mission-critical infrastructure, all published content must be reviewed against these rules before going live.

### 10.1 Do Not Publish

- Internal IP addresses or hostname patterns
- Customer or client names unless publicly approved in writing
- Huawei internal project names, non-public technical details, or internal architecture specifics
- CyberArk tenant/server/vault details
- Screenshots containing infrastructure data
- Real vulnerability data or CVE exploitation details
- Internal network diagrams or topology maps
- API tokens, credentials, usernames, passwords
- Any data that could expose an employer to security or legal risk

### 10.2 Safe Framing for Public Content

Use generic, public-safe language in all project descriptions and blog posts:

| Avoid | Use instead |
|---|---|
| `10.x.x.x/24 internal VLAN` | `internal network segment` |
| `[Client name] production environment` | `enterprise production environment` |
| `CyberArk vault at vault-prod.company.internal` | `enterprise PAM vault` |
| `Huawei [internal product name]` | `large-scale infrastructure platform` |

### 10.3 Project Redaction Checklist

Before publishing any project card or blog post, verify:

- [ ] No confidential customer or client references
- [ ] No internal system names, hostnames, or IP addresses
- [ ] No non-public employer project names or internal tooling names
- [ ] No credentials, tokens, keys, or secrets (even sample/test values)
- [ ] No overclaiming of unauthorised architecture ownership
- [ ] No content that could create compliance or legal liability

### 10.4 Blog Post Additional Rules

Blog posts about real work must use the same public-safe framing as project cards. Posts describing architecture or automation approaches are acceptable if they discuss patterns and methods, not specific infrastructure details.

---

## 11. Content Data Model

All content lives in `src/data/*.ts` as typed TypeScript constants. No CMS. Layout code never needs touching for content updates.

### 11.1 `src/data/meta.ts`

```typescript
export const siteMeta = {
  name:      'Muhammad Lutfi Santoso',
  shortName: 'Lutfi',
  initials:  'MLS',
  title:     'Cybersecurity & Network Security Professional',
  location:  'Jakarta, Indonesia',
  tagline:   'I secure and automate large-scale infrastructure by combining PAM, network security, operational visibility, and practical engineering.',
  email:     '',   // to be filled before launch
  github:    'https://github.com/lutfisan',
  linkedin:  'https://www.linkedin.com/in/lutfisan/',
} as const;
```

### 11.2 `src/data/impact.ts`

```typescript
export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    value: '100,000+',
    label: 'Mission-critical devices',
    description: 'Supported CyberArk integration context across large-scale device environments.',
  },
  {
    value: '1,000+',
    label: 'Critical systems supported',
    description: 'Worked across large infrastructure estates requiring reliable operational control.',
  },
  {
    value: '24h → <15m',
    label: 'Workflow acceleration',
    description: 'Reduced multivendor configuration processing time through automation.',
  },
  {
    value: '80%',
    label: 'Manual effort reduced',
    description: 'Automated router-data processing workflows to reduce repetitive manual work.',
  },
  {
    value: '15-min',
    label: 'Operational visibility',
    description: 'Improved reporting cadence toward near-real-time operational awareness.',
  },
  {
    value: '30%',
    label: 'IPAM efficiency gain',
    description: 'Built IPAM-style workflows that improved operational efficiency.',
  },
];
```

### 11.3 `src/data/about.ts`

```typescript
export const about = {
  paragraphs: [
    'I am a cybersecurity and network security professional based in Jakarta, Indonesia, with experience across PAM/IAM, CyberArk operations, network security architecture, SIEM/log ingestion, incident response, and vulnerability governance.',
    'My work focuses on making mission-critical infrastructure more secure, observable, and efficient. I have supported large-scale environments involving thousands of systems and high-volume operational data, while building automation that reduces manual effort and improves reporting speed.',
    'I am currently focused on security automation, privileged access governance, infrastructure visibility, and practical AI-agent workflows that help technical teams work faster without weakening control, auditability, or security.',
  ],
  stats: [
    { label: '6+ Years Experience' },
    { label: 'Based in Jakarta, ID' },
    { label: 'Cybersecurity & Network Security' },
    { label: 'Open to Strategic Collaboration' },
  ],
} as const;
```

### 11.4 `src/data/skills.ts`

```typescript
export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'security-pam',
    label: 'Security, PAM & IAM',
    items: ['CyberArk PAM', 'Privileged Access Management', 'Identity & Access Management',
            'Zero Trust', 'PKI', 'SIEM / Log Ingestion', 'Incident Response',
            'Vulnerability Governance', 'Patch Governance', 'ISO 27001 Awareness'],
  },
  {
    id: 'network-infra',
    label: 'Network Security & Infrastructure',
    items: ['Network Security Architecture', 'Firewall / Routing / Switching', 'ESXi',
            'NMS Platforms', 'LibreNMS', 'NEC iPasoLink', 'SNMP', 'gNMI', 'Network Telemetry'],
  },
  {
    id: 'automation',
    label: 'Automation & Data Processing',
    items: ['Python', 'Nornir', 'Netmiko', 'Ansible-style Automation', 'CSV / Excel Processing',
            'API Integration', 'Reporting Automation', 'Tableau', 'Power BI'],
  },
  {
    id: 'software',
    label: 'Software & Systems Engineering',
    items: ['TypeScript', 'Go', 'REST APIs', 'GitHub Actions', 'Docker',
            'Linux / systemd', 'Secure Scripting', 'Logging & Error Handling'],
  },
  {
    id: 'ai-agents',
    label: 'AI Agents & Knowledge Systems',
    items: ['AI-Agent Orchestration', 'Hermes Agent', 'Prompt Engineering',
            'Obsidian / Second-Brain Workflows', 'Finance & Coding Assistant Workflows',
            'Retrieval-style Knowledge Management'],
  },
];
```

### 11.5 `src/data/projects.ts`

```typescript
export type ProjectStatus   = 'production' | 'active-dev' | 'concept-prd';
export type ProjectCategory =
  | 'PAM Tooling' | 'Security Tooling' | 'Network Monitoring'
  | 'AI Infrastructure' | 'AI Agent / Finance' | 'Cybersec Education';

export interface Project {
  id:                    string;
  name:                  string;
  category:              ProjectCategory;
  description:           string;
  architectureHighlights: string[];
  techStack:             string[];
  status:                ProjectStatus;
  featured:              boolean;
  links: {
    github?:  string;
    docs?:    string;
  };
}

export const projects: Project[] = [ /* populate per Section 7.6 */ ];
```

### 11.6 `src/data/experience.ts`

```typescript
export interface ExperienceEntry {
  id:        string;
  role:      string;
  company:   string;
  location:  string;
  startDate: string;           // 'YYYY-MM'
  endDate:   string | 'present';
  highlights: string[];
  techTags:  string[];
}

export const experience: ExperienceEntry[] = [ /* populate per Section 7.7 */ ];
```

### 11.7 `src/data/certifications.ts`

```typescript
export type CertCategory = 'Security' | 'Cloud' | 'Networking' | 'Automation' | 'Data' | 'AI' | 'IoT';

export interface Certification {
  name:     string;
  issuer:   string;
  url?:     string;
  category: CertCategory;
}

export const certifications: Certification[] = [ /* populate per Section 7.8 */ ];
```

### 11.8 `src/data/blog.ts` (generated at build time)

This file is **written by `src/plugins/blog-plugin.ts`** during the Vite build process. It is not hand-edited. It provides the portfolio page's `#latest-writing` section and the blog index with structured post metadata.

```typescript
// src/data/blog.ts  ← auto-generated; do not edit manually
export interface BlogPost {
  slug:        string;
  title:       string;
  date:        string;         // ISO date string
  category:    string;
  tags:        string[];
  excerpt:     string;
  readTimeMin: number;
  coverImage?: string;
  featured:    boolean;
  url:         string;         // '/blog/[slug]/'
}

export const blogPosts: BlogPost[] = [ /* injected by blog-plugin at build time */ ];
```

---

## 12. SEO & Metadata

### 12.1 Portfolio Page (`index.html`)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description"
  content="Muhammad Lutfi Santoso — Cybersecurity and Network Security professional in Jakarta, Indonesia, specializing in CyberArk PAM, network security, infrastructure automation, SIEM, and AI-agent workflows." />
<meta name="keywords"
  content="Muhammad Lutfi Santoso, cybersecurity, network security, CyberArk, PAM, IAM, SIEM, security automation, network automation, Jakarta, Indonesia" />
<meta name="author" content="Muhammad Lutfi Santoso" />
<meta name="robots" content="index, follow" />

<!-- Open Graph -->
<meta property="og:type"        content="website" />
<meta property="og:url"         content="https://lutfisan.github.io" />
<meta property="og:title"       content="Muhammad Lutfi Santoso — Cybersecurity & Network Security" />
<meta property="og:description" content="Cybersecurity and network security professional specializing in PAM, infrastructure automation, operational visibility, and AI-agent workflows." />
<meta property="og:image"       content="https://lutfisan.github.io/assets/og-preview.png" />

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="Muhammad Lutfi Santoso — Cybersecurity & Network Security" />
<meta name="twitter:description" content="Cybersecurity and network security professional specializing in PAM, infrastructure automation, operational visibility, and AI-agent workflows." />
<meta name="twitter:image"       content="https://lutfisan.github.io/assets/og-preview.png" />

<link rel="canonical" href="https://lutfisan.github.io" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<title>Muhammad Lutfi Santoso — Cybersecurity & Network Security</title>
```

### 12.2 Blog Index Page (`/blog/index.html`)

```html
<title>Writing — Muhammad Lutfi Santoso</title>
<meta name="description"
  content="Technical writing on cybersecurity, network security automation, PAM/IAM, AI agents, and infrastructure engineering by Muhammad Lutfi Santoso." />
<link rel="canonical" href="https://lutfisan.github.io/blog/" />
```

### 12.3 Individual Blog Post Pages

Each post page uses its frontmatter to generate unique meta tags at build time:

```html
<title>[post.title] — Muhammad Lutfi Santoso</title>
<meta name="description" content="[post.excerpt]" />
<meta property="og:title"       content="[post.title]" />
<meta property="og:description" content="[post.excerpt]" />
<meta property="og:type"        content="article" />
<meta property="article:published_time" content="[post.date]" />
<link rel="canonical" href="https://lutfisan.github.io/blog/[post.slug]/" />
```

---

## 13. Project File Structure

```
lutfisan.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml                  ← CI/CD: build + deploy to gh-pages
│
├── public/
│   ├── favicon.svg                     ← SVG monogram favicon (MLS)
│   ├── apple-touch-icon.png            ← 180×180 PNG
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/
│       ├── og-preview.png              ← 1200×630 Open Graph image
│       ├── profile.webp                ← Profile photo
│       └── blog/                       ← Optional blog post cover images
│
├── src/
│   ├── main.ts                         ← Portfolio page entry point
│   │
│   ├── styles/
│   │   └── main.css                    ← @import "tailwindcss" + @theme + global styles
│   │
│   ├── data/                           ← All typed content (hand-edited)
│   │   ├── meta.ts
│   │   ├── about.ts
│   │   ├── impact.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   └── blog.ts                     ← AUTO-GENERATED by blog-plugin; do not edit
│   │
│   ├── content/
│   │   └── blog/                       ← Markdown blog posts (hand-authored)
│   │       ├── cyberark-access-audit-automation.md
│   │       ├── building-cybarbot-telegram-cyberark.md
│   │       └── ...
│   │
│   ├── components/                     ← DOM-building TypeScript modules
│   │   ├── nav.ts                      ← Header + mobile menu
│   │   ├── hero.ts
│   │   ├── impact.ts
│   │   ├── about.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   ├── latest-writing.ts           ← 3-post teaser strip (portfolio page)
│   │   ├── contact.ts
│   │   ├── footer.ts
│   │   ├── blog-index.ts               ← Blog index page component
│   │   └── blog-post.ts                ← Individual post page component
│   │
│   ├── plugins/
│   │   └── blog-plugin.ts              ← Vite plugin: MD → HTML build-time generation
│   │
│   └── utils/
│       ├── dom.ts                      ← Typed query helpers: $(), $$()
│       ├── animations.ts               ← IntersectionObserver entrance animations
│       ├── theme.ts                    ← Dark/light toggle + localStorage persistence
│       └── scrollspy.ts                ← Active nav link tracking via IntersectionObserver
│
├── blog/
│   └── index.html                      ← Blog index entry point
│   (Individual post pages generated into dist/blog/[slug]/index.html by blog-plugin)
│
├── index.html                          ← Portfolio page shell
├── vite.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### 13.1 Component Architecture Pattern

Components are plain TypeScript modules that either:
1. **Build DOM programmatically** from data files and inject into `index.html` mount points — for list-based sections (skills, projects, experience, certifications, blog posts)
2. **Enhance existing static HTML** in `index.html` — for SEO-critical content (hero text, headings, metadata)

```typescript
// src/utils/dom.ts
export const $  = <T extends Element>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);

export const $$ = <T extends Element>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));
```

```typescript
// src/main.ts
import './styles/main.css';
import { initTheme }         from '@utils/theme';
import { initNav }           from '@components/nav';
import { initHero }          from '@components/hero';
import { initImpact }        from '@components/impact';
import { initAbout }         from '@components/about';
import { initSkills }        from '@components/skills';
import { initProjects }      from '@components/projects';
import { initExperience }    from '@components/experience';
import { initCertifications} from '@components/certifications';
import { initLatestWriting } from '@components/latest-writing';
import { initContact }       from '@components/contact';
import { initFooter }        from '@components/footer';
import { initAnimations }    from '@utils/animations';
import { initScrollspy }     from '@utils/scrollspy';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initHero();
  initImpact();
  initAbout();
  initSkills();
  initProjects();
  initExperience();
  initCertifications();
  initLatestWriting();
  initContact();
  initFooter();
  initAnimations();
  initScrollspy();
});
```

### 13.2 Blog Plugin Contract

```typescript
// src/plugins/blog-plugin.ts  (sketch)
import type { Plugin } from 'vite';
import { marked } from 'marked';
import matter from 'gray-matter';  // or a minimal frontmatter parser

export function blogPlugin(): Plugin {
  return {
    name: 'vite-plugin-blog',
    // 1. On build start: scan src/content/blog/*.md
    // 2. Parse frontmatter + render markdown → HTML via marked
    // 3. Write src/data/blog.ts (post index)
    // 4. Generate dist/blog/[slug]/index.html for each post
    // 5. Register each post page as a Vite input in rollupOptions
    buildStart() { /* ... */ },
    generateBundle() { /* ... */ },
  };
}
```

---

## 14. Build & Deployment Pipeline

### 14.1 NPM Scripts

```jsonc
// package.json
{
  "scripts": {
    "dev":       "vite",
    "build":     "tsc --noEmit && vite build",
    "preview":   "vite preview",
    "typecheck": "tsc --noEmit"
  }
}
```

### 14.2 Expected Production Bundle Sizes (gzipped)

| Asset | Target |
|---|---|
| `assets/main.[hash].js` | < 15 KB |
| `assets/main.[hash].css` | < 10 KB |
| `assets/blog.[hash].js` | < 8 KB |
| Per-post HTML | < 20 KB |

### 14.3 Local Development

```bash
git clone https://github.com/lutfisan/lutfisan.github.io.git
cd lutfisan.github.io
npm install

npm run dev          # → http://localhost:5173
npm run typecheck    # type-check only, no build
npm run build        # type-check + production build
npm run preview      # serve production build locally → http://localhost:4173
```

### 14.4 Deployment Flow

```
developer: git push origin main
     ↓
GitHub Actions: checkout → npm ci → tsc --noEmit (gate) → vite build
     ↓
peaceiris/actions-gh-pages: push dist/ → gh-pages branch
     ↓
GitHub Pages: serve gh-pages → https://lutfisan.github.io
                              → https://lutfisan.github.io/blog/
```

**Estimated CI time:** ~60–90s (cold), ~30s (npm cache hit)

---

## 15. Out of Scope

| Feature | Status | Notes |
|---|---|---|
| Downloadable CV | ❌ Excluded v1 | Not included per owner decision |
| Blog comments | ❌ Excluded v1 | Requires backend or third-party service |
| Social sharing widgets | ❌ Excluded v1 | Copy-URL only |
| Blog search | ❌ Deferred v1.1 | Add client-side search (Fuse.js) in next iteration |
| Blog RSS feed | ❌ Deferred v1.1 | Generate `feed.xml` in blog-plugin |
| CMS integration | ❌ Excluded | Markdown files + TypeScript data are sufficient |
| Analytics | ❌ Excluded v1 | Privacy-by-default; evaluate Plausible (no cookies) in v1.1 |
| Contact form | ❌ Excluded | `mailto:` link is sufficient for v1 |
| Multilingual (EN/ID) | ❌ Excluded | v1 targets English only |
| Animation library (GSAP) | ❌ Excluded | CSS + Web Animations API sufficient |
| Icon library | ❌ Excluded | Inline SVG only |

---

## 16. Implementation Milestones

| Phase | Deliverable | Definition of Done |
|---|---|---|
| **M0 — Scaffold** | Repo + tooling initialised | `npm run dev` serves blank page; `npm run build` passes; CI deploys to `gh-pages` |
| **M1 — Design System** | `main.css` `@theme` defined; typography + colour + dark mode | Fonts render; light/dark toggle works; no FOUT |
| **M2 — Content Model** | All `src/data/*.ts` files and `src/content/blog/*.md` templates populated | All data type-checks; blog-plugin parses frontmatter successfully |
| **M3 — Core Sections** | Hero, Impact, About, Skills, Projects, Experience, Certifications, Contact all render from data | No placeholder content; all sections functional |
| **M3b — Blog** | Blog index + 2 initial posts published; Latest Writing strip on portfolio page | Posts accessible at `/blog/[slug]/`; OG tags generated per post |
| **M4 — Security Review** | All content reviewed against Section 10 redaction rules | Zero sensitive details published; all metrics properly qualified |
| **M5 — Polish** | Animations, responsive design, accessibility verified | Keyboard nav, reduced motion, mobile nav verified; Lighthouse targets met |
| **M6 — Launch** | Pushed to `main`; live at `lutfisan.github.io` | CI passes; live site loads; OG preview renders correctly on LinkedIn |

---

## 17. Acceptance Criteria

v1.0 is complete when all of the following are true:

- [ ] The hero clearly positions Lutfi as a cybersecurity and network security professional with automation capability
- [ ] The page includes measurable, non-exaggerated impact metrics with qualifiers
- [ ] All content is editable from typed data files without touching layout code
- [ ] No confidential infrastructure, employer-sensitive, or personally identifying third-party data is published
- [ ] The site passes TypeScript strict-mode checks (`tsc --noEmit` exits 0)
- [ ] Production build succeeds (`vite build` exits 0)
- [ ] Lighthouse Performance ≥ 95, Accessibility ≥ 95, Best Practices = 100, SEO = 100
- [ ] GitHub Pages deployment is automated from `main` → `gh-pages`
- [ ] GitHub, LinkedIn, and email links are functional
- [ ] No downloadable CV link in v1
- [ ] Mobile navigation (hamburger) is functional and accessible
- [ ] Keyboard navigation works throughout all interactive elements
- [ ] Dark/light theme toggle works and persists across page loads
- [ ] Blog section: at least 2 posts published and accessible at `/blog/[slug]/`
- [ ] Blog post OG tags are correct per post
- [ ] Latest Writing strip appears on the portfolio page

---

## 18. Confirmed Public Profile Inputs

The following are confirmed as safe to publish:

| Field | Value |
|---|---|
| Public name | Muhammad Lutfi Santoso |
| GitHub handle | `lutfisan` |
| GitHub URL | https://github.com/lutfisan |
| LinkedIn URL | https://www.linkedin.com/in/lutfisan/ |
| Public email | *(pending — to be provided before launch)* |
| Employer | Huawei (may be named directly) |
| Employment range | July 2019 – Present |
| Location | Jakarta, Indonesia |
| Downloadable CV in v1 | No |

**Confirmed certifications:** HCIA IoT, HCIA Security, Microsoft Azure Fundamentals, AWS Cloud Practitioner, Google AI Essentials, Cisco DevNet Associate, CCNA, CCNA Cybersecurity Operations, CCNA Automation, Data Science Foundations.

---

## Appendix A: `index.html` Skeleton

```html
<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Full SEO block: see Section 12.1 -->
  <!-- Google Fonts preconnect + link -->
  <link rel="stylesheet" href="/src/styles/main.css" />
  <title>Muhammad Lutfi Santoso — Cybersecurity &amp; Network Security</title>
</head>
<body class="bg-[--color-background] text-[--color-text] font-body antialiased">

  <!-- Skip to content (accessibility) -->
  <a href="#main-content"
     class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
            focus:px-4 focus:py-2 focus:bg-[--color-accent] focus:text-black focus:rounded-md">
    Skip to main content
  </a>

  <header id="site-header" role="banner"></header>

  <main id="main-content">
    <section id="hero"            aria-labelledby="hero-heading"></section>
    <section id="impact"          aria-labelledby="impact-heading"></section>
    <section id="about"           aria-labelledby="about-heading"></section>
    <section id="skills"          aria-labelledby="skills-heading"></section>
    <section id="projects"        aria-labelledby="projects-heading">
      <div id="projects-grid"></div>
    </section>
    <section id="experience"      aria-labelledby="experience-heading">
      <div id="experience-timeline"></div>
    </section>
    <section id="certifications"  aria-labelledby="certifications-heading">
      <div id="certifications-grid"></div>
    </section>
    <section id="latest-writing"  aria-labelledby="latest-writing-heading">
      <div id="writing-strip"></div>
    </section>
    <section id="contact"         aria-labelledby="contact-heading"></section>
  </main>

  <footer id="site-footer" role="contentinfo"></footer>

  <script type="module" src="/src/main.ts"></script>
</body>
</html>
```

---

## Appendix B: Tailwind CSS v4 vs v3 Key Differences

| Aspect | v3 | v4 (this project) |
|---|---|---|
| Config file | `tailwind.config.js` | No config file — use `@theme {}` in CSS |
| Directives | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| Vite plugin | `vite-plugin-tailwindcss` (community) | `@tailwindcss/vite` (official) |
| Custom tokens | `theme.extend` in JS config | CSS custom properties in `@theme {}` |
| Custom variants | `variants` in JS config | `@variant` directive in CSS |
| Custom utilities | `plugin()` API | `@utility` directive in CSS |
| Light/dark mode | `darkMode: 'class'` config | `@variant dark` / `@variant light` in CSS |
| CSS purging | Configured in `content` array | Automatic — scans source files |
| CSS variables | Manual with `var()` | First-class via `@theme` design tokens |

---

*End of Document — PRD v1.3.0 · Muhammad Lutfi Santoso · 2026-06-06*
