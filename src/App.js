import React, { useState, useEffect } from 'react';
import './styles/global.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Header from './components/Header';

function getMockUser() {
  return {
    login: 'shreeramk',
    name: 'Shreeram K',
    avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    bio: 'Full-Stack Developer | Open Source Enthusiast | Building cool stuff',
    company: '@UptimeAI',
    location: 'Bangalore, India',
    blog: 'https://shreeramk.dev',
    email: 'shreeramk@example.com',
    followers: 248,
    following: 132,
    public_repos: 47,
    html_url: 'https://github.com/shreeramk',
    twitter_username: 'shreeramk',
  };
}

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const USERNAME = 'shreeramk';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${USERNAME}`);
        if (!res.ok) throw new Error('GitHub API limit reached');
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.warn('Using mock data:', err.message);
        setUserData(getMockUser());
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-container">
        {loading ? (
          <div className="loading-screen">
            <div className="loader"></div>
            <span>Loading profile...</span>
          </div>
        ) : (
          <div className="profile-layout">
            <Sidebar user={userData} />
            <MainContent user={userData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
