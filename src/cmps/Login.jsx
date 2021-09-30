import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { userService } from "../services/user.service";
import { createSelectorHook } from "react-redux";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  checkSignIn = (ev) => {
    const { username, password } = this.state;
    ev.preventDefault();
    try {
      userService.checkValidLogin(username, password);
      this.setState({username:'',password:''});
    } catch (_err) {
      console.log(_err);
    }
  };

  //change the set state event target nama
  handleChange = (ev) => {
    if (ev.target.id === "username")
      this.setState({ username: ev.target.value });
    else 
    this.setState({ password: ev.target.value });
  };

  
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="login-container">
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{
              margin: "30px",
              backgroundColor: "#1dbf73",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{width: "auto"}}>
            Sign in
          </Typography>
          <form
            style={{
              width: "100%",
              marginTop: "40px",
            }}
            noValidate
          >
            <TextField
              value={this.state.username}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              style={{
                margin: "40px 0",
                backgroundColor: "#1dbf73",
                height:"55px"
              }}
              onClick={(ev) => {
                this.checkSignIn(ev);
              }}
            >
              Continue
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Not a member yet? Join now"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        </div>
      </Container>
    );
  }
}
