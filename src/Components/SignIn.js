import React from 'react';
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function SignIn() {

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    var decoded = jwtDecode(credentialResponse.credential)
    console.log(decoded.name, decoded.email)
    console.log("Hi, VIVINNNN AND ANIIIII")
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  const Logout = () => {
    console.log('Logging out')
    googleLogout()
  }

  return (
    <div>
        <p>Sign in with Google below!</p>
        <br />
        <GoogleOAuthProvider clientId="597831817687-ekv1o2ukvp4mr8lhjpv60deeq2ul2k3o.apps.googleusercontent.com">
            <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            />
        </GoogleOAuthProvider>
        <p>Sign Out Below</p>
        <button onClick={() => Logout()}>Log Out</button>
    </div>
  );
}

export default SignIn