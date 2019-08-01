import React from "react";
import { Link } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Logo from "../logo.svg";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TableComponent = props => {
  // // Delete client
  // onDeleteClick = () => {
  //   const { feed, firestore } = props;

  //   firestore.delete({ collection: "feeds", doc: feed.id });
  //   // .then(history.push("/"));
  // };

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  }))(TableRow);

  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    },
    generl: {
      fontWeight: 700
    },
    name: {
      color: "#6666ff",
      fontWeight: 700
    },
    link: {
      color: "#cc0000"
    }
  }));

  const { feeds } = props;
  const classes = useStyles();

  if (feeds) {
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.link}>
                  FEED NAME:
                </StyledTableCell>
                <StyledTableCell className={classes.name} align="right">
                  FEED URL:
                </StyledTableCell>
                <StyledTableCell align="right" className={classes.general}>
                  EDIT
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feeds.map(feed => (
                <StyledTableRow key={feed.id}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className={classes.name}
                  >
                    {feed.feedName}
                  </StyledTableCell>
                  <StyledTableCell align="right" className={classes.link}>
                    {feed.feedLink}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      to={`/edit/${feed.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-pencil-alt" />
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        {/* <Paper className="">
          <Table className="">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "#6666ff", fontWeight: 700 }}>
                  FEED NAME:
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "#cc0000", fontWeight: 700 }}
                >
                  FEED URL:
                </TableCell>
                <TableCell align="right" style={{ fontWeight: 700 }}>
                  EDIT
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feeds.map(feed => (
                <TableRow key={feed.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      color: "#cc0000",
                      fontWeight: 700,
                      letterSpacing: 1
                    }}
                  >
                    {feed.feedName}
                  </TableCell>
                  <TableCell style={{ color: "#6666ff" }} align="right">
                    {feed.feedLink}>
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      to={`/edit/${feed.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-pencil-alt" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper> */}
      </div>
    );
  } else {
    return (
      <div>
        <img src={Logo} alt="" className="App-logo" />
      </div>
    );
  }
};

export default compose(
  firestoreConnect([{ collection: "feeds" }]),
  connect((state, props) => ({
    feeds: state.firestore.ordered.feeds
  }))
)(TableComponent);
