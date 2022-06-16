import React from 'react';
import './Auth.scss'
import LogInButton from './Login_button';
import LogOutButton from './Logout_button';
import Profile from './Profile';

const Auth = () => {
 

  return (
    <div>
      <h1>With Learning Charm you can find all universties in this world based on your country </h1>
      <div id="container"> 
        <Profile />
        <LogInButton />
        <LogOutButton />
      </div>
    </div>
  )
}

export default Auth