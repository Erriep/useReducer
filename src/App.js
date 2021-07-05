import React from 'react';
import './styles.css';
import {
  INCREMENT,
  DECREMENT,
  STEPINCREMENT,
  STEPDECREMENT,
} from './counter-init.js';
import reducer from './count-reduc.js';
const initialState = { count: 0, step: 1 };

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className='App'>
      <h1>Counter with useReducer</h1>
      <h1>Count : {state.count}</h1>
      <h1>Step : {state.step}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      <button onClick={() => dispatch({ type: STEPINCREMENT })}>pas +</button>
      <button onClick={() => dispatch({ type: STEPDECREMENT })}>pas -</button>
    </div>
  );
}
