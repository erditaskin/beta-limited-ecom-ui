import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header/Header";

const BaseLayout = (props) => {
  const { classes, children } = props;

  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

const styles = (theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(3) * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  main: {
    padding: theme.spacing(2),
  },
});

export default withStyles(styles)(BaseLayout);
