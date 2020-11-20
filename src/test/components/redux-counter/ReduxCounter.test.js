import React from 'react';
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