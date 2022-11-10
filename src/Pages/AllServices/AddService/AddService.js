import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {

useTitle('AddService');
    const handlertoAddedProduct = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const service = {name, photo, price};
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Service SuccessFully Added');
            }
            console.log(data)})
        .catch(err => console.error(err))
        form.reset();
    }

    return (
        <form onSubmit={handlertoAddedProduct} className="border p-6 rounded-xl mx-auto w-3/4 mt-8 mb-0 
                 space-y-4">
                <div className=''>
                    <div>
                        <label htmlFor="email" className="sr-only">Name Of Products</label>

                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Name Of Products"
                            />


                        </div>
                    </div>

                </div>
                <div>
                    <label htmlFor="Product Photo" className="sr-only">Name Of Products</label>

                    <div className="relative">
                        <input
                            type="text"
                            name="photo"
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Product Picture (URL)"
                        />


                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter amount</span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" placeholder="10"
                            name='price' className="input input-bordered w-1/2 sm:w-auto" />
                        <span>USD</span>
                    </label>
                </div>


                <div className="flex items-center justify-between">
                    <button className="btn btn-outline btn-primary">Add Product</button>
                </div>
            </form>


    );
};

export default AddService;