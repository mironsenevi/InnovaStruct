import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Constructors from './pages/Constructors';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/constructors" element={<Constructors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tenders" element={<div>Tenders Page</div>} />
          <Route path="/help" element={<div>Help Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;