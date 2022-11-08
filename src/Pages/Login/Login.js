import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();

    }
    return (
        <div className="hero w-full mb-10 my-20">
        <div className="hero-content grid md:grid-cols-2 flex-col gap-20 lg:flex-row">
          <div className="text-center lg:text-left">
           

            <img className='' src={login} alt="" />


          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login Now !" />

                <p className='mt-3 text-sm text-center'>Dont have an Account ?<Link to ="/register" className='text-orange-600 font-semibold'>Sign Up</Link></p>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;