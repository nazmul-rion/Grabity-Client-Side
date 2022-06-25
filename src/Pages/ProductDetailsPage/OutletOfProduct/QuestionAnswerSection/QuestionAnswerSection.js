import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import CustomSpinner from '../../../../Components/Spinner/CustomSpinner';
import useAuth from '../../../../Context/Authentication/useAuth';
import QuestionListAPI from '../../../../Hooks/QuestionListAPI';
import QuestionCard from './QuestionCard';

const QuestionAnswerSection = () => {

    const { user, loading } = useAuth();
    const location = useLocation();
    const { ProductID } = location.state;

    const [QuestionSort, setQuestionSort] = useState("-1");
    const [QuestionSearch, setQuestionSearch] = useState("");
    const [questions] = QuestionListAPI(ProductID, QuestionSearch, QuestionSort);

    const [showQsnBtn, setShowQsnBtn] = useState(true);
    const [seeMorePagination, setSeeMorePagination] = useState(8);

    const seeMoreQuestionButtonHandle = () => {
        setSeeMorePagination(prevValue => prevValue + 8);
        seeMorePagination > questions.length ? setShowQsnBtn(false) : setShowQsnBtn(true);
    }



    const handleQuestionSort = (e) => {
        setQuestionSort(e.target.value)
    }

    const handleQuestionSearch = (e) => {
        setQuestionSearch(e.target.value)
    }


    return (
        <section className='container my-3'>

            <h5 className='text-center fw-bold '>Want To Know Something About This Product OR How To Use It?</h5>
            <h5 className='text-center fw-bold '>Ask The Community</h5>


            {
                user.email ?
                    <>
                        <div className="d-flex justify-content-between align-items-center my-3">

                            <img height="40" width="40" className='rounded rounded-circle me-2' src={user.photoURL} alt="User Photo" />

                            <input placeholder='What would you like to Know about this product?' className='form-control ms-2' type="text" />

                        </div>
                    </>
                    :
                    <>
                        <h5 className='text-center my-3'>You need to login for posting any question <Link to={`/signin`}>Login here</Link> </h5>
                    </>
            }



            <section className='d-flex align-items-center justify-content-between my-4'>

                <input onChange={(e) => handleQuestionSearch(e)} className='form-control mx-2 mx-lg-0' type="text" placeholder='Search Question'
                    style={{ maxWidth: "300px" }} />


                <select onChange={(e) => handleQuestionSort(e)} className='form-control mx-2 mx-lg-0 text-center'
                    style={{ maxWidth: "150px" }}>
                    <option value="-1">Sort By: Newest</option>
                    <option value="1">Sort By: Oldest</option>
                </select>

            </section>



            <section className=''>

                {
                    loading === true ? <CustomSpinner /> :

                        questions.length === 0 ? <h5 className='text-danger text-center my-5 fw-bold'>No Q&amp;A Found</h5> :


                            questions.slice(0, seeMorePagination).map(SingleQuestion => (
                                <QuestionCard
                                    SingleQuestion={SingleQuestion}
                                    key={SingleQuestion._id}>
                                </QuestionCard>
                            ))
                }

            </section>

            {
                showQsnBtn && <section className="container py-5">
                    <div className='d-flex justify-content-between align-items-center'>
                        <hr size="5" className='orangehr' />
                        <button className='seeMoreBtn' onClick={seeMoreQuestionButtonHandle}>See More</button>
                        <hr size="5" className='orangehr' />
                    </div>
                </section>
            }






        </section>
    )
}

export default QuestionAnswerSection