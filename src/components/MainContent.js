import React, { useState } from 'react';
import PinnedRepos from './PinnedRepos';
import ContributionGraph from './ContributionGraph';
import RepoTabContent from './RepoTabContent';

const MOCK_RECENT_ACTIVITY = [
  {
    id: 1,
    type: 'PushEvent',
    repo: 'shreeramk/uptime-monitor',
    desc: 'pushed 3 commits to',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'PullRequestEvent',
    repo: 'shreeramk/api-gateway-service',
    desc: 'opened a pull request in',
    time: '1 day ago',
  },
  {
    id: 3,
    type: 'IssueCommentEvent',
    repo: 'facebook/react',
    desc: 'commented on an issue in',
    time: '2 days ago',
  },
  {
    id: 4,
    type: 'WatchEvent',
    repo: 'vercel/next.js',
    desc: 'starred',
    time: '3 days ago',
  },
  {
    id: 5,
    type: 'CreateEvent',
    repo: 'shreeramk/distributed-cache',
    desc: 'created repository',
    time: '1 week ago',
  },
];

function TabEmptyState({ icon, title, desc }) {
  return (
    <div className="tab-empty">
      <div style={{ fontSize: 48, marginBottom: 12 }}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function OverviewTab({ user }) {
  return (
    <div>
      <PinnedRepos />
      <ContributionGraph username={user?.login} />
      <div className="activity-section">
        <div className="section-header">
          <span className="section-title">Contribution activity</span>
        </div>
        <ul className="activity-list">
          {MOCK_RECENT_ACTIVITY.map(event => (
            <li key={event.id} className="activity-item">
              <div className="activity-avatar">
                <img
                  src={user?.avatar_url || 'https://avatars.githubusercontent.com/u/583231?v=4'}
                  alt="avatar"
                />
              </div>
              <div className="activity-body">
                <span>
                  <button style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }} onClick={() => {}}>{user?.login || 'shreeramk'}</button>{' '}
                  {event.desc}{' '}
                  <button style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }} onClick={() => {}}>{event.repo}</button>
                </span>
              </div>
              <span className="activity-time">{event.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const TABS = [
  {
    id: 'overview',
    label: 'Overview',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04
          3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5
          7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
      </svg>
    ),
    count: null,
  },
  {
    id: 'repositories',
    label: 'Repositories',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0
          1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072
          1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1
          4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0
          1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
      </svg>
    ),
    count: 47,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25
          16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5
          1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25
          0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75
          0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75
          0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z" />
      </svg>
    ),
    count: 3,
  },
  {
    id: 'packages',
    label: 'Packages',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872
          1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1
          11.049V4.951c0-.624.332-1.2.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756
          0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0
          0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25
          8.271 4.625-2.683a.248.248 0 0 0 .125-.216V5.677L8.75 8.432Z" />
      </svg>
    ),
    count: 0,
  },
  {
    id: 'stars',
    label: 'Stars',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1
          .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8
          12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75
          0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
      </svg>
    ),
    count: 128,
  },
];

function MainContent({ user }) {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab user={user} />;
      case 'repositories':
        return <RepoTabContent user={user} />;
      case 'projects':
        return (
          <TabEmptyState
            icon="📋"
            title="No projects yet"
            desc="Create a project board to organize issues, pull requests, and notes."
          />
        );
      case 'packages':
        return (
          <TabEmptyState
            icon="📦"
            title="No packages published"
            desc="Publish your first package to GitHub Packages."
          />
        );
      case 'stars':
        return (
          <TabEmptyState
            icon="⭐"
            title="128 stars"
            desc="Stars are a way to keep track of repositories you find interesting."
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="main-content">
      <nav className="profile-tabs" role="tablist">
        {TABS.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
            {tab.count !== null && tab.count > 0 && (
              <span className="tab-count">{tab.count}</span>
            )}
          </button>
        ))}
      </nav>

      <div role="tabpanel">
        {renderTabContent()}
      </div>
    </main>
  );
}

export default MainContent;
