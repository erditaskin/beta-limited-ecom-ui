import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { withStyles } from "@material-ui/core/styles";

const SearchBar = (props) => {
  const { classes } = props;
  return (
    <Paper component="form" className={classes.paper}>
      <InputBase className={classes.inputBase} placeholder="Search Products" />
      <IconButton type="button" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

const styles = (theme) => ({
  paper: {
    padding: "2px 8px",
    display: "flex",
    alignItems: "center",
    width: "auto",
    flex: 2,
    marginRight: theme.spacing(2),
  },
  inputBase: {
    marginLeft: 1,
    flex: 1,
  },
  iconButton: {
    padding: "10px",
  },
});

export default withStyles(styles)(SearchBar);
