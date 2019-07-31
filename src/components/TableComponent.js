import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.info,
    fontWeight: 650,
    fontSize: 14
  },
  body: {
    fontSize: 12,
    padding: 10,
    margin: 7
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
    width: "99%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  textOne: {
    color: "#1e90ff"
  },
  textTwo: {
    color: "#d60000"
  },
  strong: {
    fontWeight: 800,
    letterSpacing: 2,
    color: "#d60000"
  },
  light: {
    letterSpacing: 1,
    color: "#1e90ff"
  }
}));

const TableComponent = props => {
  const classes = useStyles();
  const { feeds } = props;
  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.textOne} align="left">
                SAVED FEEDS:
              </StyledTableCell>
              <StyledTableCell className={classes.textTwo} align="right">
                FEEDS URL:
              </StyledTableCell>
              <StyledTableCell className={classes.textTwo} align="center">
                <i className="fas fa-pencil-alt" />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feeds.map(feed => (
              <StyledTableRow key={feed.id}>
                <StyledTableCell align="left" className={classes.strong}>
                  {feed.feed_name}
                </StyledTableCell>
                <StyledTableCell align="right" className={classes.light}>
                  {feed.feed_url}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default compose(
  firestoreConnect([{ collection: "feeds" }]),
  connect((state, props) => ({
    feeds: state.firestore.ordered.feeds
  }))
)(TableComponent);
