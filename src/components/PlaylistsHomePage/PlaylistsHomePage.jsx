import { getPlaylists } from 'redux/playlists/playlists-selectors';
import { useSelector } from 'react-redux';
import PlaylistItemHomePage from '../PlaylistItemHomePage';
import styles from './PlaylistsHomePage.module.scss';

const PlaylistsHomePage = () => {
  const playlists = useSelector(getPlaylists);

  return (
    <ul className={styles.list}>
      {playlists.map(playlist => (
        <PlaylistItemHomePage key={playlist.id} playlist={playlist} />
      ))}
    </ul>
  );
};

export default PlaylistsHomePage;
