import { createAction } from '@reduxjs/toolkit';

export const fetchPlaylistsRequest = createAction(
  'playlists/fetchPlaylistRequest',
);
export const fetchPlaylistsSuccess = createAction(
  'playlists/fetchPlaylistSuccess',
);
export const fetchPlaylistsError = createAction('playlists/fetchPlaylistError');

export const ErrorLoginAction = createAction('playlists/ErrorLoginAction');
