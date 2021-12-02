import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getAccessToken } from 'redux/token/token-selectors';
import {
  fetchPlaylistsRequest,
  fetchPlaylistsSuccess,
  fetchPlaylistsError,
} from './playlists-actions';

axios.defaults.baseURL = 'https://api.spotify.com/v1';
// axios.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`;

export const fetchPlaylists = token => async dispatch => {
  dispatch(fetchPlaylistsRequest());
  try {
    const { data } = await axios.get('/me/playlists?limit=8', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchPlaylistsSuccess(data.items));
    return data.items;
  } catch (error) {
    dispatch(fetchPlaylistsError(error.message));
  }
};
