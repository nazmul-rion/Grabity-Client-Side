import React, { useState } from 'react'
import Rating from 'react-rating'
import { useLocation } from 'react-router-dom';
import CustomSpinner from '../../../../Components/Spinner/CustomSpinner';
import useAuth from '../../../../Context/Authentication/useAuth';
import ReviewListAPI from '../../../../Hooks/ReviewListAPI';
import ReviewCard from './ReviewCard'

const ReviewsSection = () => {
    const { loading } = useAuth();
    const location = useLocation();
    const { ProductRating, NumberOfRaters, ProductID } = location.state;
    const [reviewSort, setReviewSort] = useState("-1");
    const [reviewSearch, setReviewSearch] = useState("");
    const [reviews] = ReviewListAPI(ProductID, reviewSearch, reviewSort);

    const [showBtn, setShowBtn] = useState(true);
    const [seeMorePagination, setSeeMorePagination] = useState(8);
    const seeMoreButtonHandle = () => {
        setSeeMorePagination(prevValue => prevValue + 8);
        seeMorePagination > reviews.length ? setShowBtn(false) : setShowBtn(true);
    }

    const handleReviewSort = (e) => {
        setReviewSort(e.target.value)
    }

    const handleReviewSearch = (e) => {
        setReviewSearch(e.target.value)
    }

    return (
        <section className='container-fluid'>

            <div className="container">

                <h5 className="text-center">Here Our Community Has To Say</h5>
                <h6 className="text-center fs-6">All of our reviews are from varified Customers.</h6>

                <div className='text-bold fs-1 text-center fw-bold'>{ProductRating}</div>
                <div className='text-center'>
                    <Rating
                        initialRating={ProductRating}
                        emptySymbol="ratingEmpty fa-regular fa-star"
                        fullSymbol="ratingFull fa-solid fa-star"
                        readonly
                    /> <small>{NumberOfRaters}</small>
                </div>
            </div>

            <section className='d-flex align-items-center justify-content-between container'>

                <input onChange={(e) => handleReviewSearch(e)} className='form-control mx-2 mx-lg-0' type="text" placeholder='Search Reviews'
                    style={{ maxWidth: "300px" }} />


                <select onChange={(e) => handleReviewSort(e)} className='form-control mx-2 mx-lg-0 text-center'
                    style={{ maxWidth: "150px" }}>
                    <option value="-1">Sort By: Newest</option>
                    <option value="1">Sort By: Oldest</option>
                </select>

            </section>

            <section className='container'>

                {
                    loading === true ? <CustomSpinner /> :

                        reviews.length === 0 ? <h5 className='text-danger text-center my-5 fw-bold'>No Reviews Found</h5> :


                            reviews.slice(0, seeMorePagination).map(SingleReview => (
                                <ReviewCard
                                    SingleReview={SingleReview}
                                    key={SingleReview._id}>
                                </ReviewCard>
                            ))
                }

            </section>

            {
                showBtn && <section className="container py-5">
                    <div className='d-flex justify-content-between align-items-center'>
                        <hr size="5" className='orangehr' />
                        <button className='seeMoreBtn' onClick={seeMoreButtonHandle}>See More</button>
                        <hr size="5" className='orangehr' />
                    </div>
                </section>
            }

        </section >
    )
}

export default ReviewsSection