import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Social from './Social';

const Login = () => {

  useTitle('Login');

  const {login} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  


  const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
          const user = result.user;
          


          const currentUser = {
            email: user.email
          }

          console.log(currentUser);
          // get jwt token___
          fetch('https://b6a11-service-review-server-side-mdyiaz.vercel.app/jwt', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body:JSON.stringify(currentUser)


          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('Assignment11-token', data.token);
            navigate(from, {replace: true });
          });

          
        })
        .catch(err => console.error(err));

    }
    return (
        <div className="hero w-full mb-10 my-20">
        <div className="hero-content grid md:grid-cols-2 flex-col gap-16 lg:flex-row">
          <div className="text-center lg:text-left">
           

            <img className='' src={loginImg} alt="" />


          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now !</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login Now !" />

                
                
              </div>
            </form>
            <p className='mt-3 text-sm text-center'>Dont have an Account ? <Link to ="/register" className='text-orange-600 font-semibold'> Sign Up</Link></p>

            
            <Social></Social>

          </div>
        </div>
      </div>
    );
};

export default Login;