import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

function SignIn({ email, setEmail, firstName, setFirstName, lastName, setLastName }) {

  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    const decodedEmail = decodedToken.email;
    const decodedFirstName = decodedToken.given_name;
    const decodedLastName = decodedToken.family_name;
    setEmail(decodedEmail);
    setFirstName(decodedFirstName);
    setLastName(decodedLastName);
    navigate(`/home`);
    console.log(email)
    console.log(firstName)
    console.log(lastName)
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div>
        <p>Sign in with Google below!</p>
        <br />
            <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            />
    </div>
  );
}

export default SignIn;
