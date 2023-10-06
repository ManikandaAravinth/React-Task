import React from "react";
import sad from './sad.jpg';
import none from "./none.jpg";
import happy from './happy.jpg';
import { Link } from "react-router-dom";

export function Feedback() {
    return (
        <>
            <div className="feedback container-fluid ">
                <div className="feedbackbody bg-white">
                    <h1>How satisfied are you with our <br></br>
                        customer support performance?</h1>
                    <div className="imgdiv" >
                        <Link to='/Thankyou'><img className="feedbackimg" src={sad} /></Link>
                        <Link to='/Thankyou'><img className="feedbackimg" src={none} /></Link>
                        <Link to='/Thankyou'><img className="feedbackimg" src={happy} /></Link>
                    </div>

                </div>
            </div>


        </>
    );
}