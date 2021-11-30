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

export const fetchPlaylists = token => dispatch => {
  dispatch(fetchPlaylistsRequest());
  axios
    .get('/me/playlists?limit=8', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      console.log(
        '🚀 ~ file: playlists-operations.js ~ line 17 ~ .then ~ items',
        data.items,
      );
      dispatch(fetchPlaylistsSuccess(data.items));
    })
    .catch(error => dispatch(fetchPlaylistsError(error.message)));
};
