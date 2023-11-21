import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { SwitchThemeButton } from "core/components/SwitchThemeButton/SwitchThemeButton";
import Cart from "./Cart";

const Header = (props) => {
  const { classes } = props;
  return (
    <Toolbar className={classes.toolbarMain}>
      <Logo />
      <SearchBar />
      <Cart />
      <SwitchThemeButton />
    </Toolbar>
  );
};

const styles = (theme) => ({
  toolbarMain: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(2),
    justifyContent: "space-between",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
  },
});

export default withStyles(styles)(Header);
