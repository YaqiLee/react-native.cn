/**
 * Created by Yun on 2015-11-28.
 */
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import fetchDataReducer from './modules/fetchData';
import contentReducer from './modules/content';
import casesReducer from './modules/cases';
import docIndexReducer from './modules/docIndex.js';

export default combineReducers({
  router: routerStateReducer,
  fetchData: fetchDataReducer,
  content: contentReducer,
  cases: casesReducer,
  docIndex: docIndexReducer,
});
