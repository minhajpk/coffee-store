import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const Roots = () => {
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Roots;