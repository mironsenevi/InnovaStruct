import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from '@asgardeo/auth-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider
     config={ {
      signInRedirectURL: "http://localhost:5173",
      signOutRedirectURL: "http://localhost:5173",
      clientID: "4LqhSph_hCc3CDXZRan1RtIxp0ga",
      baseUrl: "https://api.asgardeo.io/t/innovastruct",
      scope: [ "openid","profile" ]
  } }
    >
    <App />
    </AuthProvider>
   
   
  </StrictMode>,
)
