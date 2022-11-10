import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user.photoURL);
    const [reviews, setReview] = useState([])

   


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}` , {
          headers:{
            authorization: `Bearer ${localStorage.getItem('Assignment11-token')}`
          }
        })
        .then(res => {
          if(res.status === 401 || res.status === 403){

            return logOut()

          }
          return res.json();
        })
        .then(data => {
          
          setReview(data);
        })

    }, [user?.email, logOut])





    const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to Delete this Review ?');
      if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: 'DELETE',
          headers:{
            authorization: `Bearer ${localStorage.getItem('Assignment11-token')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          

          if(data.deletedCount > 0){
            alert('deleted successfully');
            const remaining = reviews.filter(odr => odr._id !== id);
            setReview(remaining);
          }
        })
      }
  }





    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          Delete
        </th>
        <th>Name</th>
        <th>email</th>
        <th>Review</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
     
     
      
      {

            reviews.map(review => <MyReviewsRow
            key={review._id}
            review={review}
            handleDelete = {handleDelete}
            ></MyReviewsRow>)

      }
     
     
     
      
    </tbody>
   
   
  </table>
</div>
    );
};

export default MyReviews;