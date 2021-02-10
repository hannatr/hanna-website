import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Layout from '../components/layout';

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: theme.spacing(3),
  },
  profile: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Layout>
      <Container className={classes.content}>
        <Box className={classes.profile}>
          <Image src="/IMG-1402.jpg" alt="Image title" width={589} height={550} layout="intrinsic" />
        </Box>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Hi, I&apos;m Tim. I&apos;m a software engineer who enjoys technology,
          engineering management, personal finance, and sports. Welcome to my website.
        </Typography>
      </Container>
    </Layout>
  );
}
