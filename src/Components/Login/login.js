import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

export function Login() {
    return (
        <>
            {/* ---------------MEMBER LOGIN--------------- */}
            <div className='loginBackground py-5'>
                <div class="card mb-3 py-5">
                    <div class="row g-2">
                        <div class="col-md-4 d-flex align-items-center loginLogo">
                            <div>
                                <img src='https://img.freepik.com/premium-photo/businessman-using-login-interface-technology_36325-2746.jpg' className='img-fluid mt-5 rounded-circle' />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 className='card-title'>Member Login</h1>
                                <div className='loginBody py-1'>
                                    <form>
                                        <div className='loginUser mt-2 p-1 rounded'>
                                            <label className="justify-content-center">
                                                <FontAwesomeIcon className='email-icon mt-1' icon={faEnvelope} />
                                                <input type="email" id="email" name="fname" placeholder='   Email' className='eMail' />
                                            </label>
                                        </div>

                                        <div className='loginPassword mt-3 p-1 rounded'>
                                            <label className="justify-content-center">
                                                <FontAwesomeIcon className="password-icon" icon={faLock} />
                                                <input type="password" id="password" name="password" placeholder=' ********' className='password' />
                                            </label>
                                        </div>


                                        <div className='loginButton mt-3'>
                                            <button className='btn btn-default btn-success -standard tw-w-full'>LOGIN</button>

                                        </div>
                                    </form>
                                </div>
                                <div className='d-flex mt-3'>
                                    <h5> Forgot</h5>
                                    <p className='userLink ms-1'>Username / Password ?</p>
                                </div>
                                <div className='create mt-5'>
                                    <p className='createAccount'>Create your account<FontAwesomeIcon icon={faRightLong} size="xs" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}