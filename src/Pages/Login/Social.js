import React, { useContext } from 'react';
import { setAuthToken } from '../../API/api';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Social = () => {

    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
          const user = result.user;
          console.log(user);
          setAuthToken(user)



        })
        .catch(err => console.error(err));
      }
    return (
        <div className='text-center'>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary  mt-3 mb-5">Sign in with Google</button>
        </div>
    );
};

export default Social;