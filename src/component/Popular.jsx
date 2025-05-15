import React from 'react';
import { Link } from 'react-router';
import { BsCupHot } from "react-icons/bs";

const Popular = () => {
    return (
        <div className=' w-11/12 mx-auto mt-20 mb-15'>
            <h1 className='text-center text-5xl font-bold text-[#331A15] text-shadow-lg'>Our Popular Products </h1>
           <div className='flex justify-center items-center mt-5'>
            <Link to="/add-coffee">
            <button className='btn bg-[#D2B48C] border-[#331A15] '> <BsCupHot /> Add New Coffee</button>
           </Link>
           </div>
        </div>
    );
};

export default Popular;