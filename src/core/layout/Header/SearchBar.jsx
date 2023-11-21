import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = (props) => {
  const { classes } = props;
  const [searchText, setSearchText] = useState("");
  let history = useHistory();

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const submitSearch = () => {
    console.log(searchText);
    if (searchText.length > 2) {
      history.push("/search/" + searchText);
    }
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={submitSearch}>
        <InputBase
          className={classes.inputBase}
          placeholder="Search Products"
          onChange={updateSearchText}
        />
        <IconButton type="submit" className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
      </form>
    </Paper>
  );
};

const styles = (theme) => ({
  paper: {
    padding: "2px 8px",
    display: "flex",
    alignItems: "center",
    width: "auto",
    flexGrow: 4,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
    },
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
