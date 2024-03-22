import { Auth0Provider } from '@auth0/auth0-react-native';

const domain = 'your-auth0-domain';
const clientId = 'your-auth0-client-id';

// Initialize Auth0Provider
const Auth0ProviderWrapper = ({ children }) => (
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={'your-app-redirect-url'}
  >
    {children}
  </Auth0Provider>
);

export { Auth0ProviderWrapper };
