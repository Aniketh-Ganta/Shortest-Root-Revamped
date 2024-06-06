import React from "react"

function Home({ email, setEmail, firstName, setFirstName, lastName, setLastName }) {

  if (email === "N/A") {
    return (
      <p>Invalid access</p>
    )
  } else {
    return (
      <div className="Home">
          <p>
            Account: {email}
            <br />
            Hi, {firstName} {lastName}! This is your home page!
          </p>
      </div>
    );
  }
}
  
export default Home;