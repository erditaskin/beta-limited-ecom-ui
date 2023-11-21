import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Rating } from "@mui/material";

const ProductRating = (props) => {
  const { rating, classes } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <Rating name="read-only" value={rating} readOnly size="small" />{" "}
      <Box className={classes.productRating}>({rating})</Box>
    </Box>
  );
};

const styles = () => ({
  productRating: { fontSize: "14px !important", color: "#AAA !important" },
});

export default withStyles(styles)(ProductRating);
