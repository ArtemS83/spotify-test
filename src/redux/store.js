import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer from './playlists/playlists-reducer';

export const store = configureStore({
  reducer: {
    albums: playlistsReducer,
  },
  // devTools: process.env.NODE_ENV === 'development',
});
