import {
  INCREMENT,
  DECREMENT,
  STEPINCREMENT,
  STEPDECREMENT,
} from './counter-init';

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + state.step };
    case DECREMENT:
      return { ...state, count: state.count - state.step };
    case STEPINCREMENT:
      return { ...state, step: state.step + 1 };
    case STEPDECREMENT:
      return { ...state, step: state.step - 1 };

    default:
      return state;
  }
}
export default reducer;
