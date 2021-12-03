import { getPlaylists } from 'redux/playlists/playlists-selectors';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styles from './PlaylistsHomePageMU.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const PlaylistsHomePageMU = () => {
  const playlists = useSelector(getPlaylists);
  const location = useLocation();

  return (
    <>
      <Container className={styles.list}>
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 10 }}>
          {playlists.map((playlist, i) => (
            <Grid
              item
              key={playlist.id}
              xs={12}
              sm={6}
              // md={3}
              md={i === 0 ? 4 : 2}
              className={styles.item}
              style={{ position: i === 0 && 'relative' }}
            >
              <Link
                to={{
                  pathname: `/playlist/${playlist.id}`,
                  state: { from: location.pathname },
                }}
              >
                <Card sx={{ maxWidth: 360 }} className={styles.cardDiv}>
                  <CardMedia
                    component="img"
                    image={playlist?.images[0]?.url}
                    alt={playlist?.name}
                  />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PlaylistsHomePageMU;
