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

import { getAccessToken } from 'redux/token/token-selectors';

const AsideBar = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(getAccessToken);
  const playlists = useSelector(getPlaylists);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(fetchPlaylists(accessToken));
  }, []);

  return (
    <aside className={styles.AsideBar}>
      <h1>AsideBar</h1>
      <Playlists />
    </aside>
  );
};

export default AsideBar;
