import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"

export function Jsonassignment() {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((details) => setProduct(details));
    });
    return (<>
        <h1>PRODUCT DETAILS</h1><br></br>
        <div className="row">
            {product.map((value) => (
                <>
                    <div class="card col-lg-3">
                        <img src={value.image} class="card-img-top" />
                        <div class="card-body">
                            <h3 class="card-title">{value.title}</h3>
                            <p className="card-text">{value.description}</p>

                            <h2 class="card-price"><FontAwesomeIcon icon={faIndianRupeeSign} />{value.price}</h2>
                            <h5 className="card-rate">
                                <StarRatings
                                    rating={value.rating.rate}
                                    starDimension="20px"
                                    starSpacing="2px"
                                    starRatedColor="gold" />
                            </h5>
                            <Link to={`/display/${value.id}`} className="btn btn-primary">viewmore</Link>
                        </div>
                    </div>
                </>
            ))}
        </div>
    </>);
}
