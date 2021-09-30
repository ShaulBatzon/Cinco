import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {userService} from "../services/user.service";
export class SignUp extends React.Component {
  state = {
    fullname: "",
    Email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };


    //change the set state event target nama
    handleChange = (ev) => {
        var key = ev.target.id;
        let val = ev.target.value
        let obj  = {}
        obj[key] = val;
        this.setState(obj);
      };


      checkSigUp = (ev) => {
        ev.preventDefault();
        const {fullname,Email,username,password, confirmPassword} = this.state;
        if (password!==confirmPassword) throw 'password not match'; 
        try {
            userService.add({fullname, username,Email,password});
          this.setState({fullname:'',Email:'',username:'',password:'', confirmPassword:''});
        } catch (_err) {
          console.log(_err);
        }
      };
    
  render() {
    const paperStyle = {
      padding: "30px 20px",
      width: 300,
      margin: "20px auto",
    };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const marginTop = { marginTop: 5 };

    return (
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
          </Grid>
          <form onSubmit={this.checkSigUp}>
            <TextField
              fullWidth
              label=" Full Name"
              placeholder="Enter your name"
              value={this.state.fullname}
              onChange={this.handleChange}
              id="fullname"
             
            />
            <TextField
             fullWidth label="Email" 
             placeholder="Enter your email"     
             onChange={this.handleChange}
              type="email"
              id="Email"
             />

            <TextField
              fullWidth
              label="User Name"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username" 
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="password"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              id="confirmPassword"
              type="password"
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms"
            />
            <Button type="submit" variant="contained" color="primary">
              Sign up
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}
