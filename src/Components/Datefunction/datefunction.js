import React, { useState } from 'react';

export function Datefunction() {
    const [date, setDate] = useState('')
    function getDate() {
        var selectedDate = document.getElementById("getDate").value
        var date = new Date(selectedDate)
        date.setDate(date.getDate() + 90)

        var getMyDate = date.getDate()
        var getMyMonth = date.getMonth() + 1
        var getMyYear = date.getFullYear()
        setDate(getMyDate + "/" + getMyMonth + "/" + getMyYear)
    }
    return (
        <>
            <div className='datefun'>
                <label>Select Date: <input type="date" id="getDate" />
                    <input type="button" onClick={getDate} value="Submit" />
                    <h1>{date}</h1>
                </label>
                <p></p>
            </div>
        </>
    );
}

