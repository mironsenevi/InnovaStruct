import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/constructors" element={<div>Constructors Page</div>} />
          <Route path="/tenders" element={<div>Tenders Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/help" element={<div>Help Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;