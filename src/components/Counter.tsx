// src/components/Counter.tsx

"use client"

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store/index';
import { increment } from '../app/store/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;
