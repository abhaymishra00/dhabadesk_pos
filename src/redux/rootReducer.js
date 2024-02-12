import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import outletReducer from './slices/outlet';

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

export const outletPersistConfig = {
  key: 'outlet',
  storage,
  keyPrefix: 'redux-',
};

const rootReducer = combineReducers({
  outlet: persistReducer(outletPersistConfig, outletReducer),
});

export default rootReducer;
