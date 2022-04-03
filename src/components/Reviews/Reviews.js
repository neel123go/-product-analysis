import React from 'react';
import useProductReview from '../../hooks/useProductReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useProductReview();
    return (
        <div>
            <h2 className='text-3xl mt-10'>Customer Reviews</h2>
            <div className='grid grid-cols-4 gap-10 pt-10 p-20'>
                {
                    reviews.map(review => <Review state='' key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;