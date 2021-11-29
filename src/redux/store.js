import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import playlistsReducer from './playlists/playlists-reducer';

// const authPersistConfig = {
//   key: 'token',
//   version: 1,
//   storage,
//   whitelist: ['token'],
// };

const store = configureStore({
  reducer: {
    albums: playlistsReducer,
    // auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor }; // eslint-disable-line
