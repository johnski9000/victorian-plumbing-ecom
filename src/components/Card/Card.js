import React from "react";
import HalfRating from "../Rating/Rating";
import "./Card.modules.css"

const Card = (props) => {
    // console.log(props)
    const review_whole = props.data.averageRating;

    return (
        <div className='card'>
            <div className='card_image'>
                <img src={props.data.image.url} alt={props.data.image.attributes.imageAltText} />
            </div>
            <div className="card_info">
                <div className="card_title">{props.data.productName}<img src="https://i8.amplience.net/i/jpl/favourite-e6bcda6616cf16dca362f22d39f1d9be" alt="" className="favourite"/></div>
                <div className="card_bottom">
                    <div className="card_price">
                         £{props.data.price.priceIncTax}</div>
                    <div className="stock_card">
                        {/* {props.data.stockStatus.status} */}
                        <img src="https://i8.amplience.net/i/jpl/check-1-c38d74598c0b3e67b3ab2e7d5b55e5a5" alt="in stock" />
                        In Stock
                        </div>
                    <div className="reviews_card">
                        <HalfRating notPrecise={review_whole}
                        //  precision={review_decimal}
                         />
                        ({props.data.reviewsCount})</div>
                </div>
            </div>
        </div>
    );
};

export default Card;