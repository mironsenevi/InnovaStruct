export const asgardeoConfig = {
  signInRedirectURL: `${window.location.origin}/auth/callback`,
  signOutRedirectURL: `${window.location.origin}/auth`,
  clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
  baseUrl: import.meta.env.VITE_ASGARDEO_BASE_URL,
  scope: ["openid", "profile", "email"],
  responseMode: "query",
  disableTrySignInSilently: true,
  endpoints: {
    // Add custom endpoints if needed
    token: "/oauth2/token",
    authorize: "/oauth2/authorize",
    userInfo: "/oauth2/userinfo"
  }
};