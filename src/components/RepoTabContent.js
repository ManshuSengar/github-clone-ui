import React, { useState, useMemo } from 'react';

const MOCK_REPOS = [
  {
    id: 1,
    name: 'uptime-monitor',
    description: 'Real-time uptime monitoring dashboard with alerting and analytics. Built with Next.js 14, Node.js, and PostgreSQL.',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 428,
    forks: 63,
    updated: '3 days ago',
    isPrivate: false,
    topics: ['nextjs', 'typescript', 'monitoring', 'devops'],
  },
  {
    id: 2,
    name: 'api-gateway-service',
    description: 'Scalable API gateway microservice with rate limiting, authentication, and request transformation capabilities.',
    language: 'Go',
    langColor: '#00ADD8',
    stars: 217,
    forks: 34,
    updated: '1 week ago',
    isPrivate: false,
    topics: ['golang', 'microservices', 'api-gateway'],
  },
  {
    id: 3,
    name: 'react-dashboard-components',
    description: 'A collection of reusable React dashboard components with dark theme support and accessibility features.',
    language: 'JavaScript',
    langColor: '#f1e05a',
    stars: 184,
    forks: 21,
    updated: '2 weeks ago',
    isPrivate: false,
    topics: ['react', 'components', 'dashboard', 'ui'],
  },
  {
    id: 4,
    name: 'distributed-cache',
    description: 'Lightweight distributed caching library with Redis support, automatic expiry, and pub/sub messaging.',
    language: 'Python',
    langColor: '#3572A5',
    stars: 96,
    forks: 12,
    updated: '1 month ago',
    isPrivate: false,
    topics: ['redis', 'caching', 'python'],
  },
  {
    id: 5,
    name: 'cli-toolkit',
    description: 'Command-line toolkit for DevOps automation and deployment workflows with CI/CD integration.',
    language: 'Shell',
    langColor: '#89e051',
    stars: 72,
    forks: 9,
    updated: '2 months ago',
    isPrivate: false,
    topics: ['cli', 'devops', 'automation'],
  },
  {
    id: 6,
    name: 'design-system',
    description: 'Enterprise design system with component library, design tokens, and Figma integration.',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 311,
    forks: 44,
    updated: '5 days ago',
    isPrivate: false,
    topics: ['design-system', 'figma', 'typescript', 'ui'],
  },
  {
    id: 7,
    name: 'private-config',
    description: 'Personal configuration and dotfiles repository.',
    language: null,
    langColor: null,
    stars: 0,
    forks: 0,
    updated: '3 months ago',
    isPrivate: true,
    topics: ['config', 'dotfiles'],
  },
  {
    id: 8,
    name: 'learning-rust',
    description: 'Notes and exercises while learning Rust programming language.',
    language: 'Rust',
    langColor: '#dea584',
    stars: 14,
    forks: 2,
    updated: '4 months ago',
    isPrivate: false,
    topics: ['rust', 'learning'],
  },
];

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

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="var(--text-muted)">
      <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75
        0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6
        3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25
        0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z" />
    </svg>
  );
}

function RepoTabContent({ user }) {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [langFilter, setLangFilter] = useState('all');
  const [sortBy, setSortBy] = useState('updated');

  const filtered = useMemo(() => {
    return MOCK_REPOS.filter(r => {
      const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
        (r.description && r.description.toLowerCase().includes(search.toLowerCase()));
      const matchType = typeFilter === 'all' || (typeFilter === 'public' && !r.isPrivate) ||
        (typeFilter === 'private' && r.isPrivate);
      const matchLang = langFilter === 'all' || r.language === langFilter;
      return matchSearch && matchType && matchLang;
    });
  }, [search, typeFilter, langFilter]);

  const languages = [...new Set(MOCK_REPOS.map(r => r.language).filter(Boolean))];

  return (
    <div>
      <div className="repo-search-bar">
        <input
          className="repo-search-input"
          type="text"
          placeholder="Find a repository..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="repo-filter-btn" onClick={() => {
          const types = ['all', 'public', 'private'];
          const idx = types.indexOf(typeFilter);
          setTypeFilter(types[(idx + 1) % types.length]);
        }}>
          Type ▾ {typeFilter !== 'all' && `(${typeFilter})`}
        </button>
        <button className="repo-filter-btn" onClick={() => {
          const langs = ['all', ...languages];
          const idx = langs.indexOf(langFilter);
          setLangFilter(langs[(idx + 1) % langs.length]);
        }}>
          Language ▾ {langFilter !== 'all' && `(${langFilter})`}
        </button>
        <button className="repo-filter-btn" onClick={() => {
          setSortBy(s => s === 'updated' ? 'stars' : 'updated');
        }}>
          Sort: {sortBy} ▾
        </button>
        <button className="repo-new-btn">
          New
        </button>
      </div>

      <ul className="repo-list">
        {filtered.length === 0 ? (
          <li style={{ padding: '48px 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No repositories match your search.
          </li>
        ) : (
          filtered.map(repo => (
            <li key={repo.id} className="repo-item">
              <div className="repo-item-header">
                <button className="repo-item-name" style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }} onClick={() => {}}>{repo.name}</button>
                <span className={repo.isPrivate ? 'repo-fork-badge' : 'repo-visibility-badge'}>
                  {repo.isPrivate ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <LockIcon /> Private
                    </span>
                  ) : 'Public'}
                </span>
                <button className="repo-star-btn">
                  <StarIcon />
                  Star
                </button>
              </div>

              {repo.description && (
                <p className="repo-item-desc">{repo.description}</p>
              )}

              {repo.topics.length > 0 && (
                <div className="repo-item-topics">
                  {repo.topics.map(t => (
                    <button key={t} className="repo-topic-tag" style={{ background: 'none', border: '1px solid var(--border-color)', cursor: 'pointer', padding: '4px 8px', borderRadius: '12px', font: 'inherit', color: 'inherit' }} onClick={() => {}}>{t}</button>
                  ))}
                </div>
              )}

              <div className="repo-item-meta">
                {repo.language && (
                  <span className="repo-meta-item">
                    <span
                      className="lang-dot"
                      style={{ backgroundColor: repo.langColor, width: 12, height: 12, borderRadius: '50%', display: 'inline-block' }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stars > 0 && (
                  <span className="repo-meta-item">
                    <StarIcon />
                    {repo.stars.toLocaleString()}
                  </span>
                )}
                {repo.forks > 0 && (
                  <span className="repo-meta-item">
                    <ForkIcon />
                    {repo.forks}
                  </span>
                )}
                <span className="repo-meta-item">
                  Updated {repo.updated}
                </span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default RepoTabContent;
