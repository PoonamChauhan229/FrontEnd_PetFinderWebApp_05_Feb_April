import React from 'react'
import loginPhoto from '../assets/loginPhoto.jpg'
const Login = () => {
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
                                    <h1 class="h5 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form>
                                <div class="input-group mb-3">
                                        <input type="email" class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                            style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
                                            />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="password" class="form-control  border border-1 rounded"
                                            id="exampleInputPassword" placeholder="Password"
                                            style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
                                            />
                                    </div>
                                   
                                    <div class="d-grid gap-2 col-12 mx-auto">
                                        <button class="btn btn-primary" type="button"
                                         style={{fontSize: "0.8rem",padding: "0.7rem 1rem"}}
                                        >Login</button>
                                    </div>
                                </form>
                                <hr/>
                                <div class="text-center">
                                   
                                </div>
                                <div class="text-center">
                                    <a class="small" href="/" style={{color:"color: #4e73df;"}}>Create an Account!</a>
                                </div>
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

export default Login