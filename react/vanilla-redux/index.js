import { createStore } from 'redux';

// DOM
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// ACTIONS NAME
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// ACTIONS CREATOR (actions function)
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0,
};

// reducer
function reducer(state = initialState, action) {
  // action fired depending on action.type
  switch(action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // immutability
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// store
const store = createStore(reducer);

const render = () => {
  const state = store.getState(); // load current state

  // toggling
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  // counter
  counter.innerText = state.counter;
};

render();

// subscribe
store.subscribe(render);

// dispatch
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
}

btnDecrease.onclick = () => {
  store.dispatch(decrease());
}
