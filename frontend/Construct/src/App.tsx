import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/reviews" element={<div className="p-6">Reviews Page</div>} />
            <Route path="/help" element={<div className="p-6">Help Page</div>} />
            <Route path="/settings" element={<div className="p-6">Settings Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;