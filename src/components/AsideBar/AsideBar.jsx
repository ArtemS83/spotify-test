import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AsideBar.module.scss';
import Playlists from 'components/Playlists';
import Notification from 'components/Notification';
import {
  getPlaylists,
  getIsLoadingSelector,
} from 'redux/playlists/playlists-selectors';
import { fetchPlaylists } from 'redux/playlists/playlists-operations';

const AsideBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  const playlists = useSelector(getPlaylists);
  const isLoading = useSelector(getIsLoadingSelector);

  return (
    <aside className={styles.AsideBar}>
      <h1>AsideBar</h1>
      {playlists.length > 0 ? (
        <>
          <Playlists />
        </>
      ) : (
        <Notification message="No Playlists" />
      )}
    </aside>
  );
};

export default AsideBar;
