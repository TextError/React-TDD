import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      {/* <PersistGate persistor={persistor}>
      </PersistGate> */}
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();