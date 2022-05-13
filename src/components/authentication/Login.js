import React, { useState } from 'react';

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <div className='container-fluid' style={{zIndex:"1111",position: "fixed", top: "0" }}>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12 px-0'>
                    <div className='login-card d-flex flex-column justify-content-center align-items-center'>
                        <div className='login-card-header text-center mb-4'>
                            <img src="https://lh3.googleusercontent.com/d/1JxtfqjgBhDqXpcqXXLqt9MBFwV47NTIS" height="30" className='mb-3' alt="..." />
                            <h4 className="">Welcome Back!</h4>
                            <p className="small text-muted">Log in to continue to HeeBee Web Pos.</p>
                        </div>
                        <div className='login-form'>
                            <form>
                                <div className="form-floating mb-3">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                
                              
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-12 px-0 '>
                    <div className="authentication-bg d-none d-md-block">
                        <div className="bg-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;