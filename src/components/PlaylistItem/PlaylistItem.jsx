import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './PlaylistItem.module.scss';

const PlaylistItem = ({ playlist }) => {
  const { id, name, images } = playlist;
  const dispatch = useDispatch();
  const ImageUrl = images[0].url;

  return (
    <>
      <Link
        to={{
          pathname: `/playlist/${id}`,
        }}
      >
        <div className={styles.item}>
          <img src={ImageUrl} alt={name} width="60" height="60" />
          <h2>{name}</h2>
        </div>
      </Link>
    </>
  );
};

PlaylistItem.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default PlaylistItem;
