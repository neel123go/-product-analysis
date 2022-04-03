import React from 'react';
import NotFoundImage from '../../assets/404.jpg';

const NotFound = () => {
    return (
        <div className='bg-slate-50'>
            <img className='w-2/4 mx-auto' src={NotFoundImage} alt="" />
            <p className='text-2xl mt-10'>Opp's, The page you are looking for is not found.</p>
        </div>
    );
};

export default NotFound;