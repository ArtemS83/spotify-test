import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  getPlaylists,
  getIsLoadingSelector,
  getErrorSelector,
} from 'redux/playlists/playlists-selectors';
import { redirectToSpotify, getHashParams } from 'utils/spotify/spotify';
import { accessTokenAction } from 'redux/token/token-actions'; //
import { ErrorLoginAction } from 'redux/playlists/playlists-actions';
import styles from './App.module.scss';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import AsideBar from 'components/AsideBar';
import Divider from '@mui/material/Divider';
import Loader1 from 'components/Loader1';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);
const TracksPage = lazy(() =>
  import('pages/TracksPage' /* webpackChunkName: "tracks-page" */),
);

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(''); // 'hjkl;'
  const errorConnect = useSelector(getErrorSelector); // null

  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (errorConnect && !accessToken) {
  //     setIsLogin(false);
  //     setAccessToken('');
  //     dispatch(ErrorLoginAction(null));
  //     return;
  //   }
  // }, [errorConnect]);

  useEffect(() => {
    const localSpotifyAccessToken = window.localStorage.getItem(
      'spotifyAccessToken',
    );

    if (localSpotifyAccessToken && !errorConnect) {
      //&& !accessToken TODO:
      setAccessToken(localSpotifyAccessToken);
      setIsLogin(true);
      dispatch(accessTokenAction(localSpotifyAccessToken));
    } else {
      getForSpotifyAccessToken();
    }
  }, [accessToken, errorConnect]);

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
        <div className={styles.appBox}>
          <AsideBar />
          <Divider
            orientation="vertical"
            flexItem
            style={{
              marginLeft: '40px',
              borderColor: 'rgba(255, 255, 255, 0.18)',
            }}
          />
          <Suspense fallback={<Loader1 />}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route exact path="/playlist/:id" component={TracksPage} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </div>
      ) : (
        <>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{
              minHeight: '100vh',
            }}
          >
            <Button variant="contained" color="success" size="large">
              <a href={redirectToSpotify()} style={{ color: '#fff' }}>
                Connect Spotify
              </a>
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default App;
