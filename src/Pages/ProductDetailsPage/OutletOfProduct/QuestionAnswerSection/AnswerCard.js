import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import CustomSpinner from '../../../../Components/Spinner/CustomSpinner';
import useAuth from '../../../../Context/Authentication/useAuth';
import AnswerReplyListApi from '../../../../Hooks/AnswerReplyListApi';
import AnswerReplyCard from './AnswerReplyCard';

const AnswerCard = (props) => {


    const { _id, ProductId, UserId, UserName, UserPhotoUrl, Answer, UpVote, DownVote, Dates } = props.SingleAnswer;
    let date = new Date(Dates);
    const { user } = useAuth()
    const [answerReplies, AnsReplyLoading] = AnswerReplyListApi(_id);
    const [toggleReply, setToggleReply] = useState(false)
    const [showAnsReplyBtn, setShowAnsReplyBtn] = useState(true);
    const [seeMoreAnsReplyPagination, setSeeMoreAnsReplyPagination] = useState(1);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const ReplyHandler = () => {
        toggleReply ? setToggleReply(false) : setToggleReply(true)

    };

    const seeMoreAnswerReplyButtonHandle = () => {
        setSeeMoreAnsReplyPagination(prevValue => prevValue + 5);
        seeMoreAnsReplyPagination >= answerReplies.length ? setShowAnsReplyBtn(false) : setShowAnsReplyBtn(true);
    }

    const onReplySubmit = data => {
        data = {
            ...data,
            ...{
                AnswerId: _id,
                UserName: user.displayName,
                UserId: user.uid,
                UserPhotoUrl: user.photoURL,
                Dates: Date.now()
            }
        }

        Swal.fire({
            title: 'Do you want to submit this reply?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Submit'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.post(`${process.env.REACT_APP_HEROKU_URL}/answer-replaies`, data)
                    .then(res => {
                        if (res.data.Dates) {
                            Swal.fire(
                                'Submitted!',
                                'Your reply has been submitted.',
                                'success'
                            )
                            reset();
                            ReplyHandler();
                        }
                        else {
                            Swal.fire("Sorry!", "Some Error occure", "error");
                        }
                    });
            }
        })

    };



    return (
        <section className='container AnswerCard my-4 p-3' style={{ borderLeft: "2px solid #f7e005", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>

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


            <h6>{Answer}</h6>

            <div className='my-3'>

                <i class="fa-solid fa-circle-up"></i> <sub>{UpVote.length}</sub>
                <span className='fw-bold mx-2'>vote</span>
                <i class="fa-solid fa-circle-down"></i> <sub>{DownVote.length}</sub>

                <span onClick={ReplyHandler} className='ms-2'> <i class="fa-solid fa-reply"></i> Reply <sub>({answerReplies?.length})</sub></span>
            </div>

            {toggleReply && <>

                {
                    user.email ? <>
                        <form onSubmit={handleSubmit(onReplySubmit)}>
                            <textarea   {...register("Reply", { required: true })} placeholder='Reply here' className='form-control' rows="5"></textarea>
                            {errors.Reply && <sub className='text-danger'>This field is required</sub>}
                            <input className='btn btn-info my-3' type="submit" />
                        </form>
                    </>
                        :
                        <>
                            <h5 className='text-center my-3'>You need to login for reply <Link to={`/signin`}>Login here</Link> </h5>
                        </>
                }

            </>}


            <section className='container'>

                {
                    AnsReplyLoading === true ? <CustomSpinner /> :

                        answerReplies.length === 0 ? "" :


                            answerReplies.slice(0, seeMoreAnsReplyPagination).map(SingleAnswerReply => (
                                <AnswerReplyCard
                                    SingleAnswerReply={SingleAnswerReply}
                                    key={SingleAnswerReply._id}>
                                </AnswerReplyCard>
                            ))
                }

            </section>

            {
                showAnsReplyBtn && <span className='text-primary' onClick={seeMoreAnswerReplyButtonHandle}>See More Reply</span>

            }


        </section>
    )
}

export default AnswerCard
