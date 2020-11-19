import React, { useState } from 'react';

const Counter = () => {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;

  const onIncrement = () => setState({ count: count+1 });
  const onDecrement = () => setState({ count: count-1 });

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button data-testid="button-decrement" onClick={onDecrement}>-</button>
        <span data-testid="count">{count}</span>
        <button data-testid="button-increment" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter;