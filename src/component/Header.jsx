import React from 'react';
import Logo from '../assets/more/logo1.png'
import BG from '../assets/more/15.jpg'
import { Link } from 'react-router';

const Header = () => {

    const style = {
        backgroundImage: `url(${BG})`,
    }
    return (
        <div>
            


            <div style={style} className=" navbar shadow-sm  flex justify-center items-center gap-4">
        <div className="dropdown lg:hidden sm:block ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Add Coffee</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>


                <Link to="/"><img src={Logo} className='w-14' alt="Logo" /></Link>
                <Link to="/" className=" text-3xl text-white font-medium text-shadow-lg">Espresso Emporium</Link>
                
            </div>

        </div>


    );
};

export default Header; <h1>header</h1>