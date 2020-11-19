import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Counter from '../../../components/state-counter/Counter';

afterEach(cleanup);

describe('Check snapshot of the component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Counter />)
    
    expect(asFragment(<Counter />)).toMatchSnapshot()
   })
});

describe('Check for state change', () => {
  it('should increment the count', () => {
    const { getByTestId } = render(<Counter/>);
    userEvent.click(getByTestId('button-increment'));

    expect(getByTestId('count')).toHaveTextContent('1');
  });

  it('should decrement the count', () => {
    const { getByTestId } = render(<Counter/>);
    userEvent.click(getByTestId('button-decrement'));

    expect(getByTestId('count')).toHaveTextContent('-1');
  });
});

describe('Testing asynchronous actions', () => {
  it('Should increment the count after 1s', async () => {
    const { getByTestId } = render(<Counter />);
    userEvent.click(getByTestId('button-up-await'));
    
    await waitFor(() => expect(getByTestId('count')).toHaveTextContent('1'), { timeout: 1000 });
  });
})