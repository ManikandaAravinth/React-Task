import React, { useState } from "react";

export function FruitsCounter() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(0);
    function hook() {
        setIncrement(increment + 1);
    }
    return (
        <>
            <div>
                <div className="fruit">
                    <h1> Bob ate <span className="spn">{count}</span>  Mangoes &{" "}
                        <span className="spn">{increment}</span>  Bananas{" "}</h1>
                    <div className="Fruitpart d-flex justify-content-center align-items-center">
                        <img className="mango" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkibiJ7skzIzr4M0LQOk_QGvDana7xtepsQ&usqp=CAU" />

                        <img className="banana" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86GaY9cUj0ilzGrNWtoiLLpIdQA1ss2gn9A&usqp=CAU" />
                    </div>
                    <div className="Fruitname d-flex justify-content-center align-items-center">
                        <span>
                            <button type="button" onClick={() => { setCount(count + 1) }} className="fbtn btn-outline-primary ms-5 mb-2">Mango</button>
                            <button type="button" onClick={hook} className="fbtn btn-outline-primary ms-5 mb-2">Banana</button>
                        </span>
                    </div>

                </div>
            </div>
        </>
    );
}