import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './PlaylistItemHomePage.module.scss';

const PlaylistItemHomePage = ({ playlist }) => {
  const { id, name, images } = playlist;
  const dispatch = useDispatch();
  const ImageUrl = images[0].url;
  const location = useLocation();

  return (
    <>
      {/* <li> */}
      <li className={styles.item}>
        <Link
          to={{
            pathname: `/playlist/${id}`,
            state: { from: location.pathname },
          }}
        >
          <img src={ImageUrl} alt={name} width="80" height="80" />
        </Link>
      </li>
    </>
  );
};

PlaylistItemHomePage.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default PlaylistItemHomePage;
