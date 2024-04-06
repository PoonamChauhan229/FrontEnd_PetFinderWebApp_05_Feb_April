import React, { useRef } from 'react'
import loginPhoto from '../assets/loginPhoto.jpg'
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const navigate=useNavigate()
    const handleButtonClick = () => {
                // Sign In Logic
          signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            //   setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
      
  return (
    <>
   
    <div className="container">
    <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block">
                            <img src={loginPhoto} alt="" width={450} height={380}/>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h5 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form onSubmit={(e) => e.preventDefault()}>
                                <div className="input-group mb-3">
                                        <input 
                                        ref={email}
                                        type="email" className="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                            style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
                                            />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" 
                                        ref={password}
                                        className="form-control  border border-1 rounded"
                                            id="exampleInputPassword" placeholder="Password"
                                            style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
                                            />
                                    </div>
                                   
                                    <div className="d-grid gap-2 col-12 mx-auto">
                                        <button className="btn btn-primary" type="button"
                                         style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
                                         onClick={handleButtonClick}
                                        >Login</button>
                                    </div>
                                </form>
                                <hr/>
                                <div className="text-center">
                                   
                                </div>
                                <div className="text-center">
                                    <button className="small btn"
                                    onClick={()=>navigate("/register")}
                                    style={{color:"#4e73df"}}>New ? Create an Account!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>
</>
  )
}

export default Login