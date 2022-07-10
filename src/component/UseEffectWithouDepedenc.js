import React, { useState, useEffect } from 'react';

function StateHooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} new mwssages !!!`;
    });

    return (
        <div>
            <h1>{count} new mwssages !!</h1>
            <button onClick={() => setCount(count + 1)}>Increese</button>
        </div>
    );
}

export default StateHooks;
