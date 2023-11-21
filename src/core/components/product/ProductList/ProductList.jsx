import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = (props) => {
  const { classes, data } = props;
  return (
    <>
      <Grid container spacing={2}>
        {data?.length > 0 ? (
          <>
            {data.map((product, idx) => (
              <Grid item md={3} sm={12} key={idx}>
                <ProductCard item={product} />
              </Grid>
            ))}
          </>
        ) : (
          <Grid item sm={12}>
            <Typography variant="h6" className={classes.notFound}>
              Product not found
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

const styles = (theme) => ({
  notFound: { fontStyle: "italic" },
});

export default withStyles(styles)(ProductList);
