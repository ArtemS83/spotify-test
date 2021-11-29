import { getPlaylists } from 'redux/playlists/playlists-selectors';
import { useSelector } from 'react-redux';
import PlaylistItem from '../PlaylistItem';
import styles from './Playlists.module.scss';

const Playlists = () => {
  const playlists = useSelector(getPlaylists);

  return (
    <ul className={styles.list}>
      {playlists.map(playlist => (
        <PlaylistItem key={playlist.id} id={playlist.id} />
      ))}
    </ul>
  );
};

export default Playlists;
