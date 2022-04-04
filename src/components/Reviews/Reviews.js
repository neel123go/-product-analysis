import React from 'react';
import useProductReview from '../../hooks/useProductReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useProductReview();
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <h2 className='text-2xl md:text-3xl mt-10 text-center'>What our Customers say!</h2>
            <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-5 xl:gap-10 py-8 md:p-5 lg:p-8'>
                {
                    reviews.map(review => <Review state='' key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;