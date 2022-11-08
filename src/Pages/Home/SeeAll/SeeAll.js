import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllServices from '../../AllServices/AllServices';
import SHowServices from '../../SHowServices/SHowServices';

const SeeAll = () => {

    const [allservices, setAllServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])

    return (
        <div className='text-center mb-10 mx-20 mt-10 shadow-xl'>
           <Link to="/showservices" > <button className="btn btn-accent w-full">See All Services</button> </Link>

           {
                            allservices.map(allservice => <SHowServices
                            
                                key={allservice._id}
                                allservice={allservice}


                            ></SHowServices>)
                        }

        </div>
    );
};

export default SeeAll;