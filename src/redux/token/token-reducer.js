import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { accessTokenAction } from './token-actions';

const accessToken = createReducer('', {
  [accessTokenAction]: (_, action) => action.payload,
});

export default combineReducers({
  accessToken,
});
