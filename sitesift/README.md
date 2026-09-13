# SiteSift

Find reputable local businesses that show up on Google **without a website**, then design a presentable site for them in one click.

## Quick start

```bash
cd sitesift
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

1. **Sift** — Search by business type and location. Results are filtered to high ratings, enough reviews, and **no website**.
2. **Design** — Click **Design website** on any lead. SiteSift builds a category-aware landing page from their name, reviews, phone, and address.
3. **Present** — The draft opens in a new tab with a pitch bar (back / call owner) so you can show it to the business.

## Demo vs live Google data

Without an API key, SiteSift uses curated demo leads (bakeries, plumbers, salons, etc.).

To search live Google Places results, set:

```bash
GOOGLE_PLACES_API_KEY=your_key_here
```

Enable the **Places API (New)** on your Google Cloud project. SiteSift calls `places:searchText` and keeps listings that have no `websiteUri`.

## Stack

- Next.js App Router
- TypeScript + Tailwind CSS
- In-memory draft store for generated sites (process lifetime)
