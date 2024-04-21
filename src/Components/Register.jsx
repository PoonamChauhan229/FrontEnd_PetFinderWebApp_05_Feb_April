import { useRef } from 'react'
import {
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth} from '../utilis/firebase';
import { useDispatch } from "react-redux";
import { addUser } from '../utilis/userSlice';

import { useNavigate } from 'react-router-dom';

const Register = () => {
    
    const navigate=useNavigate()
    const dispatch = useDispatch();

    const firstName = useRef(null);
    const lastName = useRef(null)
    // const name = 
    const email = useRef(null);
    const password = useRef(null);
   

    const handleButtonClick = () => {
       
        createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
            .then((userCredential) => {
                console.log("Name",firstName.current.value +" "+lastName.current.value)
                const user = userCredential.user;
                console.log("Signup user",user)
                updateProfile(user, {
                    displayName: firstName.current.value +" "+lastName.current.value,
                    // photoURL: USER_AVATAR,
                })
                    .then(() => {
                        const { uid, email, displayName } = user;
                        console.log("DN",displayName)
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
       
        <div className="container bg-testimonial" style={{marginTop:"140px"}}>
            <div className="row justify-content-center">

            <div className="col-xl-5 col-lg-5 col-md-5 px-5">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user bg-light border-0 px-4" id="exampleFirstName"
                                                        placeholder="First Name"
                                                         style={{fontSize: "1rem",padding: "1rem 1rem"}}
                                                        ref={firstName}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-user bg-light border-0 px-4" id="exampleLastName"
                                                        placeholder="Last Name"
                                                         style={{fontSize: "1rem",padding: "1rem 1rem"}}
                                                        ref={lastName}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-12 mb-3 mb-sm-0">
                                                    <input type="email" className="form-control form-control-user bg-light border-0 px-4"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Email Address..."
                                                        style={{fontSize: "1rem",padding: "1rem 1rem"}}
                                                        ref={email}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-12 mb-3 mb-sm-0">
                                                    <input type="password" className="form-control form-control-user bg-light border-0 px-4"
                                                        id="exampleInputPassword" placeholder="Password"
                                                        style={{fontSize: "1rem",padding: "1rem 1rem"}}
                                                        ref={password}
                                                    />
                                                </div>

                                            </div>
                                            <div className="d-grid gap-2 col-6 mx-auto">
                                                <button className="btn btn-primary border-primary" type="button"
                                                style={{fontSize: "0.8rem",padding: "0.7rem 1rem",backgroundColor: "#7AB730"}}
                                                onClick={handleButtonClick}
                                            >Register</button>
                                            </div>
                                        </form>
                                        <hr style={{color:"#7AB730"}}/>
                                
                                <div className="text-center text-primary">
                                    <button className="small btn"
                                    onClick={()=>navigate("/login")}
                                    style={{color:"#7AB730"}}>Already Have an Account ? Login !</button>
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

export default Register