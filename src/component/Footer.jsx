import React from 'react';
import BG from '../assets/more/13.jpg'
import Logo from '../assets/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { ImLocation2 } from "react-icons/im";
import { Link } from 'react-router';


const Footer = () => {
    const style = {
        backgroundImage: `url(${BG})`,
    }
    return (
        <div>

            <footer style={style} className="footer lg:flex justify-evenly items-center  text-base-content max-w-8xl mx-auto p-10">
                <div className=' sm:pl-24 '>
                    <Link to="/">
                    <img src={Logo} className='w-20' alt="" />
                    <h2 className='text-4xl text-shadow-lg text-[#331A15]'>Espresso Emporium</h2>
                    </Link>
                    <p className='text-[#331A15]'>Always ready to be your friend. Come & Contact with us to share your memorable moments,<br /> to share with your best companion.</p>
                    <div className='flex gap-5 mt-2'>
                        <FaFacebook size={28} className='text-[#331A15]' />
                        <FaInstagram size={28} className='text-[#331A15]' />
                        <FaTwitter size={28} className='text-[#331A15]' />
                        <FaLinkedin size={28} className='text-[#331A15]' />
                    </div>

                    <div className='mt-3'>
                        <h2 className='text-3xl text-shadow-lg text-[#331A15]'>Get in Touch</h2>
                        <div className='flex gap-4 mt-2'>
                            <BiSolidPhoneCall size={20} />
                            <p className='tracking-wider text-[#331A15] '> +8801709111608</p>
                        </div>
                        <div className='flex gap-4 mt-2'>
                            <TfiEmail size={20} />
                            <p className='text-[#331A15]'> info@coffeestore.com</p>
                        </div>
                        <div className='flex gap-4 mt-2'>
                            <ImLocation2 size={20} />
                            <p className='text-[#331A15]'> 72, Wall street, King Road, Dhaka</p>


                        </div>


                    </div>
                </div>

                <div className='sm:pl-24 space-y-4 '>
                    <h2 className='text-3xl text-shadow-lg lg:pt-10 text-[#331A15]'>Connect with Us</h2>
                    <input className=' shadow w-96 h-10 bg-white p-3' placeholder='Name' type="text" />
                    <input className='w-96 shadow h-10 bg-white p-3' placeholder='Email' type="email" />
                    <textarea className='shadow w-96 h-28 bg-white p-3' placeholder='Massage' name="" id=""></textarea>
                    <button className='btn bg-white border-[#331A15] rounded-full shadow text-[#331A15]' type="submit">Send Message</button>
                </div>




            </footer>
        </div>
    );
};

export default Footer;