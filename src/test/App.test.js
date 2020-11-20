import { renderWithRouter } from './utils/withRouter';
import userEvent from '@testing-library/user-event';
import App from '../App';

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