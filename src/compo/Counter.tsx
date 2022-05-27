import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState(null);
    
    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h2>This is a counter</h2>
            <p>{counter}</p>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;