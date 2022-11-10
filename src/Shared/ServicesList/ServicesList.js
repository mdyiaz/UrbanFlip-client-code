import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServicesList = ({service}) => {
    const {name, description, price, img, rating, _id} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

<PhotoProvider> <PhotoView src={img} key={_id}>
  
<img className='h-60 aspect-square w-full rounded object-cover' src={img} alt="Shoes" />
  
  </PhotoView>  </PhotoProvider>

  
  <div className="card-body">
    <h2 className="card-title font-extrabold">{name}</h2>
    <p>{description.slice(0, 99)}</p>
    <button className="btn btn-outline btn-secondary">Price: {price} </button> 


    <div className="card-actions justify-between">

    <button className="btn btn-outline btn-info">Ratings: {rating}</button>


     <Link to={`/servicedetails/${_id}`}> <button className="btn  btn-accent">View Details</button></Link>

      
      

    </div>
  </div>
</div>
    );
};

export default ServicesList;