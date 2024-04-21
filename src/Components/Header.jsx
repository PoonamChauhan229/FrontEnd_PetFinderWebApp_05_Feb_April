import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from '../utilis/firebase';
import { addUser, removeUser } from '../utilis/userSlice';
import { Link, useLocation } from "react-router-dom"
import Hero from './Hero'

const Header = () => {
  const location = useLocation();
  const excludedPaths = ['/login', '/register','/browse']; // Paths where NavBar should be excluded

  // Check if current path is in the excludedPaths array
  const shouldRenderNavBar = !excludedPaths.includes(location.pathname);

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user)
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
                selectedBreed:null,
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
    <>
    
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 fixed-top">
         <div className="navbar-nav ms-auto py-0">
            <h1 className="nav-item nav-link active fs-5"><i className="bi bi-shop fs-2 text-primary me-2"></i>PET SHOP</h1>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 me-3">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>                
                <Link to="/services" className="nav-item nav-link">Services</Link>
                <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                {
                  user ?  <div onClick={handleSignOut} className="nav-item nav-link">
                  Sign Out
                </div>:
                  <>
                  <Link to="/login" className="nav-item nav-link">Login</Link>
                  <Link to="/register" className="nav-item nav-link">SignUp</Link>
                  </>
                }
            </div>
        </div>
    </nav> 
    {shouldRenderNavBar && <Hero/>}
 
    
    </>
   
  )
}

export default Header