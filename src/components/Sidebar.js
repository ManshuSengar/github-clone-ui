import React, { useState } from 'react';

const MOCK_ORGS = [
  { name: 'UptimeAI', avatar: 'https://avatars.githubusercontent.com/u/9919?s=40' },
  { name: 'Vercel', avatar: 'https://avatars.githubusercontent.com/u/14985020?s=40' },
  { name: 'Facebook', avatar: 'https://avatars.githubusercontent.com/u/69631?s=40' },
];

const HIGHLIGHTS = [
  { emoji: '🏆', title: 'Arctic Code Vault Contributor', desc: 'Contributed code to the 2020 GitHub Archive Program' },
  { emoji: '⭐', title: 'Pull Shark', desc: 'Opened a pull request that has been merged' },
  { emoji: '🦈', title: 'YOLO', desc: 'Merged a pull request without a review' },
];

function Sidebar({ user }) {
  const [following, setFollowing] = useState(false);

  if (!user) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar-avatar-wrap">
        <div className="sidebar-avatar">
          <img
            src={user.avatar_url || `https://avatars.githubusercontent.com/u/583231?v=4`}
            alt={`${user.login}'s avatar`}
          />
        </div>
        <div className="sidebar-status-dot" title="Set status">😊</div>
      </div>

      <div className="sidebar-name">{user.name || user.login}</div>
      <div className="sidebar-username">{user.login}</div>

      {/* Bio */}
      {user.bio && <div className="sidebar-bio">{user.bio}</div>}

      <button
        className="sidebar-follow-btn"
        onClick={() => setFollowing(f => !f)}
      >
        {following ? 'Unfollow' : 'Follow'}
      </button>

      <div className="sidebar-followers">
        <svg height="16" viewBox="0 0 16 16" width="16">
          <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75
            0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0
            0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22
            5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.83.75.75 0 0
            1-.54-.603 3.51 3.51 0 0 0-1.938-2.611.75.75 0 0 1-.274-1.025A2 2 0
            1 0 9.99 9a.75.75 0 0 1-.89.75.75.75 0 0 1-.64-.748A2 2 0 0 1 11
            4ZM5.5 7A2 2 0 1 0 5.5 3a2 2 0 0 0 0 4Z" />
        </svg>
        <button style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }} onClick={() => {}}>{(user.followers || 0).toLocaleString()} followers</button>
        <span>·</span>
        <button style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }} onClick={() => {}}>{(user.following || 0).toLocaleString()} following</button>
      </div>

      <ul className="sidebar-meta">
        {user.company && (
          <li>
            <OrgIcon />
            <span>{user.company}</span>
          </li>
        )}
        {user.location && (
          <li>
            <LocationIcon />
            <span>{user.location}</span>
          </li>
        )}
        {user.email && (
          <li>
            <MailIcon />
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>
        )}
        {user.blog && (
          <li>
            <LinkIcon />
            <a href={user.blog} target="_blank" rel="noreferrer">
              {user.blog.replace(/^https?:\/\//, '')}
            </a>
          </li>
        )}
        {user.twitter_username && (
          <li>
            <TwitterIcon />
            <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
              @{user.twitter_username}
            </a>
          </li>
        )}
      </ul>

      <div className="sidebar-section-title">
        Highlights
      </div>
      <ul className="highlights-list">
        {HIGHLIGHTS.map((h, i) => (
          <li key={i} className="highlight-item">
            <div className="highlight-badge">{h.emoji}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 12, color: 'var(--text-primary)' }}>{h.title}</div>
              <div>{h.desc}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="sidebar-section-title">
        Organizations
      </div>
      <div className="orgs-list">
        {MOCK_ORGS.map((org, i) => (
          <div className="org-avatar" key={i} title={org.name}>
            <img src={org.avatar} alt={org.name} />
          </div>
        ))}
      </div>
    </aside>
  );
}

/* --- Icon Components --- */
function OrgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0
        0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0
        0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm14.5 1.25h-4V4.25a.25.25 0 0
        0-.25-.25h-2.5v-2H13a1.5 1.5 0 0 1 1.5 1.5v10.75h1.5a.75.75 0 0
        1 0 1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75
        0 0 1 3 3.75ZM3 6.75A.75.75 0 0 1 3.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75
        0 0 1 3 6.75ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75
        0 0 1 3 9.75ZM7.25 3a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM7 6.75A.75.75
        0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.25
        9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1
        9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8
        14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1
        14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5
        12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38
        9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0
        0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0
        0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 2 2 0 0 0
        2.83 0l2.5-2.5a2 2 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751
        0 0 1-.018-1.042Zm-4.69 9.64a2 2 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751
        0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0
        .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 2 2 0 0 0-2.83 0l-2.5 2.5a2 2 0 0 0 0 2.83Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685
        6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817
        6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0
        1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288
        3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057
        3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344
        9.344 0 0 0 5.026 15z" />
    </svg>
  );
}

export default Sidebar;
