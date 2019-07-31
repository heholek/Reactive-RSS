import React from "react";
import RSS_LOGO from "../rss.png";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontSize: "2rem",
    padding: "0 5px",
    marginBottm: ".5rem",
    textDecoration: "none",
    "&:hover": {
      color: "red",
      textDecoration: "none"
    }
  },
  links: {
    flexGrow: 1,
    fontsize: "1rem",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "red",
      textDecoration: "none"
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    // <Fragment>

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.title}>
              <img
                style={{
                  float: "left",
                  height: "60px",
                  width: "60px",
                  marginRight: "10px"
                }}
                src={RSS_LOGO}
                alt="Reactive RSS"
              />{" "}
              <span className="">Reactive RSS</span>
            </Link>
          </Typography>
          <Link to="/add" className={classes.links}>
            Add Feed
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
