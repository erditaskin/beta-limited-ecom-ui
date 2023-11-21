import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { withStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const SearchBar = (props) => {
  const { classes } = props;
  const [searchText, setSearchText] = useState("");
  let history = useHistory();

  let location = useLocation();
  useEffect(() => {
    const searchText = location?.pathname;
    if (typeof searchText === "string") {
      setSearchText(searchText.replace(/search/g, "").replace(/\//g, ""));
    }
  }, [location]);

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    if (searchText.length > 2) {
      history.push("/search/" + searchText);
    }
  };

  return (
    <form onSubmit={submitSearch} className={classes.searchForm}>
      <Paper className={classes.paper}>
        <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.inputBase}
          placeholder="Search Products"
          onChange={updateSearchText}
          value={searchText}
          id="search-text"
        />
        <Button type="submit" className={classes.searchButton}>
          Search
        </Button>
      </Paper>
    </form>
  );
};

const styles = (theme) => ({
  searchForm: {
    display: "flex",
    flexGrow: 4,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
    },
  },
  paper: {
    padding: "2px 8px",
    display: "flex",
    flex: 1,
    alignItems: "center",
    width: "auto",
    borderRadius: "30px !important",
    position: "relative",
  },
  inputAdornment: {
    marginRight: theme.spacing(1),
  },
  inputBase: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchButton: {
    backgroundColor: "#c24b5a !important",
    borderRadius: "0 20px 20px 0 !important",
    color: "#FFF !important",
    fontWeigth: "bold !important",
    position: "absolute !important",
    right: 0,
    height: "100% !important",
    padding: "5px 20px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "5px !important",
    },
  },
});

export default withStyles(styles)(SearchBar);
