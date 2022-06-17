import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FiLogOut } from 'react-icons/fi';

const LogOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button id='logout_button' onClick={ () => logout() }>
        <FiLogOut />
        Log Out
      </button>
    )
  )
}

export default LogOutButton;
