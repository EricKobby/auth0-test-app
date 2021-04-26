import './App.css';
import Welcome from './components/Welcome'
import { BrowserRouter, Route } from 'react-router-dom'
import UserProfile from './components/UserProfile';
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <BrowserRouter>
      {isAuthenticated ? (<Route component={UserProfile} path="/account" />) : (<Route component={Welcome} exact={true} path="/" />)}
    </BrowserRouter>
  );
}

export default App;
