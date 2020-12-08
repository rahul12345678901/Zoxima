import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

const { default: CustomerPage } = require("./components/customers");
const { default: HomePage } = require("./components/homePage");
const { default: LoginPage } = require("./components/LoginPage");
const { default: Sidebar } = require("./components/Sidebar");

function Wrapper(props) {
  const { Login_Status } = props;
  return (
    <div>
      {Login_Status.success ? (
        <Router>
          <Grid container>
            <Grid item md={2}>
              <Sidebar />
            </Grid>
            <Grid item md={10}>
              <Header />
              <Route exact path={"/"} component={HomePage} />
              <Route exact path={"/customer"} component={CustomerPage} />
            </Grid>
          </Grid>
        </Router>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    Login_Status: state.Login_Status,
  };
}

export default connect(mapStateToProps)(Wrapper);
