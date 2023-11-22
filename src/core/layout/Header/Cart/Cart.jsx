import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import { toggleCart, getCartItems, deleteCartItem } from "core/actions/cart";
import { Box } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import CartProduct from "./CartProduct";
import ConfirmDialog from "core/components/ConfirmDialog/ConfirmDialog";

const Cart = (props) => {
  const { classes, items, isOpen, toggleCart, getCartItems, deleteCartItem } =
    props;
  const [anchorEl, setAnchorEl] = useState(null);
  const cartRef = useRef();
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [productWillBeDeleted, setProductWillBeDeleted] = useState(null);

  const handleOnDelete = (productId) => {
    setConfirmDialogOpen(true);
    setProductWillBeDeleted(productId);
  };

  const handleDeleteProductCancel = () => {
    setConfirmDialogOpen(false);
  };

  const handleDeleteProductConfirm = () => {
    deleteCartItem(productWillBeDeleted);
  };

  const handleCartToggle = () => {
    toggleCart(!isOpen);
    setAnchorEl(!isOpen ? cartRef.current : null);
  };

  useEffect(() => {
    if (isOpen) {
      setAnchorEl(cartRef.current);
      getCartItems();
    }
  }, [isOpen, getCartItems]);

  return (
    <Box>
      <Badge
        badgeContent={items?.length > 0 ? items?.length : 0}
        color="error"
        className={classes.cartBadge}
      >
        <Avatar onClick={() => handleCartToggle()} ref={cartRef}>
          <ShoppingCartIcon />
        </Avatar>
      </Badge>
      {anchorEl && (
        <Popper
          open={!!anchorEl}
          anchorEl={cartRef.current}
          placement="bottom-start"
          transition
          disablePortal
          className={classes.cartPopper}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <Box>
                  <List
                    subheader={
                      <ListSubheader component="div" id="cart-summary">
                        Cart Summary
                      </ListSubheader>
                    }
                  >
                    {items.length > 0 ? (
                      <>
                        {items.map((item, idx) => (
                          <CartProduct
                            item={item}
                            key={idx}
                            onDelete={handleOnDelete}
                          />
                        ))}
                        <ConfirmDialog
                          open={confirmDialogOpen}
                          title="Delete product"
                          context="Product will be removed from your cart. Proceed?"
                          onClose={handleDeleteProductCancel}
                          onConfirm={handleDeleteProductConfirm}
                        />
                      </>
                    ) : (
                      <ListItem disablePadding>
                        <ListItemText
                          className={classes.listItemText}
                          secondary="Cart empty"
                        />
                      </ListItem>
                    )}
                  </List>
                </Box>
              </Paper>
            </Grow>
          )}
        </Popper>
      )}
    </Box>
  );
};

const styles = (theme) => ({
  cartBadge: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
    },
  },
  cartPopper: {
    zIndex: "999",
  },
  listItemText: {
    "& span": {
      fontSize: "12px !important",
    },
  },
});

const mapStateToProps = (state) => {
  return {
    loading: state.cart.loading,
    items: state.cart.items,
    isOpen: state.cart.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: (open) => dispatch(toggleCart(open)),
    getCartItems: () => dispatch(getCartItems()),
    deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Cart);