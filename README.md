# GitHub Profile Viewer

A React application that replicates GitHub's profile page design with real-time data fetching.

## Features

- ✅ Built with React JS
- ✅ Styled with plain CSS
- ✅ React Router for navigation
- ✅ Contribution heatmap graph
- ✅ GitHub REST API integration
- ✅ Mock data fallback support
- ✅ Fully responsive design
- ✅ GitHub-style UI with hover effects
- ✅ Interactive tabs (Overview, Repositories, Projects, Packages, Stars)
- ✅ Repository search and filter

## Project Structure

```
src/
  components/
    Header.js
    Sidebar.js
    MainContent.js
    ContributionGraph.js
    PinnedRepos.js
    RepoTabContent.js
  styles/
    global.css
  App.js
  index.js
```

## Routes

- `/` - Full GitHub-like profile page
- `/repositories` - Repositories tab with search and filter
- `/projects` - Projects placeholder page
- `/packages` - Packages placeholder page

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

## Build

```bash
npm run build
```

## APIs Used

- GitHub User API: `https://api.github.com/users/{username}`
- Contributions: Generated mock data (GitHub contribution API requires authentication)