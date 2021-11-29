import axios from 'axios';
import {
  fetchPlaylistsRequest,
  fetchPlaylistsSuccess,
  fetchPlaylistsError,
} from './playlists-actions';
require('dotenv').config();

axios.defaults.baseURL = 'https://api.spotify.com/v1'; // 'https://api.spotify.com/v1/me/playlists'
axios.defaults.headers.common.Authorization = `Bearer ${process.env.Bearer_TOKEN}`;

export const fetchPlaylists = () => dispatch => {
  dispatch(fetchPlaylistsRequest());
  axios
    .get('/me/playlists?limit=8')
    .then(({ data }) => dispatch(fetchPlaylistsSuccess(data)))
    .catch(error => dispatch(fetchPlaylistsError(error.message)));
};
