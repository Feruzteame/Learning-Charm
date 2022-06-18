import React from 'react';
import './auth.scss'
import LogInButton from './login_button';
import LogOutButton from './logout_button';
import Profile from './profile';

const Auth = () => {
  return (
    <div>
      <h1>
        With Learning Charm you can find all universities in this world based on your country
      </h1>
      <div id='container'> 
        <Profile />
        <LogInButton />
        <LogOutButton />
      </div>
    </div>
  );
}

export default Auth;
