import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import MobileDrawer from './MobileDrawer';
import NonMobileDrawer from './NonMobileDrawer';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
});


const ResponsiveDrawer = (props) => {
  const { classes, handleDrawerToggle, mobileOpen } = props

  return (
    <nav className={classes.drawer}>
      <Hidden xsDown implementation="css">
        <NonMobileDrawer />
      </Hidden>
      <Hidden smUp implementation="css">
        <MobileDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
      </Hidden>
    </nav>
  );
};

export default withStyles(styles, { withTheme: true} )(ResponsiveDrawer);