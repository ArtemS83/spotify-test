import axios from 'axios';

export const fetchTracks = async (url, token) => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.items;
};
