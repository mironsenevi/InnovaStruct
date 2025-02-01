import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import Dashboard from './pages/Dashboard'; 
import MyProject from './pages/MyProject';
import Help from './pages/Help';
import ViewConstructors from './pages/ViewConstructors';
import Tenders from './pages/Tenders';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Router>
      <>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>
        
        <Sidebar show={showNav} />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/myProjects" element={<MyProject />} />
          <Route path="/help" element={<Help />} />
          <Route path="/viewConstructors" element={<ViewConstructors />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
