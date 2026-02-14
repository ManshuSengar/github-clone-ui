import React from 'react';

const MOCK_PINNED = [
  {
    id: 1,
    name: 'uptime-monitor',
    description: 'Real-time uptime monitoring dashboard with alerting and analytics built with Next.js and Node.js',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 428,
    forks: 63,
    isPrivate: false,
  },
  {
    id: 2,
    name: 'api-gateway-service',
    description: 'Scalable API gateway microservice with rate limiting, authentication, and request transformation',
    language: 'Go',
    langColor: '#00ADD8',
    stars: 217,
    forks: 34,
    isPrivate: false,
  },
  {
    id: 3,
    name: 'react-dashboard-components',
    description: 'A collection of reusable React dashboard components with dark theme support',
    language: 'JavaScript',
    langColor: '#f1e05a',
    stars: 184,
    forks: 21,
    isPrivate: false,
  },
  {
    id: 4,
    name: 'distributed-cache',
    description: 'Lightweight distributed caching library with Redis support and automatic expiry',
    language: 'Python',
    langColor: '#3572A5',
    stars: 96,
    forks: 12,
    isPrivate: false,
  },
  {
    id: 5,
    name: 'cli-toolkit',
    description: 'Command-line toolkit for DevOps automation and deployment workflows',
    language: 'Shell',
    langColor: '#89e051',
    stars: 72,
    forks: 9,
    isPrivate: false,
  },
  {
    id: 6,
    name: 'design-system',
    description: 'Enterprise design system with component library, tokens, and Figma integration',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 311,
    forks: 44,
    isPrivate: false,
  },
];

function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--text-muted)">
      <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3
        1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75
        0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0
        1-1.062 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0
        1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003
        2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752
        3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1
        .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8
        12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75
        0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0
        .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25
        2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1
        3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5
        0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0
        1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
    </svg>
  );
}

function PinnedRepos() {
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="section-header">
        <span className="section-title">Pinned</span>
        <button className="section-link" style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }} onClick={() => {}}>Customize your pins</button>
      </div>
      <div className="pinned-grid">
        {MOCK_PINNED.map(repo => (
          <div key={repo.id} className="pinned-card">
            <div className="pinned-card-header">
              <span className="pinned-card-icon">
                <BookIcon />
              </span>
              <button className="pinned-card-name" style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }} onClick={() => {}}>{repo.name}</button>
              <span className="repo-visibility-badge">Public</span>
            </div>
            <p className="pinned-card-desc">{repo.description}</p>
            <div className="pinned-card-footer">
              {repo.language && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span
                    className="lang-dot"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  {repo.language}
                </span>
              )}
              {repo.stars > 0 && (
                <span className="pinned-card-stat">
                  <StarIcon />
                  {repo.stars}
                </span>
              )}
              {repo.forks > 0 && (
                <span className="pinned-card-stat">
                  <ForkIcon />
                  {repo.forks}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PinnedRepos;
