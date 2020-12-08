import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Login } from "../redux/actions";
import { connect } from "react-redux";

const loginStyle = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],

    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(4, 0, 5),
    backgroundColor: "#bd110cbf",
  },
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: "",
      password: "",
    };
  }
  handleUserName = (event) => {
    this.setState({
      mobile: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = () => {
    this.props.Login(this.state);
  };
  render() {
    const { classes, Login_Status } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome back ! Please login to your account
            </Typography>

            <TextField
              type={"number"}
              //   variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="UserName"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.mobile}
              onChange={this.handleUserName}
            />
            <TextField
              //   variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
            <Button
              className="loginbtn"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={this.handleLogin}
            >
              Sign In
            </Button>
            <p style={{ color: "red" }}>
              {!Login_Status.success && Login_Status.message
                ? Login_Status.message
                : null}
            </p>
          </div>
          <Box mt={5} style={{ textAlign: "center" }}>
            <h5> Term of use Privacy Policy</h5>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    Login_Status: state.Login_Status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Login: (credentials) => Login(credentials, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(loginStyle)(LoginPage));
