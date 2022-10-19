import { combineReducers } from 'redux';
import { walletReducer } from './reducers/walletReducer';
import { loadingReducer } from './reducers/loadingReducer';
import { allProjectsReducer } from './reducers/allProjectsReducer';
import { invoicesReducer } from './reducers/invoicesReducer';

export const rootReducer = combineReducers({
  wallet: walletReducer,
  loading: loadingReducer,
  projects: allProjectsReducer,
  invoices: invoicesReducer,
});
