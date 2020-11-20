import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../../redux/reducers';

export const renderWithRedux = (
  component,
  {
    INITIAL_STATE,
    store = createStore(reducer, INITIAL_STATE, applyMiddleware(thunk)),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};