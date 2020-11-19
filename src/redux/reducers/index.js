import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counter from './counter';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter']
};

export const rootReducer = combineReducers({
  counter
});


export default persistReducer(persistConfig, rootReducer);