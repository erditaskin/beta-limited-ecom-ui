import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const Logo = (props) => {
  const { classes } = props;
  return (
    <div className={classes.logoWrapper}>
      <Typography variant="h6" className={classes.logoCapital}>
        L
      </Typography>
      <Typography variant="h6" className={classes.logoText}>
        BestLimited
      </Typography>
    </div>
  );
};

const styles = (theme) => ({
  logoWrapper: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  logoCapital: {
    color: "#fff",
    display: "inline-block",
    paddingRight: "10px",
    fontSize: 30,
    fontWeight: 700,
    background:
      "linear-gradient(90deg, #03045e 10%, #023e8a 40%, #00b4d8 70%);  -webkit-background-clip: text; -webkit-text-stroke: 12px transparent;",
  },
  logoText: {
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});

export default withStyles(styles)(Logo);
