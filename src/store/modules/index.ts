import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { CombinedState } from 'redux';

import summaryData from './summaryData';

interface Action {
  payload: {};
  type: string;
}

const reducer = (state: CombinedState<any>, action: Action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({ summaryData })(state, action);
};
export default reducer;
