import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaylists } from 'redux/playlists/playlists-selectors';
import { getAccessToken } from 'redux/token/token-selectors';
import { fetchTracks } from 'utils/servise/fetchTracks';
import TracksList from 'components/TracksList';

const TracksPage = () => {
  const { id: idAlbum } = useParams();

  const playlists = useSelector(getPlaylists);
  const accessToken = useSelector(getAccessToken);

  const [tracksList, setTracksList] = useState([]);

  const dispatch = useDispatch();

  const album = playlists?.filter(item => item.id === idAlbum)[0];

  // const { name, tracks, images } = album;

  // const fetchTracks = async (url, token) => {
  //   const { data } = await axios.get(url, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return data.items;
  // };

  useEffect(() => {
    if (album) {
      fetchTracks(album?.tracks.href, accessToken).then(data =>
        setTracksList(data),
      );
    }
  }, [idAlbum, album]);

  return (
    <>
      {tracksList?.length > 0 && (
        <TracksList
          tracksData={tracksList}
          nameAlbum={album?.name}
          ImageUrl={album?.images[0].url}
          style={{ marginLeft: '56px' }}
        />
      )}
    </>
  );
};

export default TracksPage;
