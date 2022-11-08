import React from 'react';

const ServicesList = ({service}) => {
    const {name, description, price, img, rating, button} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-60 w-80 rounded-2xl' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold">{name}</h2>
    <p>{description.slice(0, 100)}</p>
    <button className="btn btn-outline btn-secondary">Price: {price} </button> 


    <div className="card-actions justify-between">

    <button className="btn btn-outline btn-info">Ratings: {rating}</button>


      <button className="btn  btn-accent">Details</button>
      

    </div>
  </div>
</div>
    );
};

export default ServicesList;