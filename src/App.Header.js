import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const AppHeader = props => (
  <AppBar
    position="fixed"
    className={clsx(props.appclass.appBar, {
      [props.appclass.appBarShift]: props.open
    })}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        edge="start"
        className={clsx(
          props.appclass.menuButton,
          props.open && props.appclass.hide
        )}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Persistent drawer
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
