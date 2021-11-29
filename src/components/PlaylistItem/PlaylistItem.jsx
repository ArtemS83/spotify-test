import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './PlaylistItem.module.scss';

const PlaylistItem = ({ playlist }) => {
  const { id, name, images } = playlist;
  const dispatch = useDispatch();

  return (
    <>
      <Link
        to={{
          pathname: `/playlist/${id}`,
        }}
      >
        <div className={styles.item}>
          <img src={images[0].url} alt="name" width="60" height="60" url />
          <h2>{name}</h2>
        </div>
      </Link>
    </>
  );
};

PlaylistItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
};

export default PlaylistItem;
