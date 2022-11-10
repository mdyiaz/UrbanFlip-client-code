import React, { useEffect, useState } from 'react';

const AddServiceInHome = () => {
    const [addservices, setAddServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addservice')
        .then(res => res.json())
        .then(data => setAddServices(data))

    } , [])

    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                addservices.map(addservice => {
                    return(
                        <div key={addservice._id} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={addservice.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{addservice.name}</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{addservice.price}</button>
    </div>
  </div>
</div>
                    )
                })
            }
        </div>
    );
};

export default AddServiceInHome;