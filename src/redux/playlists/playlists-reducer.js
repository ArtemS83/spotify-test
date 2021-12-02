import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchPlaylistsRequest,
  fetchPlaylistsSuccess,
  fetchPlaylistsError,
  ErrorLoginAction,
} from './playlists-actions';

const initialState = [];

const items = createReducer(initialState, {
  [fetchPlaylistsSuccess]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchPlaylistsRequest]: () => true,
  [fetchPlaylistsSuccess]: () => false,
  [fetchPlaylistsError]: () => false,
});

const error = createReducer(null, {
  [fetchPlaylistsError]: (_, { payload }) => payload,
  [ErrorLoginAction]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  error,
});
