import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
  const dispatch = useDispatch();

  return (
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
  );
};

export default App;
