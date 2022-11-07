import React from 'react';
import img1 from '../../../assets/banner/1.jpg';
import img2 from '../../../assets/banner/2.jpg';
import img3 from '../../../assets/banner/3.jpg';
import img4 from '../../../assets/banner/4.jpg';

const Banner = () => {
    return (
        <div className='grid grid-cols-2 mb-10 text-center '>
            <div className='text-center text-white bg-teal-900 py-28'>

                    <h2 className='text-4xl pt-8'>UrbanFlip</h2>
                    <h2 className='text-xl mt-5'>
                    Passionate in capturing perfect photo that able to tell story. Combining knowledge with experience to create those. Familiar with advanced equipment and editing software.
                    </h2>
                    <div className="form-control ">
  <div className="input-group mt-10 mx-40">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-warning text-white">
      search
    </button>
  </div>
</div>

            </div>


            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;