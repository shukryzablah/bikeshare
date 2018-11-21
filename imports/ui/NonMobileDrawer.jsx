import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import DrawerContents from './DrawerContents';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
  },
});

const NonMobileDrawer = (props) => {
  const { classes } = props;

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      open
    >
      <DrawerContents/>
    </Drawer>
  );
};

export default withStyles(styles, { withTheme: true} )(NonMobileDrawer);