import React from 'react'
import Rating from 'react-rating'

const ReviewCard = (props) => {

    const { ProductId, UserId, CustomerName, CustomerPhotoUrl, Title, Details, Rate, UpVote, DownVote, Dates } = props.SingleReview;
    let date = new Date(Dates);
    return (

        <section className='my-5'>

            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <img className='img-fluid rounded rounded-circle me-3' src={CustomerPhotoUrl || "https://i.ibb.co/L9TLhbm/Avater.jpg"} alt="N/A"
                        style={{
                            maxHeight: "40px",
                            maxWidth: "40px"
                        }}
                    />
                    <label>{CustomerName}</label>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <span className="text-muted">{`${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`}</span>

                    <sub className="text-muted">{`${date.getHours()}h:${(date.getMinutes())}m:${date.getSeconds()}s`}</sub>
                </div>
            </div>

            <div className='my-2'>
                <Rating
                    initialRating={Rate}
                    emptySymbol="ratingEmpty fa-regular fa-star"
                    fullSymbol="ratingFull fa-solid fa-star"
                    readonly
                /> <small>({Rate})</small>
            </div>

            <h5 className='fw-bold'>{Title}</h5>

            <div>
                <p className='text-dark'>
                    {Details}
                </p>
            </div>

            <div className='my-3'>

                <span className='text-warning fw-bold me-2'>Was this helpful?</span>
                <i class="fa-solid fa-circle-up"></i> <sub>{UpVote.length}</sub>
                <span className='fw-bold mx-2'>vote</span>
                <i class="fa-solid fa-circle-down"></i> <sub>{DownVote.length}</sub>

            </div>

            <hr />

        </section>

    )
}

export default ReviewCard