import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer from './playlists/playlists-reducer';
import tokenReducer from './token/token-reducer';

export const store = configureStore({
  reducer: {
    albums: playlistsReducer,
    token: tokenReducer,
  },
  // devTools: process.env.NODE_ENV === 'development',
});
