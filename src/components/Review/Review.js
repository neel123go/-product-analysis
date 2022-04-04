import React from 'react';
import './Review.css';

const Review = ({ review, count, state }) => {
    const { name, text, rating, img } = review;
    if (state === 'inHome') {
        if (count < 3) {
            return (
                <div className='review-card bg-red-100 rounded-lg p-0 md:p-3 mx-auto'>
                    <img className='h-3/5 p-5 mx-auto' style={{ borderRadius: '50%' }} src={img} alt="" />
                    <h2 className='text-2xl mt-1'>{name}</h2>
                    <h3 className='mt-4 text-xl text-orange-800'>Rating: {rating} Stars</h3>
                    <p className='text-xl mt-3 px-2'>{text}</p>
                </div>
            );
        }
    } else {
        return (
            <div className='review-card bg-red-100 rounded-lg p-3'>
                <img className='h-3/5 p-5 mx-auto' style={{ borderRadius: '50%' }} src={img} alt="" />
                <h2 className='text-2xl mt-1'>{name}</h2>
                <h3 className='mt-4 text-xl text-orange-800'>Rating: {rating} Stars</h3>
                <p className='text-xl mt-3 px-2'>{text}</p>
            </div>
        );
    }
};

export default Review;