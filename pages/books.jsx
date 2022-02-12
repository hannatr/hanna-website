import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Layout from '../components/layout';
import data from '../shared/clips.json';

const styles = (theme) => ({
  content: {
    paddingTop: theme.spacing(3),
  },
});

function getQuote() {
  return data[Math.floor(Math.random() * data.length)];
}

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: getQuote() };
    // curl https://www.googleapis.com/books/v1/volumes?q=intitle:atomic+habits+inauthor:james+clear
    // this.bookImageTemp = 'http://books.google.com/books/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api';
  }

  render() {
    const { classes } = this.props;
    const { quote } = this.state;

    return (
      <Layout>
        <Container className={classes.content}>
          <h1>Books</h1>
          <p>
            Check out my&nbsp;
            <Link href="https://www.goodreads.com/hannatr">Goodeads profile</Link>
            &nbsp;for my opinion on books and what I am currently reading. Here are some of my
            favorite book quotes!
          </p>
          <Grid container spacing={3}>
            {/* <Grid item xs={2}>
              <Box className={classes.profile}>
                <Image src={this.bookImageTemp} width={128} height={193} layout="intrinsic" />
              </Box>
            </Grid> */}
            <Grid item xs={10}>
              <h2>{ quote.title }</h2>
              <p>
                by
                {' '}
                { quote.author }
              </p>
              <FormatQuoteIcon />
              <p>{ quote.content }</p>
              <FormatQuoteIcon />
              <p>
                <Button variant="contained" color="primary" onClick={() => { this.setState({ quote: getQuote() }); }}>
                  Another Quote
                </Button>
              </p>
            </Grid>
          </Grid>

        </Container>
      </Layout>
    );
  }
}

export default withStyles(styles)(Books);

Books.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};
