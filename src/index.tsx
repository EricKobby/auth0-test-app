import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;

ReactDOM.render(
  <Auth0Provider
    domain={REACT_APP_DOMAIN as string}
    clientId={REACT_APP_CLIENT_ID as string}
    redirectUri={REACT_APP_REDIRECT_URI}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);