import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Profileimg from "../assets/6.png";
import RefreshIcon from "@material-ui/icons/Refresh";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#FFFF" }}>
        <Toolbar variant="dense">
          <Grid container>
            <Grid md={12}>
              <Grid md={2} style={{ float: "right" }}>
                <img src={Profileimg} />
              </Grid>
              <Grid md={1} style={{ float: "right" }}>
                <span style={{ color: "gray", marginTop: "5px", fontSize: 18 }}>
                  Profile <ArrowDropDownIcon />
                </span>
              </Grid>
              <Grid md={2} style={{ float: "right", marginRight: 40 }}>
                <RefreshIcon style={{ color: "gray", marginTop: 15 }} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
