import React from 'react';
import BG from '../assets/more/11.png'
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router';

const AddCoffee = () => {
    const style = {
        backgroundImage: `url(${BG}) `,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'top left, top right',
        backgroundSize: 'contain',
        padding: '2rem'

    }
    return (
        <div style={style} className='min-w-11/12 mx-auto'>
            <div className=' lg:w-1/2 mx-auto'>
                <Link to="/"> <button className='btn mt-8 text-[#331A15] border-[#331A15] '> <BsArrowLeft />
                    Back To Home</button></Link>
            </div>
            <div className=' lg:w-1/2 text-center mx-auto mt-20 mb-20 sm:p-10 space-y-4 bg-[#F4F3F0]'>
                <h2 className=' text-4xl font-bold text-[#331A15] text-shadow-lg'>Add New Coffee</h2>
                <p className='text-[#331A15]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                        <fieldset className="col-span-1 text-start ">
                            <label className="label ">Name</label>
                            <input type="text" className="input w-full" placeholder="Name" />
                            <label className="label ">Supplier</label>
                            <input type="text" className="input w-full" placeholder="Supplier" />
                        </fieldset>

                        <fieldset className="col-span-1 text-start">
                            <label className="label ">Test</label>
                            <input type="text" className="input w-full" placeholder="Test" />
                            <label className="label ">Price</label>
                            <input type="number" className="input w-full" placeholder="Price" />
                        </fieldset>

                        <fieldset className="col-span-1 text-start">
                            <label className="label ">Category</label>
                            <input type="text" className="input w-full" placeholder="Email" />
                        </fieldset>

                        <fieldset className="col-span-1 text-start ">
                            <label className="label ">Details</label>
                            <input type="text" className="input w-full" placeholder="Email" />
                        </fieldset>

                        <fieldset className="col-span-2 text-start">
                            <label className="label ">Photo URL</label>
                            <input type="text" className="input w-full" placeholder="Photo URL" />
                        </fieldset>

                        <fieldset className="col-span-2">
                            <button className="btn w-full bg-[#D2B48C] border-[#331A15]">Add Coffee</button>
                        </fieldset>
                    </div>
                </form>


            </div>

        </div>
    );
};

export default AddCoffee;