# ajuneur

A warm, editorial personal website for posts, life notes, and
photographs. The sample version is written for Qi Hao Liang and is ready to
adapt with real stories and images.

## Personalise it

- Edit the words, dates, posts, notes, and email address in
  `app/page.tsx`.
- Adjust the colours and layout in `app/globals.css`.
- Replace the sample files in `public/photos/` with personal photographs.
  Keep the same filenames, or update the matching paths in `app/page.tsx`.
- Replace `public/og.png` if you want a different link-preview image.
- Remove the sample photo-credit note after replacing all sample photographs.

## Run it locally

Use Node.js 24 or newer:

```bash
npm install
npm run dev
```

The local site opens at [http://localhost:3000](http://localhost:3000).

## Publish with GitHub Pages

This project includes an automatic GitHub Pages workflow.

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Open the **Actions** tab to follow the first deployment.

Every later push to `main` rebuilds and republishes the site. The workflow
detects the repository name, so it works for both
`username.github.io` repositories and regular project repositories.
The published package also includes `robots.txt` and a sitemap covering every
post and photo story.

## Useful commands

- `npm run dev` — start the local editing preview.
- `npm run build` — verify the hosted Sites build.
- `npm run build:pages` — create the static `github-pages/` package.
- `npm test` — build and run the content and accessibility checks.

See GitHub's
[custom Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
for repository permissions, private-repository availability, and advanced
publishing options.

## update post changes

```bash
npm test
git add .
git commit -m "Update song link"
git push github main
```