import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import State from './components/state-counter/Counter';


const Home = () => <h1>Home page</h1>
const Redux = () => <h1>Redux page</h1>
const NotFound = () => <h1>404</h1>

const App = () => {
  return (
    <Router>
      <nav data-testid="navbar">
        <Link data-testid="home-link" to="/">Home</Link>
        <Link data-testid="state-link" to="/state">State</Link>
        <Link data-testid="redux-link" to="/redux">Redux</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/state" component={State} />
        <Route exact path="/redux" component={Redux} />

        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;