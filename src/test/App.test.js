import { } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from './utils/withRouter';

describe('Check snapshot of the component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(<App />) 
  
    expect(asFragment(<App />)).toMatchSnapshot();
  })

  it('should render the home page', () => {
    const { container } = renderWithRouter(<App />);

    expect(container.innerHTML).toMatch('Home page');
  });
})