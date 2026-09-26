# My Travel Stories

A premium, cinematic personal travel diary — built with React, Vite and Tailwind CSS. No backend, no login, no database. Just your real photos, videos and stories.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 2. Write your real story (important)

Open **`src/data/journeys.js`**. Each destination has a `story` field that is currently a **placeholder** — it deliberately does not contain any invented personal experience. Replace it with your own words:

```js
story: "Write your real story here — what this journey to Kedarnath meant to you, what you saw, how it felt.",
```

The same file has `tagline`, `date`, and `location` for each destination — edit those too.

## 3. Add your own photos

Drop your photos into the matching folder, keeping the same file names, or add new ones and list them in `journeys.js`:

```text
public/images/
  hero.jpg               ← homepage hero photo
  og-image.jpg           ← preview image shown when shared on Instagram
  about.jpg              ← your photo for the About Me section

  kedarnath/   cover.jpg  01.jpg … 06.jpg
  badrinath/   cover.jpg  01.jpg … 06.jpg
  vasudhara/   cover.jpg  01.jpg … 06.jpg
```

## 4. Add your own videos

```text
public/videos/
  kedarnath/01.mp4
  badrinath/01.mp4
  vasudhara/01.mp4
```

Each destination in `journeys.js` has a `videos` array — add an entry per video with its file path, a thumbnail image, a title and a short description. The placeholder clips currently in these folders are just labelled color cards — replace them with your real `.mp4` files (same file name, or update the path in `journeys.js`).

## 5. Edit your About Me section and social links

Open **`src/data/site.js`**:

- `about` — your name, photo, intro, and the two short paragraphs on why you travel
- `social` — your Instagram, YouTube and email
- `hero` — the homepage intro text and button label

## 6. Deploy it and get your shareable link

Push this folder to a GitHub repository, then connect it to any of these:

**Netlify**
1. [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
2. Connect your repo · Build command: `npm run build` · Publish directory: `dist`
3. Deploy — put the resulting link in your Instagram bio

**Vercel** — [vercel.com](https://vercel.com) → "New Project" → import your repo → it auto-detects Vite → Deploy

**GitHub Pages** — build with `npm run build` and deploy the `dist` folder (asset paths are already relative, via `base: "./"` in `vite.config.js`, so this works without extra configuration)

## Tech stack

React 18 · Vite · Tailwind CSS · Framer Motion — a static site, no backend or database.
