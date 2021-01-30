import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '80%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box mt={10}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="/IMG-1402.jpg"
              title="Image title"
            />
          </Card>
          <Box mt={4}>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hi, I&apos;m Tim. I&apos;m a software engineer who enjoys technology,
              engineering management, personal finance, and sports. Welcome to my website.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
