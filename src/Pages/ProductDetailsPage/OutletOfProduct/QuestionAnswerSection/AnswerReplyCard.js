import React from 'react'

const AnswerReplyCard = (props) => {

    const { _id, AnswerId, UserId, UserName, UserPhotoUrl, Reply, Dates } = props.SingleAnswerReply;
    let date = new Date(Dates);

    return (
        <div className='AnswerReplyCard my-4 p-3 container' style={{ borderLeft: "2px solid #23dbde", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>

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


            <h6>{Reply}</h6>



        </div>
    )
}

export default AnswerReplyCard