import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const [playlists, setPlaylists] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
