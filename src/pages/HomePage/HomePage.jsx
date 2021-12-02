import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PlaylistsHomePage from 'components/PlaylistsHomePage';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <PlaylistsHomePage />
    </>
  );
};

export default HomePage;
