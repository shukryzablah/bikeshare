import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  counter: {
    display: 'inline-block',
    padding: theme.spacing.unit * 3
  }
});

const CounterDisplay = (props) => {
  const { classes, numVariant, textVariant } = props;

  return (
    <Paper className={classes.container}>
      <Typography variant={numVariant} className={classes.counter}>
        {props.count}
      </Typography>
      <Typography variant={textVariant} className={classes.counter}>
        bikes available
      </Typography>
    </Paper>
  );
};

export default withStyles(styles, { withTheme: true })(CounterDisplay);