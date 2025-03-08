import { useState, useEffect, createContext, useContext } from 'react';
import { useAuthContext } from "@asgardeo/auth-react";
import PropTypes from 'prop-types';
import { validateLicenseNumber, validatePhoneNumber } from '../utils/security';

export const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const { state, signIn, signOut, getBasicUserInfo, getDecodedIDToken, getAccessToken } = useAuthContext();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mfaRequired, setMfaRequired] = useState(false);
  const [ setVerificationId] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, [state.isAuthenticated]);

  const checkAuthStatus = async () => {
    try {
      if (state.isAuthenticated) {
        const basicUserInfo = await getBasicUserInfo();
        const decodedToken = await getDecodedIDToken();
        
        setUser({
          ...basicUserInfo,
          userType: decodedToken.userType || 'client',
          isEmailVerified: decodedToken.email_verified || false
        });
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      await signIn({
        fidp: "Google",
        additionalParams: {
          prompt: "select_account",
          userType: "client"
        }
      });
      return true;
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmailPassword = async (email, password) => {
    try {
      setLoading(true);
      await signIn({
        username: email,
        password,
        additionalParams: {
          userType: "company"
        }
      });
      return true;
    } catch (error) {
      console.error('Email login failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const verifyCompanyCredentials = async (licenseNumber, phoneNumber) => {
    if (!validateLicenseNumber(licenseNumber)) {
      throw new Error('Invalid license number format');
    }

    if (!validatePhoneNumber(phoneNumber)) {
      throw new Error('Invalid phone number format');
    }

    try {
      setLoading(true);
      const token = await getAccessToken();
      
      const response = await fetch('/api/verify-company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          licenseNumber,
          phoneNumber,
          userId: user?.sub
        })
      });

      if (!response.ok) {
        throw new Error('Company verification failed');
      }

      const data = await response.json();
      setVerificationId(data.verificationId);
      return data.verificationId;
    } catch (error) {
      console.error('Verification failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut();
      setUser(null);
      setMfaRequired(false);
      setVerificationId(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      mfaRequired,
      isAuthenticated: state.isAuthenticated,
      loginWithGoogle,
      loginWithEmailPassword,
      verifyCompanyCredentials,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProvider;