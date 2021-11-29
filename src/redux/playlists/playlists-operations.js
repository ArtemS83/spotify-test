import axios from 'axios';
import {
  fetchPlaylistsRequest,
  fetchPlaylistsSuccess,
  fetchPlaylistsError,
} from './playlists-actions';

require('dotenv').config();

axios.defaults.baseURL = 'https://api.spotify.com/v1'; // 'https://api.spotify.com/v1/me/playlists'
// axios.defaults.headers.common.Authorization = `Bearer ${process.env.BEARER_TOKEN}`;
axios.defaults.headers.common.Authorization = `Bearer BQDBIsMZi6eu43_H5KrNZ6j2IvDboG-EpV-C_rmpky-G5N9AfLSvnF685rK-BKbuPIpsLgyE8rS01SQvksTgBdsHGxnjhA4savjoDmghVmq_h7S63GE2p9S5bbymV-uI9QFzriOjI60GcItUPRn-D2aR-Lggv2wlbwS4UWQn0KpWcwMl`;

export const fetchPlaylists = () => dispatch => {
  dispatch(fetchPlaylistsRequest());
  axios
    .get('/me/playlists?limit=8')
    .then(({ data }) => {
      console.log(
        '🚀 ~ file: playlists-operations.js ~ line 17 ~ .then ~ items',
        data.items,
      );
      dispatch(fetchPlaylistsSuccess(data.items));
    })
    .catch(error => dispatch(fetchPlaylistsError(error.message)));
};
