import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { renderRoutes } from '../startup/client/routes';


const drawerWidth = 240;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const MainView = (props) => {
  const { classes } = props

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {renderRoutes()}
    </main>
  );
};

export default withStyles(styles)(MainView);