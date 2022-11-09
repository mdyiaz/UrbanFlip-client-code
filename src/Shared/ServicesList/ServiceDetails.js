import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const servicedetails = useLoaderData();
   
    return (
        <div>
           

{/* ServicesDetails section_____________________start____________ */}
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={servicedetails.img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{servicedetails.name}</h1>
      <p className="py-6">{servicedetails.description}</p>
      
      <div className='flex justify-around'>
      <button className="btn btn-primary ">Rating: {servicedetails.rating}</button>
      <button className="btn btn-primary">Price: {servicedetails.price}</button>
      </div>

    </div>
  </div>
</div>

{/* servicesDetails section end________________________________________ */}






{/* review section Start____________________________ */}









{/* review section Start____________________________ */}




        </div>
    );
};

export default ServiceDetails;