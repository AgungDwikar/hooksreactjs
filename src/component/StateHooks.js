import React, { useState } from 'react';

function StateHooks() {
    const array = useState(0);
    const counter = array[0];
    //how to changhe value
    const setCounter = array[1];
    //make funtion for button pnclick
    function increeseCounter() {
        setCounter(counter + 1);
    }
    console.log(array);
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={increeseCounter}>Increese</button>
        </div>
    );
}

export default StateHooks;
