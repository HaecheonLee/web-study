import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <div>
        <h3>useState</h3>
        <p>
          The current counter's value: {value}
        </p>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
      <div>
        <h3>useReducer</h3>
        <p>
           The current value: <b>{state.value}</b>
        </p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
