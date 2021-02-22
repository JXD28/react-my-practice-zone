//手写useState
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../App';

let _state = [];
let index = 0;

function myUseState(initialState) {
    let currentIndex = index;

    _state[currentIndex] =
        _state[currentIndex] === undefined
            ? initialState
            : _state[currentIndex];

    const setState = (newValue) => {
        _state[currentIndex] = newValue; //通过index来区分每个组件中的state
        render(); //重新渲染
    };

    index++;

    return [_state[currentIndex], setState];
}

const render = () => {
    console.log('render');
    index = 0;
    ReactDOM.render(<App />, document.getElementById('root'));
};

export { myUseState };
