import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ProductAddToCart = (props) => {
  const { classes, onChangeCount } = props;
  const [count, setCount] = useState(0);

  const changeCount = (type) => {
    setCount((prev) => (type === "increase" ? prev + 1 : prev - 1));
  };

  useEffect(() => {
    onChangeCount(count);
  }, [count, onChangeCount]);

  return (
    <ButtonGroup orientation="vertical" sx={{ float: "right" }}>
      <Button
        className={`${classes.countButton} ${classes.reduceButton}`}
        sx={{ visibility: count > 0 ? "visible" : "hidden" }}
        onClick={() => changeCount("decrease")}
      >
        <RemoveIcon className={classes.countButtonIcon} />
      </Button>
      <Box sx={{ visibility: count > 0 ? "visible" : "hidden" }}>
        <Typography className={classes.countText}>{count}</Typography>
      </Box>
      <Button
        className={classes.countButton}
        onClick={() => changeCount("increase")}
      >
        <AddIcon className={classes.countButtonIcon} />
      </Button>
    </ButtonGroup>
  );
};

const styles = (theme) => ({
  countButton: {
    border: "1px solid #c24b5a !important;",
    borderRadius: "5px !important",
    color: "#c24b5a !important",
    padding: "5px 2px !important",
  },
  countButtonIcon: {
    fontSize: "12px !important",
  },
  countText: {
    fontSize: "14px !important",
    fontWeight: "bold !important",
    textAlign: "center",
    color: "#c24b5a !important",
  },
});

export default withStyles(styles)(ProductAddToCart);
