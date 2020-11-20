import { cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './utils/withRouter';

import App from '../App';

afterEach(cleanup);

describe('Check snapshot of the component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(<App />) 
  
    expect(asFragment(<App />)).toMatchSnapshot();
  })

  it('should render the home page', () => {
    const { container } = renderWithRouter(<App />);

    expect(container.innerHTML).toMatch('Home page');
  });
});

describe('Check for router change', () => {
  it('should change and render the state page', () => {
    const { getByTestId } = renderWithRouter(<App />);
    userEvent.click(getByTestId('state-link'));

    expect(getByTestId('count')).toHaveTextContent('0');
  });
});

describe('Check for bad route', () => {
  it('should shows 404 page', () => {
    const { getByTestId } = renderWithRouter(<App />, { route: '/some/bad/route'});

    expect(getByTestId('not-found')).toBeInTheDocument();
  });
});