# GitHub Profile Page – UptimeAI Assignment

A pixel-perfect GitHub profile page clone built with **React JS** and plain **CSS** — fully responsive, with real GitHub API integration.

---

## Features

- ✅ Real GitHub API — fetches user profile from `api.github.com/users/shreeramk`
- ✅ Contribution Heatmap — interactive 52-week graph with tooltips
- ✅ Pinned Repositories — 6-card grid layout
- ✅ Working Tabs — Overview, Repositories, Projects, Packages, Stars
- ✅ Repository Search & Filter — by name, type, language
- ✅ Activity Feed — recent contribution timeline
- ✅ Fully Responsive — mobile, tablet, desktop
- ✅ Plain CSS — zero CSS framework

---

## Project Structure

```
src/
├── App.js                   # Root component, fetches user data
├── styles/
│   └── global.css           # All styles
└── components/
    ├── Header.js            # Top nav bar
    ├── Sidebar.js           # Left panel (avatar, bio, orgs)
    ├── MainContent.js       # Tabs + routing
    ├── PinnedRepos.js       # Pinned repos grid
    ├── ContributionGraph.js # 52-week heatmap
    └── RepoTabContent.js    # Repos tab with search/filter
```

---

## Local Development

```bash
npm install
npm start
```

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```
Follow the prompts. Vercel auto-detects Create React App settings.

### Option 2 — GitHub + Vercel Dashboard

1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Settings (auto-detected):
   - Framework: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Click Deploy

### Option 3 — Direct Build Deploy

```bash
npm run build
vercel --prod ./build
```

---

## GitHub Token (optional, for higher rate limits)

Create `.env.local`:
```
REACT_APP_GITHUB_TOKEN=your_token_here
```
