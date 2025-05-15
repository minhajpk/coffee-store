import React from 'react';
import image1 from '../assets/icons/1.png'
import image2 from '../assets/icons/2.png'
import image3 from '../assets/icons/3.png'
import image4 from '../assets/icons/4.png'

const Banner = () => {
    return (
        <div>
           <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/vvzLgBb4/3.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content p-10 gap-5">
    <div className=" lg:pt-20 lg:pl-96 space-y-3 lg:text-start sm:text-center
      ">
      <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
      <p className=" ">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-[#E3B577] font-medium">Learn  More</button>
    </div>
  </div>
</div> 
 <div className='bg-[#ECEAE3]  '>
     <div className='flex justify-center items-center lg:p-14 space-x-10 sm:p-10 max-w-8xl mx-auto'>
   
   <div className='w-56 text-start'>
    <img src={image1} className='w-14 mb-3' alt="" />
    <h2 className='text-3xl font-medium text-[#331A15]'>Awesome Aroma</h2>
    <p className='text-[#331A15]'>You will definitely be a fan of the design  & aroma of your coffee</p>
   </div>
   <div className='w-56 text-start'>
    <img src={image2} className='w-14 mb-3 pl:2' alt="" />
    <h2 className='text-3xl font-medium text-[#331A15]'>High Quality</h2>
    <p className='text-[#331A15]'>We served the coffee to you maintaining the best quality</p>
   </div>
   <div className='w-56 text-start'>
    <img src={image3} className='w-14 mb-3 pl:2' alt="" />
    <h2 className='text-3xl font-medium text-[#331A15]'>Pure Grades</h2>
    <p className='text-[#331A15]'>The coffee is made of the green coffee beans which you will love</p>
   </div>
   <div className='w-56 text-start'>
    <img src={image4} className='w-14 mb-3' alt="" />
    <h2 className='text-3xl font-medium text-[#331A15]'>Proper Roasting</h2>
    <p className='text-[#331A15]'>Your coffee is brewed by first roasting the green coffee beans</p>
   </div>
   

   
  </div>
 </div>
        </div>
    );
};

export default Banner;