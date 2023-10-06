import React, { useEffect, useState } from "react";

export function Fetchdata() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getall")
            .then(res => res.json())
            .then(details => setData(details))
    })
    return (
        <>
            {
                data.map((value, index) => (
                    <h1>{value.fname}</h1>
                ))
            }
        </>
    )
}