import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Counter from '../../../components/state-counter/Counter';

afterEach(cleanup);

describe('Check snapshot of the component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Counter />)
    
    expect(asFragment(<Counter />)).toMatchSnapshot()
   })
});