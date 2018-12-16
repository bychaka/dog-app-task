import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const styles = {
  card: {
    width: 345,
    margin: 15,
  },
  media: {
    objectFit: 'cover',
  },
  card_title: {
    textTransform: 'capitalize',
  },
};

class DogArticle extends Component {
  render() {
    const { classes } = this.props;
    const breedName = this.props.data.breed;
    const breedImageUrl = this.props.data.imageUrl;
    return (
      <div className="dog-article">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={breedName}
              className={classes.media}
              height="200"
              image={breedImageUrl}
              title={breedName}
            />
            <CardContent>
              <Typography
                className={classes.card_title}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {breedName}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              component={Link}
              to={{ pathname: `/breeds/${breedName}` }}
              size="small"
              color="primary"
            >
              More photos
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

DogArticle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DogArticle);
