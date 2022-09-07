import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


function Logout() {

  const { logout } = useAuth0()

  return (
    <>
      <button onClick={() => {
        logout({ returnTo: window.location.origin });
        // window.location.origin is taking us back to the window we were on
      }}>Log out</button>
    </>
  )
}

export default Logout