# Devbox Developer Portal – Mini Dashboard

A lightweight React + Vite web app that lets users log in, view profile info, and see recent API usage statistics.

## Features

- Mock login screen
- Dashboard with:
  - Greeting & quick-stats cards
  - User profile section
  - Table of recent API calls (mock data)
- Responsive layout – works well on mobile (≤600 px) and desktop
- Clean component structure with React 18 hooks

## Prerequisites

- [Node.js](https://nodejs.org/) ≥ 16 (includes `npm`)

_Check your versions:_

```bash
node -v    # should print v16.x or newer
npm -v     # npm 8.x or newer
```

## Getting Started

1. **Clone / download the repo** (skip if you already have the folder).

   ```bash
   git clone <repo-url>
   cd devbox-developer-portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Vite will print a local URL such as `http://localhost:5173`. Open it in your browser – the page reloads automatically on file changes.

4. **Build for production**
   ```bash
   npm run build
   ```
   Bundled files are output to `dist/`. You can preview them with:
   ```bash
   npm run preview
   ```

## Project Structure

```
├─ public/           # static assets (optional)
├─ src/
│  ├─ components/    # React components (Login, Dashboard, etc.)
│  ├─ mockData.js    # hard-coded user & API usage data
│  ├─ index.css      # global styles
│  ├─ App.jsx        # root component
│  └─ main.jsx       # ReactDOM bootstrap
├─ .gitignore
├─ index.html        # entry html
├─ package.json      # dependencies & scripts
├─ vite.config.js    # Vite config
└─ README.md         # (you are here)
```

## Customising

- **Change mock data** – edit `src/mockData.js`.
- **Adjust styles** – modify `src/index.css`. Media-query at bottom handles mobile tweaks.
- **Add new components** – place them in `src/components/` and import into `App.jsx` or where needed.
