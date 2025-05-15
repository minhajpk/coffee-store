import React from 'react';
import Error from '../assets/404/404.gif'
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router';
import { BsArrowLeft } from "react-icons/bs";

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center items-center mt-10'>
                <img src={Error} alt="" />
            </div>
            <div className=' flex justify-center mb-10'>
                <Link to="/"> <button className='btn mt-8 text-[#331A15] border-[#331A15] '> <BsArrowLeft />
                    Back To Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;