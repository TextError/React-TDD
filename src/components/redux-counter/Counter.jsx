import React from 'react';
import { connect } from 'react-redux';
import { Decrement, Increment } from '../../redux/actions/counter';

const Counter = ({ counter, Increment, Decrement }) => {

  const onIncrement = () => Increment();
  const onDecrement = () => Decrement();

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button data-testid="button-decrement" onClick={onDecrement}>down</button>
        <span data-testid="counter">{counter}</span>
        <button data-testid="button-increment" onClick={onIncrement}>up</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps, { Increment, Decrement })(Counter);