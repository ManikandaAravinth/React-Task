import React from "react";
import heart from './heart.jpg';
export function Thankyou() {
    return (
        <>
            <div className="feedback container-fluid ">
                <div className="feedbackbody bg-white">
                    <div className="heartdiv">
                        <img className="thankyouimg d-flex" src={heart} />
                        <h1>Thank You!</h1>

                        <p>We will use your feedback to improve our Customer support<br></br> performance.</p>
                    </div>

                </div>
            </div>
        </>
    );
}