import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
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

// TODO: get book cover
// curl https://www.googleapis.com/books/v1/volumes?q=intitle:atomic+habits+inauthor:james+clear
class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: getQuote() };
  }

  render() {
    const { classes } = this.props;
    const { quote } = this.state;

    return (
      <Layout>
        <Container className={classes.content}>
          <h1>Books</h1>
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
