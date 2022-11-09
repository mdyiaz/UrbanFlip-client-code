import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesList from '../../../Shared/ServicesList/ServicesList';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services?limit=3')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='text-center '>
            <div className='bg-teal-900'>
                <p className='text-2xl font-bold text-white mb-5 py-2'>My Services</p>
                <h3 className='text-3xl font-semibold text-white py-5'>Full service means you get the whole shebang… <br /> from the beginning to the very end. Full service photography is just that. The photographer is involved from the beginning and stays involved until you get your images, or in some cases, your images get placed on your walls!</h3>
            </div>






            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-14 mt-10'>


                    

                        {
                            services.map(service => <ServicesList
                            
                                key={service._id}
                                service={service}


                            ></ServicesList>)
                        }
                  

            </div>

            <Link to="/showservices" > <button className="btn btn-accent w-full">See All Services</button> </Link>
        </div>
    );
};

export default Services;