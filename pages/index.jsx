import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
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
