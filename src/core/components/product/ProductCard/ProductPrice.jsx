import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { currencyFormat } from "core/helpers/utils";

const ProductPrice = (props) => {
  const { price, originalPrice, classes } = props;

  return (
    price &&
    originalPrice && (
      <Box sx={{ display: "flex" }}>
        <Typography gutterBottom className={classes.productPrice}>
          {currencyFormat(price)}
        </Typography>
        {originalPrice && originalPrice > 0 && (
          <Typography
            gutterBottom
            className={`${classes.productPrice} ${classes.productOriginalPrice}`}
          >
            {currencyFormat(originalPrice)}
          </Typography>
        )}
      </Box>
    )
  );
};

const styles = () => ({
  productPrice: {
    fontSize: "16px !important",
    fontWeight: "bold !important",
    color: "#c24b5a !important",
    paddingTop: 10,
    paddingRight: 10,
  },
  productOriginalPrice: {
    color: "#babbbf !important",
    textDecoration: "line-through; !important",
    paddingRight: 0,
  },
});

export default withStyles(styles)(ProductPrice);
