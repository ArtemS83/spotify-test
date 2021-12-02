import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AsideBar.module.scss';
import Playlists from 'components/Playlists';
import {
  getPlaylists,
  getIsLoadingSelector,
} from 'redux/playlists/playlists-selectors';
import { fetchPlaylists } from 'redux/playlists/playlists-operations';

import { getAccessToken } from 'redux/token/token-selectors';

const AsideBar = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(getAccessToken);

  useEffect(() => {
    dispatch(fetchPlaylists(accessToken));
  }, [accessToken]);

  return (
    <>
      <div className={styles.AsideBar}>
        <Playlists />
      </div>
    </>
  );
};

export default AsideBar;
