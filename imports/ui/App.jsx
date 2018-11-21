import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBarContainer from './AppBarContainer';
import ResponsiveDrawer from './ResponsiveDrawer';
import MainView from './MainView';

const styles = () => ({
  root: {
    display: 'flex',
  },
});

class App extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBarContainer handleDrawerToggle={this.handleDrawerToggle}/>
        <ResponsiveDrawer mobileOpen={this.state.mobileOpen} handleDrawerToggle={this.handleDrawerToggle}/>
        <MainView />
      </div>
    );
  }
}

export default withStyles(styles)(App);