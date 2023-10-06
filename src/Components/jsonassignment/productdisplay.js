import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"

export function Productdisplay() {
    var { id } = useParams()
    const [display, setDisplay] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(res => res.json())
            .then(dat => setDisplay(dat))

    })
    return (
        <>
            <div className="container-fluid row">

                <div className="col-lg-6">
                    <img src={display.image} className="container-fluid" />
                </div>
                <div className="col-lg-6">
                    <h1>{display.title}</h1>
                    <p>{display.description}</p>
                    <h3><FontAwesomeIcon icon={faIndianRupeeSign} /> {display.price}</h3>
                </div>

            </div>

        </>
    );
}