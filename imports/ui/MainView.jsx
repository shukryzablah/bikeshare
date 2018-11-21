import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import BikePage from './BikePage';
import LogPage from './LogPage';
import RulesPage from './RulesPage';
import NotFoundPage from './NotFoundPage';

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
      <Switch>
        <Route exact path="/" component={BikePage} />
        <Route exact path="/bikes" component={BikePage} />
        <Route exact path="/log" component={LogPage} />
        <Route exact path="/rules" component={RulesPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </main>
  );
};

export default withStyles(styles)(MainView);