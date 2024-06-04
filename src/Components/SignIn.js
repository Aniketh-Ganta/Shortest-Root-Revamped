import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function SignIn() {

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    console.log("Hi, VIVINNNN AND ANIIIII")
  };

  const handleError = () => {
    console.log('Login Failed');
  };

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
    </div>
  );
}

export default SignIn