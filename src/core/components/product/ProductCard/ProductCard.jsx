import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Badge, Grid } from "@mui/material";
import ProductAddToCart from "./ProductAddToCart";
import { useState } from "react";
import { addToCart, toggleCart, getCartItems } from "core/actions/cart";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductPrice";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  const { classes, item, loading, addToCart, toggleCart, getCartItems } = props;
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(item.id, count)
        .then(() => {
          getCartItems().then(() => toggleCart(true));
          toast.success("Product has been added to cart");
        })
        .catch(() => {
          toast.error("Error occured, product has not been added to cart");
        });
    } else {
      toast.warning("At least 1 or more product can be added to cart");
    }
  };

  const handleChangeCount = (count) => {
    setCount(count);
  };

  const DiscountBadge = (price, originalPrice) => {
    return (
      price < originalPrice && (
        <Badge
          color="error"
          badgeContent={
            "%" + (100 - (price / originalPrice) * 100).toFixed(0) + " off"
          }
          className={classes.productDiscountBadge}
        ></Badge>
      )
    );
  };

  return (
    <Card className={classes.productCard}>
      {DiscountBadge(item.price, item.originalPrice)}
      <CardMedia
        component="img"
        alt={item.name}
        image={item.image}
        className={classes.cardMedia}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={9}>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.productName}
            >
              {item.name}
            </Typography>
            <ProductRating rating={item.rating} />
            <ProductPrice
              price={item.price}
              originalPrice={item.originalPrice}
            />
          </Grid>
          <Grid item xs={3}>
            <ProductAddToCart
              productId={item.id}
              onChangeCount={handleChangeCount}
            />
          </Grid>
        </Grid>
      </CardContent>
      {count > 0 && (
        <CardActions>
          <Button
            onClick={() => handleAddToCart()}
            variant="contained"
            color="error"
            disabled={loading}
          >
            Add To Cart
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

const styles = () => ({
  productCard: { position: "relative" },
  cardMedia: { background: "#efefef !important" },
  productName: { fontSize: "14px !important", fontWeight: "bold !important" },

  productDiscountBadge: {
    position: "absolute !important",
    left: "-15px",
    top: "30px",
    fontSize: 11,
    padding: "30px !important ",
  },
});

const mapStateToProps = (state) => {
  return {
    loading: state.cart.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productId, count) => dispatch(addToCart(productId, count)),
    toggleCart: (open) => dispatch(toggleCart(open)),
    getCartItems: () => dispatch(getCartItems()),
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductCard);
