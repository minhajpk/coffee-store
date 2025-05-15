import React from 'react';
import cups from '../assets/cups/Rectangle 9.png'
import cups2 from '../assets/cups/Rectangle 10.png'
import cups3 from '../assets/cups/Rectangle 11.png'
import cups4 from '../assets/cups/Rectangle 12.png'
import cups5 from '../assets/cups/Rectangle 13.png'
import cups6 from '../assets/cups/Rectangle 14.png'
import cups7 from '../assets/cups/Rectangle 15.png'
import cups8 from '../assets/cups/Rectangle 16.png'

const Follow = () => {
    return (
        <div className='max-w-7xl mx-auto  mt-10 mb-10'>
            <h2 className='text-center text-5xl font-bold text-[#331A15] text-shadow-lg'>Follow Us On Instagram</h2>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:p-4 justify-center items-center mt-10'>
                <img src={cups} alt="" />
                <img src={cups2} alt="" />
                <img src={cups3} alt="" />
                <img src={cups4} alt="" />
                <img src={cups5} alt="" />
                <img src={cups6} alt="" />
                <img src={cups7} alt="" />
                <img src={cups8}alt="" />
            </div>
        </div>
    );
};

export default Follow;