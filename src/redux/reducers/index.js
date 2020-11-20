import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import counter from './counter';
import error from './error';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['counter', 'error']
// };

export default combineReducers({
  counter,
  error
});


// export default persistReducer(persistConfig, rootReducer);