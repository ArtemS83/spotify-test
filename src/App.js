import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { getAccessToken } from 'redux/token/token-selectors';
import { redirectToSpotify, getHashParams } from 'utils/spotify/spotify';
import { accessTokenAction } from 'redux/token/token-actions';

import Button from '@mui/material/Button';
import Container from 'components/Container';
import AsideBar from 'components/AsideBar';
import Loader1 from 'components/Loader1';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);
const PlaylistPage = lazy(() =>
  import('pages/PlaylistPage' /* webpackChunkName: "playlist-page" */),
);

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const localSpotifyAccessToken = window.localStorage.getItem(
      'spotifyAccessToken',
    );

    if (localSpotifyAccessToken) {
      setAccessToken(localSpotifyAccessToken);
      setIsLogin(true);
      dispatch(accessTokenAction(localSpotifyAccessToken));
    } else {
      getForSpotifyAccessToken();
    }
  }, []);

  const getForSpotifyAccessToken = () => {
    const params = getHashParams();

    const accessTokenFromParams = params.access_token;
    if (!accessTokenFromParams) {
      setIsLogin(false);
      // setAccessToken('');
      return;
    }
    dispatch(accessTokenAction(accessTokenFromParams));
    setAccessToken(accessTokenFromParams);
    setIsLogin(true);
    window.localStorage.setItem('spotifyAccessToken', accessTokenFromParams);
  };

  return (
    <>
      {isLogin === true ? (
        <>
          <AsideBar />
          <Container>
            <Suspense
              fallback={
                // <div>Loading...</div>
                <Loader1 />
              }
            >
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route exact path="/playlist/:id" component={PlaylistPage} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </Container>
        </>
      ) : (
        <>
          <Button variant="contained">
            <a href={redirectToSpotify()}>Connect Spotify</a>
          </Button>
        </>
      )}
    </>
  );
};

export default App;
