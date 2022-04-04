import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner-img.png';
import useProductReview from '../../hooks/useProductReview';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useProductReview();
    let count = 0;
    return (
        <div className='text-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between mt-10 lg:mt-20 max-w-7xl mx-auto'>
                <div className="px-10 xl:pl-40 text-left">
                    <h1 className='text-blue-500 md:text-6xl text-2xl md:mt-20'>Arora Shoes</h1>
                    <h4 className='mt-3 text-xl text-orange-600'>Good shoes take you good places.</h4>
                    <p className='mt-10 text-slate-600'>Arora Shoes is a footwear manufacturing company that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Sylhet in the Bangladesh area.</p>
                    <button className='text-purple-600 text-xl bg-purple-200 rounded-lg py-3 px-8 mt-8'>Live Demo</button>
                </div>
                <div className="flex items-center justify-center">
                    <img className='w-260 p-5' src={bannerImage} alt="" />
                </div>
            </div>

            <div className="px-0 md:px-8 lg:px-28">
                <h2 className='text-slate-800 text-3xl md:text-4xl lg:mt-24'>Customer Reviews({reviews.length})</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-20 xl:gap-32 mt-14'>
                    {
                        reviews.map(review => <Review count={count++} state='inHome' key={review.id} review={review}></Review>)
                    }
                </div>
                <div className='my-10'>
                    <Link to='/reviews' className='text-purple-700 bg-purple-200 px-8 py-3 text-xl rounded-lg'>Show All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;