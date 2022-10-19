import React from 'react';
import useLocalStorage from 'use-local-storage';
import { Layout } from 'antd';
import GlobalStyle from './styles/global';
import Navbar from './components/organisms/Navbar';
import { Route, Routes } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import HomePage from './components/pages/homepage';
import ProjectsPage from './components/pages/projectspage';
import FaqPage from './components/pages/faqpage';
import DiscordPage from './components/pages/discordpage';
import Footer from './components/organisms/Footer';
import CurrentTrending from './components/pages/currentTrendingProject';
import ScrollToTop from './utils/ScrollToTop';
import PendingPage from './components/pages/pendingPage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Layout className="App" data-theme={theme}>
      <GlobalStyle />
      <ThemeContext.Provider value={theme}>
        <Navbar switchTheme={switchTheme} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectName" element={<CurrentTrending />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/discord" element={<DiscordPage />} />
          {window.location.host.split('.')[0] === 'docs' ? (
            <Route path={'/resources'} element={<h1>DOCS</h1>} />
          ) : null}
          {window.location.host.split('.')[0] === 'blog' ? (
            <Route path={'/resources'} element={<h1>BLOGS</h1>} />
          ) : null}
          <Route path="/pending" element={<PendingPage />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </Layout>
  );
}

export default App;
