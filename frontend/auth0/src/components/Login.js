import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'; // this is a hook in react when using functional components


function Login() {
  
  const { loginWithRedirect } = useAuth0()

  return (
    <>

      <button onClick={loginWithRedirect}>Log in</button>

    </>
  )
}

export default Login