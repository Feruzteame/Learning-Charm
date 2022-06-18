import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FiLogIn } from 'react-icons/fi';

const LogInButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
   !isAuthenticated && (
      <button id='login_button' onClick={ () => loginWithRedirect() }>
        <FiLogIn />
        Register
      </button>
    )
  )
}

export default LogInButton;
