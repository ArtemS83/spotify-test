import { useState, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './PlaylistItem.module.scss';

const PlaylistItem = ({ playlist }) => {
  const { id, name, images } = playlist;
  const location = useLocation();
  const dispatch = useDispatch();
  const ImageUrl = images[0]?.url;

  return (
    <>
      <li className={styles.link}>
        <NavLink
          className={styles.item}
          activeClassName={styles.activeLink}
          to={{
            pathname: `/playlist/${id}`,
            state: { from: location.pathname },
          }}
        >
          <img src={ImageUrl} alt={name} width="46" height="46" />
          <p className={styles.title}>{name}</p>
        </NavLink>
      </li>
    </>
  );
};

PlaylistItem.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default PlaylistItem;
//tracks:
// href: "https://api.spotify.com/v1/playlists/2lZSPWX60KWL8ERh3p2Ytt/tracks"
