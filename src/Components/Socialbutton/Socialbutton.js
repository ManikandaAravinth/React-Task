import React from "react";
export function Socialbutton() {
    return (
        <>
            {/* ---------Social Buttons--------- */}

            <div className='bgImage-Button m-0 min-vh-100 w-100 row d-flex justify-content-center align-items-center'>
                <div className='col-12 text-center'>
                    <h1 className='text-white socialButton_Heading fw-bold'>Social Buttons</h1>
                    <div className='mx--5 d-flex justify-content-center row'>
                        <div className='col-7 col-sm-3 col-md-2 col-lg-1 m-2 rounded-2 bg-warning'>
                            <button className='btn text-white'>Like</button>
                        </div>
                        <div className='col-7 col-sm-3 col-md-2 col-lg-1 m-2  rounded-2 bg-white button_Comment'>
                            <button className='btn text-black'>Comment</button>
                        </div>
                        <div className='col-7 col-sm-3 col-md-2 col-lg-1 m-2 rounded-2 bg-info'>
                            <button className='btn text-white'>Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
