import React, { useRef } from 'react'
import loginPhoto from '../assets/loginPhoto.jpg'
import {
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from '../utilis/userSlice';
import Header from './Header';

const Register = () => {
    const dispatch = useDispatch();

    const firstName = useRef(null);
    const lastName = useRef(null)
    const name = `${firstName} ${lastName}`
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value,
                    // photoURL: USER_AVATAR,
                })
                    .then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                // photoURL: photoURL,
                            })
                        );
                    })
                    .catch((error) => {
                        //   setErrorMessage(error.message);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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
                                    <img src={loginPhoto} alt="" width={450} height={380} />
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="First Name"
                                                        style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                                                        ref={firstName}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                        placeholder="Last Name"
                                                        style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                                                        ref={lastName}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-12 mb-3 mb-sm-0">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                        style={{ fontSize: "0.8rem", padding: "0.7rem 1rem" }}
                                                        ref={email}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-12 mb-3 mb-sm-0">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password"
                                                        style={{ fontSize: "0.8rem", padding: "0.7rem 1rem" }}
                                                        ref={password}
                                                    />
                                                </div>

                                            </div>
                                            <div className="d-grid gap-2 col-6 mx-auto">
                                                <button className="btn btn-primary" type="button"
                                                    style={{ fontSize: "0.8rem", padding: "0.7rem 1rem" }}
                                                    onClick={handleButtonClick}
                                                >Register</button>
                                            </div>
                                        </form>
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

export default Register