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

  const playlists = useSelector(getPlaylists);
  // const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [dispatch]);

  return (
    <div className={styles.AsideBar}>
      {playlists.length > 0 ? (
        <>
          <Playlists />
        </>
      ) : (
        <Notification message="No Playlists" />
      )}
    </div>
  );
};

export default AsideBar;
