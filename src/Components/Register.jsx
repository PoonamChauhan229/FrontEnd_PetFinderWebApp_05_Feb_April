import React from 'react'
import loginPhoto from '../assets/loginPhoto.jpg'
const Register = () => {
  return (
    <div class="container">
        <div class="row justify-content-center">

<div class="col-xl-10 col-lg-12 col-md-9">

    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                <img src={loginPhoto} alt="" width={450} height={380}/>
                </div>
                <div class="col-lg-6">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form>
                            <div class="input-group row mb-3">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                        placeholder="First Name"
                                        style={{fontSize: "0.8rem",padding: "0.5rem 1rem"}}
                                        />
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control form-control-user" id="exampleLastName"
                                        placeholder="Last Name"
                                        style={{fontSize: "0.8rem",padding: "0.5rem 1rem"}}
                                        />
                                </div>
                            </div>
                            <div class="input-group row mb-3">
                            <div class="col-sm-12 mb-3 mb-sm-0">
                                        <input type="email" class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                            style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
                                            />
                            </div>
                            </div>
                            <div class="input-group row mb-3">
                                <div class="col-sm-12 mb-3 mb-sm-0">
                                    <input type="password" class="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password"
                                        style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
                                        />
                                </div>
                                
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                        <button class="btn btn-primary" type="button"
                                         style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
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
  )
}

export default Register