import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='py-5 bg-slate-200 flex justify-center items-center'>
            <CustomLink className='m-4 underline underline-offset-8' to='/'>HOME</CustomLink>
            <CustomLink className='m-4 underline underline-offset-8' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='m-4 underline underline-offset-8' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='m-4 underline underline-offset-8' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='m-4 underline underline-offset-8' to='/about'>ABOUT</CustomLink>
        </div>
    );
};

export default Header;