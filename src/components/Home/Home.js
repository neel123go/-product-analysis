import React from 'react';
import bannerImage from '../../assets/banner-img.png';

const Home = () => {
    return (
        <div className='grid grid-cols-2 justify-between'>
            <div className="pl-40">
                <h1 className='text-left text-blue-500 text-7xl mt-20'>Arora Shoes</h1>
                <h4 className='text-left mt-3 text-xl text-orange-600'>Good shoes take you good places.</h4>
                <p className='text-left mt-10 text-slate-600'>Arora Shoes is a footwear manufacturing company that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Sylhet in the Bangladesh area.</p>
            </div>
            <div className="flex items-center justify-center">
                <img className='w-260' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Home;