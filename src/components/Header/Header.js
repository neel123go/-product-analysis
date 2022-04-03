import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='py-5 bg-slate-200'>
            <Link className='m-4 text-gray-800 underline underline-offset-8' to='/'>HOME</Link>
            <Link className='m-4 text-gray-800 underline underline-offset-8' to='/reviews'>REVIEWS</Link>
            <Link className='m-4 text-gray-800 underline underline-offset-8' to='/dashboard'>DASHBOARD</Link>
            <Link className='m-4 text-gray-800 underline underline-offset-8' to='/blogs'>BLOGS</Link>
            <Link className='m-4 text-gray-800 underline underline-offset-8' to='/about'>ABOUT</Link>
        </div>
    );
};

export default Header;