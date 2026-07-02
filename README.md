# hypedmike.github.io

Personal portfolio site, built with [Next.js](https://nextjs.org) (App Router) and statically exported to GitHub Pages.

## Developing

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

To create a static production build (output to `./out`):

```bash
npm run build
```

You can preview the production build with:

```bash
npx serve out
```

Pushes to `main` are automatically built and deployed to GitHub Pages via the workflow in `.github/workflows/node.js.yml`.
