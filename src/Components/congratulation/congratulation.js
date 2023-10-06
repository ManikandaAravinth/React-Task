import React from 'react';
export function Congratulation() {
    return (
        <>
            <section className='cus-Bg-Image min-vh-100 px-2 px-md-5 pt-3'>
                <h1 className='text-center'>Congratulations</h1>
                <div className='bg-body-secondary mx-5 py-5 text-center'>
                    <div className='py-4'>
                        <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' alt='noimg' />
                    </div>
                    <div className='px-2'>
                        <h2>Kiran V</h2>
                        <h4 className='py-2'>Vishnu Institute of Computer Education and Technology, Bhimavaram.</h4>
                    </div>
                    <div className='py-3'>
                        <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' alt='noimg'></img>
                    </div>
                </div>
            </section>
        </>
    );
}