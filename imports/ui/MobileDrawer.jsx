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

const MobileDrawer = (props) => {
  const { classes, handleDrawerToggle, theme, mobileOpen } = props;

  return (
    <Drawer
      container={props.container}
      variant="temporary"
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <DrawerContents/>
    </Drawer>
  );
};

export default withStyles(styles, { withTheme: true} )(MobileDrawer);