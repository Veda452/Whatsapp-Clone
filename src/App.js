
import { GoogleOAuthProvider } from '@react-oauth/google';
//components

import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';



function App() {

  const clientId='302837400417-cp7uljsiofaunvea9r21jubp1kc578c1.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId} >
      <AccountProvider>

        <Messenger/>
        
      </AccountProvider>
  
    </GoogleOAuthProvider>
  );
}

export default App;
