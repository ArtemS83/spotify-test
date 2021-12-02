import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TracksItem from '../TracksItem';
import styles from './TracksList.module.scss';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const TracksList = ({ tracksData, nameAlbum, ImageUrl }) => {
  const location = useLocation();
  const history = useHistory();

  const track = tracksData[0]?.track;
  const { artists } = track;
  const nameArtist = artists[0].name;

  const hendlerGoBack = () => {
    history.push(location?.state?.from || '/');
  };

  return (
    <div className={styles.TracksListBox}>
      <div
        className={styles.TracksList}
        style={{
          color: '#fff',
          backgroundImage: `linear-gradient(89.96deg, #000424 0.03%, rgba(0, 0, 0, 0) 48.95%, #000424 99.96%), linear-gradient(180deg, rgba(21, 28, 82, 0) 0%, rgba(19, 21, 62, 0.85) 88.02%), url(${ImageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left 20% bottom 60%',
        }}
      >
        <IconButton
          color="inherit"
          aria-label="go back"
          size="large"
          style={{
            justifyContent: 'flex-start',
            marginLeft: '60px',
            width: '50px',
          }}
          onClick={hendlerGoBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        <div className={styles.TracksListText}>
          <h1>{nameAlbum}</h1>
          <h2>by {nameArtist}</h2>
        </div>
      </div>
      <ul className={styles.list}>
        {tracksData.map(({ track }) => (
          <TracksItem
            key={track.id}
            track={track}
            ImageUrl={ImageUrl}
            nameAlbum={nameAlbum}
          />
        ))}
      </ul>
    </div>
  );
};

export default TracksList;
