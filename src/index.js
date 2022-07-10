import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StateHooks from './component/StateHooks';
import StateHooks1 from './component/StateHooks1';
import WithInput from './component/WithInput';
import WithObject from './component/WithObject';
import WithouthDep from './component/UseEffectWithouDepedenc';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <App/>
    // <StateHooks />
    // <Stat
    // <WithInput />
    <WithouthDep />
);
