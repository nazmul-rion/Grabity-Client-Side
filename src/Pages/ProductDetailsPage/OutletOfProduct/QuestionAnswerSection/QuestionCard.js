import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import CustomSpinner from '../../../../Components/Spinner/CustomSpinner';
import useAuth from '../../../../Context/Authentication/useAuth';
import AnswerListApi from '../../../../Hooks/AnswerListApi';
import AnswerCard from './AnswerCard';

const QuestionCard = (props) => {

    const { _id, ProductId, UserId, UserName, UserPhotoUrl, Question, UpVote, DownVote, Dates } = props.SingleQuestion;
    let date = new Date(Dates);

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const { user } = useAuth()

    const [answers, AnsLoading] = AnswerListApi(_id);


    const [showAnsBtn, setShowAnsBtn] = useState(true);
    const [seeMoreAnsPagination, setSeeMoreAnsPagination] = useState(1);

    const seeMoreAnswerButtonHandle = () => {
        setSeeMoreAnsPagination(prevValue => prevValue + 8);
        seeMoreAnsPagination > answers.length ? setShowAnsBtn(false) : setShowAnsBtn(true);
    }

    const [toggleAnswer, setToggleAnswer] = useState(false)

    const AnswerHandler = () => {
        toggleAnswer ? setToggleAnswer(false) : setToggleAnswer(true)

    }

    const onAnswerSubmit = data => {
        data = {
            ...data,
            ...{
                QuestionId: _id,
                UserName: user.displayName,
                UserId: user.uid,
                UserPhotoUrl: user.photoURL,
            }
        }

        Swal.fire({
            title: 'Do you want to submit this answer?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Submit'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.post(`${process.env.REACT_APP_HEROKU_URL}/answers`, data)
                    .then(res => {
                        if (res.data.Dates) {
                            Swal.fire(
                                'Submitted!',
                                'Your answer has been submitted.',
                                'success'
                            )
                            reset();
                            AnswerHandler();
                        }
                        else {
                            Swal.fire("Sorry!", "Some Error occure", "error");
                        }
                    });
            }
        })

    };

    return (
        <div>

            <div className="QuestionCard my-4 p-3" style={{ borderLeft: "2px solid #4b0085", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }}>

                <div className="d-flex justify-content-between align-items-center my-3">
                    <div>
                        <img className='img-fluid rounded rounded-circle me-3' src={UserPhotoUrl || "https://i.ibb.co/L9TLhbm/Avater.jpg"} alt="N/A"
                            style={{
                                maxHeight: "40px",
                                maxWidth: "40px"
                            }}
                        />
                        <label>{UserName}</label>
                    </div>

                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <span className="text-muted">{`${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`}</span>

                        <sub className="text-muted">{`${date.getHours()}h:${(date.getMinutes())}m:${date.getSeconds()}s`}</sub>
                    </div>
                </div>


                <h5>{Question}</h5>

                <div className='my-3'>

                    <i class="fa-solid fa-circle-up"></i> <sub>{UpVote.length}</sub>
                    <span className='fw-bold mx-2'>vote</span>
                    <i class="fa-solid fa-circle-down"></i> <sub>{DownVote.length}</sub>

                    <span onClick={AnswerHandler} className='ms-2'> <i class="fa-solid fa-reply"></i> Answer <sub>({answers.length})</sub></span>
                </div>

                {toggleAnswer && <>

                    {
                        user.email ? <>
                            <form onSubmit={handleSubmit(onAnswerSubmit)}>
                                <textarea   {...register("Answer", { required: true })} placeholder='Answer here' className='form-control' rows="5"></textarea>
                                {errors.Answer && <sub className='text-danger'>This field is required</sub>}
                                <input className='btn btn-info my-3' type="submit" />
                            </form>
                        </>
                            :
                            <>
                                <h5 className='text-center my-3'>You need to login for replying this question <Link to={`/signin`}>Login here</Link> </h5>
                            </>
                    }

                </>}


                <section className='container'>

                    {
                        AnsLoading === true ? <CustomSpinner /> :

                            answers.length === 0 ? <h5 className='text-danger text-center my-5 fw-bold'>No Answer Found</h5> :


                                answers.slice(0, seeMoreAnsPagination).map(SingleAnswer => (
                                    <AnswerCard
                                        SingleAnswer={SingleAnswer}
                                        key={SingleAnswer._id}>
                                    </AnswerCard>
                                ))
                    }

                </section>

                {
                    showAnsBtn && <span className='text-primary' onClick={seeMoreAnswerButtonHandle}>See More Answers</span>

                }

            </div>

        </div>
    )
}

export default QuestionCard