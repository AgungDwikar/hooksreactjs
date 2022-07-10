import React, { useState } from 'react';

function StateHooks() {
    const [counter, setCounter] = useState(0);

    //make funtion for button pnclick
    function increeseCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={increeseCounter}>Increese</button>
        </div>
    );
}

export default StateHooks;
