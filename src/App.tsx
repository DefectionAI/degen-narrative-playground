import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScriptsPage from './pages/ScriptsPage';
import ScriptDetailPage from './pages/ScriptDetailPage';
import RolePlayingPage from './pages/RolePlayingPage';
import DashboardPage from './pages/DashboardPage';
import NewsPage from './pages/NewsPage';
import TokenomicsPage from './pages/TokenomicsPage';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/toaster"
import RoadmapPage from './pages/RoadmapPage';
import WhitepaperPage from './pages/WhitepaperPage';
import DocumentationPage from './pages/DocumentationPage';
import FAQPage from './pages/FAQPage';

const App = () => {
  return (
    <Router>
      <div className="bg-background font-sans text-foreground min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scripts" element={<ScriptsPage />} />
          <Route path="/scripts/:id" element={<ScriptDetailPage />} />
          <Route path="/role-playing" element={<RolePlayingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/tokenomics" element={<TokenomicsPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
