import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { currencyFormat } from "core/helpers/utils";

const CardProduct = (props) => {
  const { item, classes, onDelete } = props;
  const handleDelete = (productId) => {
    onDelete(productId);
  };
  return (
    <ListItem disablePadding>
      <ListItemText
        className={`${classes.listItemText} ${classes.cartProductName}`}
        primary={item.name}
      />
      <ListItemText
        className={`${classes.listItemText} ${classes.cartProductQuantity}`}
        primary={"x " + item.quantity}
      />
      <ListItemText
        className={`${classes.listItemText} ${classes.cartProductPrice}`}
        primary={currencyFormat(item.price)}
      />
      <ListItemButton
        size="small"
        className={classes.cartProductDelButton}
        onClick={() => handleDelete(item.productId)}
      >
        <DeleteIcon fontSize="inherit" />
      </ListItemButton>
    </ListItem>
  );
};

const styles = () => ({
  cartProductName: {
    fontWeight: "bold !important",
    width: "100px",
    padding: "10px",
  },
  cartProductQuantity: {
    width: "40px",
    padding: "10px",
  },
  cartProductPrice: {
    width: "80px",
    padding: "10px",
    textAlign: "right",
  },
  listItemText: {
    "& span": {
      fontSize: "12px !important",
    },
  },
});

export default withStyles(styles)(CardProduct);
