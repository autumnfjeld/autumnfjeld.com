# Decisions

## Decision: Move static site hosting from AWS to Cloudflare Pages

Status: Accepted
Date: 2026-11-08

### Context

This project is a static portfolio/resume site built from source templates and generated static assets. The repository currently uses a build flow based on Node.js, LESS, Pug, and a generated `public/` output folder. The site does not require a server-side runtime or custom backend during normal operation.

The current hosting arrangement on AWS is functional but more operationally heavy than necessary for a static site. The deployment and maintenance overhead includes managing AWS services and infrastructure that are not needed for this kind of content-only site.

### Decision

We will move the site from AWS to Cloudflare Pages for hosting.

Cloudflare Pages is a better fit because:

- The site is static and generated at build time.
- It reduces hosting complexity and operational overhead.
- It supports Git-based deployment and automatic builds.
- It provides a simpler developer experience for a portfolio site.
- It aligns with a leaner hosting model for a content-heavy, low-dynamic site.

### Architecture and deployment model

The repo will continue to use the existing static build process:

- Source files live under `src/`
- Build output is generated into `public/`
- Cloudflare Pages will deploy the built static output from `public/`

Recommended deployment settings:

- Build command: `npm install && npm run build:all`
- Output directory: `public`

### DNS migration record

Date: 2026-11-08

The domain `autumnfjeld.com` was moved from its previous AWS-associated hosting/DNS setup to Cloudflare by updating the domain nameservers at GoDaddy to Cloudflare's nameservers:

- `pranay.ns.cloudflare.com`
- `vivienne.ns.cloudflare.com`

This change routes the domain's DNS through Cloudflare instead of the previous AWS configuration. The project is now intended to be served from Cloudflare Pages with Cloudflare as the DNS and edge provider.

### Consequences

Positive:

- Lower hosting complexity
- Less infrastructure maintenance
- Simpler and cheaper hosting footprint
- Easier deployment flow for future content updates

Trade-offs:

- Cloudflare Pages is best for static sites; this project is a static site, so this is a good match
- We lose the current AWS-specific operational familiarity if the team ever needs AWS again later
- We should keep the generated output process documented so deployment remains reproducible

### Alternatives considered

1. Stay on AWS
   - Pros: familiar infrastructure and existing setup
   - Cons: unnecessary complexity for a static site

2. Use Cloudflare Workers
   - Pros: flexible runtime model
   - Cons: overkill for a static site; not needed for this project

3. Use another static host such as Netlify or Vercel
   - Pros: very simple hosting
   - Cons: Cloudflare is a strong fit for this project and may be preferred for DNS/CDN integration

### Notes on AI / agent workflow

At this stage, the repo does not yet contain dedicated agent instructions or automation files. For now, a root-level decision log is the right place to record major project decisions.

If we later want to formalize AI-assisted workflow conventions, the likely next step would be one of:

- `AGENTS.md` for repo-wide agent instructions
- `.github/copilot-instructions.md` for GitHub Copilot-specific guidance

For the moment, keep this as a human-readable repo decision log and add agent instructions only when the workflow becomes more formal.

### Related files

- `package.json`
- `src/`
- `public/`
