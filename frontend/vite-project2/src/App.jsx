import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate, 
  Link,
  useNavigate 
} from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider as CustomAuthProvider } from "./hooks/useAuth";
import { AuthProvider as AsgardeoProvider, useAuthContext } from "@asgardeo/auth-react";
import { asgardeoConfig } from "./config/asgardeoConfig";
import PrivateRoute from "./components/PrivateRoute";
import AuthPage from "./pages/auth/AuthPage";
import { useAuth } from "./hooks/useAuth"; 

const AuthenticatedContent = () => {
  const { state, signIn, signOut } = useAuthContext();
  
  return (
    <>
      {state.isAuthenticated ? (
        <div>
          <h1>Welcome {state.username}</h1>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Not Authenticated</h1>
          <button onClick={() => signIn()}>Login</button>
        </div>
      )}
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              
            </PrivateRoute>
          } />
          
          {/* Company-only Routes */}
          <Route path="/create-portfolio" element={
            <PrivateRoute companyOnly>
              
            </PrivateRoute>
          } />

          {/* Redirect root to dashboard or auth */}
          <Route path="/" element={
            <PrivateRoute>
              <Navigate to="/dashboard" replace />
            </PrivateRoute>
          } />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

const App = () => {
  return (
    <AsgardeoProvider config={asgardeoConfig}>
      <CustomAuthProvider>
        <AuthenticatedContent />
      </CustomAuthProvider>
    </AsgardeoProvider>
  );
};

// Auth callback handler component
const AuthCallback = () => {
  const { handleAuthCallback } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    handleAuthCallback()
      .then(() => navigate('/dashboard'))
      .catch(() => navigate('/auth'));
  }, [handleAuthCallback, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
    </div>
  );
};

// 404 Page component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-gray-600 mb-8">The page you are looking for doesnot exist.</p>
      <Link 
        to="/dashboard"
        className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
      >
        Go to Dashboard
      </Link>
    </div>
  </div>
);

export default App;