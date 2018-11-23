import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HistoryIcon from '@material-ui/icons/History';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
})

const DrawerContents = (props) => {
  const { classes } = props

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/bikes">
          <ListItemIcon>
            <DirectionsBikeIcon />
          </ListItemIcon>
          <ListItemText primary={"Bikes"} />
        </ListItem>
        <ListItem button component={Link} to="/log">
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={"Log"} />
        </ListItem>
        <ListItem button component={Link} to="/rules">
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText primary={"Rules"} />
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(styles, {withTheme:true})(DrawerContents);