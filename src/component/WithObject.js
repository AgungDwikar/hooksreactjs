import React, { useState } from 'react';

function StateHooks() {
    const [details, setDetails] = useState({ counter: 0, name: '' });
    //make funtion for button pnclick
    function increeseCounter() {
        setDetails((prev) => ({
            ...prev,
            counter: prev.counter + 1,
        }));
    }

    console.log(details);

    return (
        <div>
            <input type='text' onChange={(event) => event.target.value} />
            <h1>
                {details.name} has clicked {details.counter} times!!!
            </h1>
            <button onClick={increeseCounter}>Increese</button>
        </div>
    );
}

export default StateHooks;
