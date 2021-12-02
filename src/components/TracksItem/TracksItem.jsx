import { useState, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './TracksItem.module.scss';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import IconButton from '@mui/material/IconButton';

const TracksItem = ({ track, ImageUrl, nameAlbum }) => {
  const { name } = track;

  return (
    <>
      <li className={styles.link}>
        <img src={ImageUrl} alt={nameAlbum} width="46" height="46" />
        <p className={styles.title}>{name}</p>
        <IconButton
          color="inherit"
          aria-label="play track"
          size="large"
          flexItem
          style={{
            justifyContent: 'flex-end',
            marginLeft: 'auto',
            transform: 'scale(1.8)',
          }}
          onClick={() => {
            console.log('Sorry! No play track!');
          }}
        >
          <ArrowRightSharpIcon />
        </IconButton>
      </li>
    </>
  );
};

TracksItem.propTypes = {
  track: PropTypes.object.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  nameAlbum: PropTypes.string.isRequired,
};

export default TracksItem;
