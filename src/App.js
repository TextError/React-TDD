import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import State from './components/state-counter/Counter';


const Home = () => <div data-testid='home'>Home page</div>
const Redux = () => <h1>Redux page</h1>
const NotFound = () => <div data-testid='not-found'>404</div>

const App = () => (
  <div>
    <nav data-testid="navbar">
      <Link data-testid="home-link" to="/">Home</Link>
      <Link data-testid="state-link" to="/state">State</Link>
      <Link data-testid="redux-link" to="/redux">Redux</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/state" component={State} />
      <Route exact path="/redux" component={Redux} />

      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;