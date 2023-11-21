import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const Logo = (props) => {
  const { classes } = props;
  return (
    <div className={classes.logoWrapper}>
      <Typography variant="h6" color="inherit">
        BestLimited
      </Typography>
    </div>
  );
};

const styles = () => ({
  logoWrapper: {
    flex: 1,
  },
});

export default withStyles(styles)(Logo);
