import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SHowServices = () => {

    useTitle('See Services');
  

    const [allservices, setAllServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])


   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allservices?.map(allservice => {
                    return (
                    
                    <div>
    
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-60 w-80 rounded-2xl' src={allservice?.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold">{allservice?.name}</h2>
    <p>{allservice?.description.slice(0, 100)}</p>
    <button className="btn btn-outline btn-secondary">Price: {allservice?.price} </button> 


    <div className="card-actions justify-between">

    <button className="btn btn-outline btn-info">Ratings: {allservice?.rating}</button>


     <Link to={`/servicedetails/${allservice?._id}`}> <button className="btn  btn-accent">View Details</button></Link>

      
      

    </div>
  </div>
</div>
    
    
                    </div>
                    )
    
                })
            }
        </div>
    );
};

export default SHowServices;