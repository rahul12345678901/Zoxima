import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import companyLogo from "../assets/logo.jpg";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#D3D3D3",
    height: "100vh",
  },
}));

function Sidebar(props) {
  const classes = useStyles();

  return (
    <Grid>
      <Grid md={12}>
        <AppBar position="static" style={{ backgroundColor: "#FFFF" }}>
          <Toolbar variant="dense">
            <img src={companyLogo} style={{ width: 70, height: 40 }} />
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={() => props.history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => props.history.push("/customer")}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Invoices" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Scheme Claims" />
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
export default withRouter(Sidebar);
