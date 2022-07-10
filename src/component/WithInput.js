import React, { useState } from 'react';

function StateHooks() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    //make funtion for button pnclick
    function increeseCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <input
                type='text'
                onChange={(event) => setName(event.target.value)}
            />
            <h1>
                {name} has clicked {counter} times!!!
            </h1>
            <button onClick={increeseCounter}>Increese</button>
        </div>
    );
}

export default StateHooks;
