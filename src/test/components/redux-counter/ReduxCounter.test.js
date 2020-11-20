import React from 'react';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../../utils/withRedux';

import Counter from '../../../components/redux-counter/Counter';

afterEach(cleanup);

describe('Check snapshot of the component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = renderWithRedux(<Counter />)
    
    expect(asFragment(<Counter />)).toMatchSnapshot()
   })
});

describe('Check for Redux state change', () => {
  it('should increment the count', () => {
    const { getByTestId } = renderWithRedux(<Counter />);
    userEvent.click(getByTestId('button-increment'));

    expect(getByTestId('counter')).toHaveTextContent('1');
  });

  it('should decrement the count', () => {
    const { getByTestId } = renderWithRedux(<Counter />, { INITIAL_STATE: { counter: { counter: 4 }}});
    userEvent.click(getByTestId('button-decrement'));

    expect(getByTestId('counter')).toHaveTextContent('3');
  })
});