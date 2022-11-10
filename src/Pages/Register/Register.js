import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../API/api';
import login from '../../assets/login.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Register = () => {


  const {createUser, updatePhoto, } = useContext(AuthContext)
  

    const handleSignUp = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const photoUrl = form.photourl.value;
      const name = form.name.value;
      
      
      createUser(email, password, photoUrl, name)
      .then(result => {
        const user = result.user;
        console.log(user);
        updatePhoto(name, photoUrl)
        setAuthToken(user);
        
        
        
 
      })
      .catch(err => console.error(err));

    }








    return (
        <div className="hero w-full mb-10 my-20">
        <div className="hero-content grid md:grid-cols-2 flex-col gap-20 lg:flex-row">
          <div className="text-center lg:text-left">
           

            <img className='' src={login} alt="" />


          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Register !</h1>


            <form onSubmit={handleSignUp} className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter your name" required className="input input-bordered" />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" name='photourl' placeholder="Enter your photos Url" required className="input input-bordered" />
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" required className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register Now !" />

                <p className='mt-3 text-sm text-center'>Already have an Account ? <Link to ="/login" className='text-orange-600 font-semibold'> Login here</Link></p>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;