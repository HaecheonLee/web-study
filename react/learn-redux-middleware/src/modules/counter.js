import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest, select, throttle } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase()); // dispatch specific action

  const number = yield select(state => state.counter);  // state is state of store
  console.log(`Current number: ${number}`);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease()); // dispatch specific action
}

export function* counterSaga() {
  // first param: (n) seconds * 1000
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);

  // takeEvery: deals with coming-in actions
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);

  // takeLastest: cancel currently running tasks, and just perform lastest one
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1,
  },
  initialState,
);

export default counter;
