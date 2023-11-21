import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@mui/material/Badge";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = (props) => {
  const { classes } = props;
  return (
    <Toolbar className={classes.toolbarMain}>
      <Logo />
      <SearchBar />
      <Badge badgeContent={4} color="primary">
        <Avatar>
          <ShoppingCartIcon />
        </Avatar>
      </Badge>
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
