import React, { useState } from 'react';

function Header() {
  const [searchVal, setSearchVal] = useState('');

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="header-logo" aria-label="GitHub Home" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => {}}>
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38
              0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95
              0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27
              -.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12
              -.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07
              -.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82
              1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49
              0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
        </button>

        <div className="header-search">
          <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04
              3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5
              7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
          </svg>
          <input
            type="text"
            placeholder="Search or jump to..."
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            aria-label="Search GitHub"
          />
        </div>

        <nav className="header-nav">
          <button className="header-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }} onClick={() => {}}>Pull requests</button>
          <button className="header-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }} onClick={() => {}}>Issues</button>
          <button className="header-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }} onClick={() => {}}>Marketplace</button>
          <button className="header-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }} onClick={() => {}}>Explore</button>
        </nav>

        <div className="header-avatar">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
