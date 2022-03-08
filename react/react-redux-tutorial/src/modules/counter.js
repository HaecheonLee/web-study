// // action type (module name/action name)
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';
//
// // action creator
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
//
// const initialState = {
//   number: 0,
// };
//
// // reducer
// function counter(state = initialState, action) {
//   switch(action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
//
// export default counter;

import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

// reducer
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
