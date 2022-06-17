import React from 'react';
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import { BsArrowRight } from 'react-icons/bs';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div id='profile'>
        <img id='img' src={ user.picture } alt={ user.name } />
        <h4>
          { user.nickname }
        </h4>
        <Link to='/dashboard'>
          <BsArrowRight />
          Continue
        </Link>
      </div>
    )
  );
}

export default Profile;
