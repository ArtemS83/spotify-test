import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PlaylistsHomePage from 'components/PlaylistsHomePage';
import PlaylistsHomePageMU from 'components/PlaylistsHomePageMU';
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <PlaylistsHomePageMU />
      {/* <PlaylistsHomePage /> */}
    </>
  );
};

export default HomePage;
