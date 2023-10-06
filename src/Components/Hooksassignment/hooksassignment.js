import React from 'react';
import { useState } from 'react';

export function Hooks() {
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
    };
    const delte = () => {
        setCount(count - 1);
    };

    return (
        <div class="count bg-info">
            <h1 class="count1">{count}</h1>
            <button onClick={add}>+</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
            <button onClick={delte}>-</button>
        </div>
    );
}

// export default Hooks;