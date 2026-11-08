# autumnfjeld.com

My resume website.

Template theme from https://themeforest.net/user/dotrex [Vertica](http://preview.themeforest.net/item/vertica-retina-ready-resume-cv-portfolio/full_screen_preview/8536870)

Hosted on Cloudflare Pages via a GitHub-connected deployment.

## Local development

Build:
`npm run build:all`

Watch:
`npm run watch:all`

## Deployment

This site is deployed through Cloudflare Pages by connecting the GitHub repository and using the generated static output from the `public/` directory.

Recommended Cloudflare Pages settings:

- Build command: `npm install && npm run build:all`
- Output directory: `public`

## How to update

* Make repo changes
* Commit and push to GitHub
* Cloudflare Pages automatically rebuilds and deploys the site from the connected repository
* Confirm the site is live on the configured custom domain

## Notes

This project is a static site generated from the source files in `src/` and output to `public/` during the build step.
