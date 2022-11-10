import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const ServiceDetails = () => {
  

  
    const servicedetails = useLoaderData();
    
    const {user} = useContext(AuthContext);

    
    

    const [allReviews, setAllReviews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setAllReviews(data))
    },[])

    const handleReview = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = user?.email || 'unregistered';
      const message = form.message.value;


      const review = {
          service: servicedetails._id,
          serviceName: servicedetails.name,
          customer: name,
          email,
          message
      }


   

      fetch('http://localhost:5000/reviews/', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          alert('Review placed seccesfully');
          form.reset();

        }
        console.log(data)})
      .catch(err => console.error(err));


    }
   
    return (
        <div>
           

{/* ServicesDetails section_____________________start____________ */}
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={servicedetails?.img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{servicedetails?.name}</h1>
      <p className="py-6">{servicedetails?.description}</p>
      
      <div className='flex justify-around'>
      <button className="btn btn-primary ">Rating: {servicedetails?.rating}</button>
      <button className="btn btn-primary">Price: {servicedetails?.price}</button>
      </div>

    </div>
  </div>
</div>

{/* servicesDetails section end________________________________________ */}







{/* review section Start____________________________ */}



<h2 className=' text-center text-4xl font-bold mb-2'>Reviews</h2>











      <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          Update
        </th>
        <th>Name</th>
        <th>email</th>
        <th>Review</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     
     
      
      {



        allReviews?.map(allReview => {
          return(

            


            <tr key={allReview._id}>
          <th>
  <label>
    <input type="checkbox" className="checkbox" />
  </label>
</th>
<td>
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div className="font-bold">{allReview.customer}</div>
      
    </div>
  </div>
</td>
<td>
  {allReview.email}
 
</td>
<td>{allReview.message}</td>
<th>
  <button className="btn btn-ghost btn-xs">details</button>
</th>
</tr>







          )
        })

        



      }
     
     
     
      
    </tbody>
   
   
  </table>
</div>





















<div>


 <h3 className='text-center text-4xl font-bold mb-3'>Write a Review for this service__</h3>
    <form onSubmit={handleReview}>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>

                  <input type="text" placeholder="Type here" name='email' className="input input-bordered input-secondary w-full  mb-5" defaultValue={user?.email} />  <br />

                  <input type="text" placeholder="Type here" name='name' required className="input input-bordered input-secondary w-full  mb-5" />  <br />



                  <textarea className="textarea textarea-accent mb-10" name='message' placeholder="review"></textarea> <br />


                  <input className='btn btn-primary' type="submit" value="Submit" />

          </div>
    </form>

</div>







{/* review section end____________________________ */}




        </div>
    );
};

export default ServiceDetails;