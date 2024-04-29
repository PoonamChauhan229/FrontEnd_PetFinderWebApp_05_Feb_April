import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utilis/firebase';
import { addUser, removeUser } from '../utilis/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user); // Ensure correct selector path
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid } = user;
        try {
          const response = await axios.get(`https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata?uid=${uid}`);
          if (response.status === 200 && response.data.length > 0) {
            dispatch(addUser(response.data[0]));
          } else {
            dispatch(removeUser());
          }
        } catch (error) {
          console.error("API request error:", error);
          dispatch(removeUser());
        }
      } else {
        dispatch(removeUser());
      }
      setIsLoading(false); // Set loading state to false after data retrieval
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Handle sign out success
      })
      .catch((error) => {
        // Handle sign out error
      });
  };

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading indicator while user data is being fetched
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 fixed-top">
      {/* Your navigation bar content */}
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          {/* Render sign-in button or other UI elements */}
        </div>
      )}
    </nav>
  );
};

export default Header;
