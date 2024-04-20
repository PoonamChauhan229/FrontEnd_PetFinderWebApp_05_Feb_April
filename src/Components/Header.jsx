import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from '../utilis/firebase';
import { addUser, removeUser } from '../utilis/userSlice';

const Header = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            navigate("/error");
          });
      };
    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
    
        // Unsubscribe when component unmounts
        return () => unsubscribe();
      }, []);

  return (
    <div>
      {
        user &&
        <button onClick={handleSignOut} className="font-bold text-white ">
        (Sign Out)
      </button>
      }
    </div>
  )
}

export default Header
