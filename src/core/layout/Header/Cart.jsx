import * as React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";

const Cart = (props) => {
  const { classes } = props;
  return (
    <Badge badgeContent={4} color="error" className={classes.cartBadge}>
      <Avatar>
        <ShoppingCartIcon />
      </Avatar>
    </Badge>
  );
};

const styles = (theme) => ({
  cartBadge: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
    },
  },
});

export default withStyles(styles)(Cart);
