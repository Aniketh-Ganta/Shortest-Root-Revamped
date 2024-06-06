import './App.css';
import Home from './Components/Home';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import SignIn from './Components/SignIn';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function App() {

  const [email, setEmail] = useState("N/A");
  const [firstName, setFirstName] = useState("N/A");
  const [lastName, setLastName] = useState("N/A");

  return (
    <div className="App">
      <GoogleOAuthProvider clientId="597831817687-ekv1o2ukvp4mr8lhjpv60deeq2ul2k3o.apps.googleusercontent.com">
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact path='/' element={<SignIn email={email} setEmail={setEmail} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}/>}/> 
              <Route exact path='/home' element={<Home email={email} setEmail={setEmail} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}/>}/>
              <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

//

export default App;
