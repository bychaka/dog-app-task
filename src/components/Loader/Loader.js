import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Loader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <LinearProgress variant="query" color={'primary'} />
      </div>
    );
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);
