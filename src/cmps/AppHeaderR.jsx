import React from "react";
// import { connect } from 'react-redux'
import { Link, NavLink } from "react-router-dom";

import routes from "../routes";

// import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

export class AppHeaderR extends React.Component {
  state = {isOpen: false}

  menuClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
};

  render() {
    return (
      <div className="page-navbar content-container">
        <Link to={"/"} style={{ color: "white" }} className="navbar-logo">
          Cinco
        </Link>
        <nav className={`navbar-links ${this.state.isOpen ? 'open' : 'closed'}`} onMouseLeave={()=>this.setState({isOpen:false})}>
          {routes.map((route) => (
            <NavLink
              style={{ color: "white" }}
              className="navbar-links-items"
              exact
              key={route.path}
              to={route.path}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
          <div className={`hamburger ${this.state.isOpen ? '' : 'closed'}`} onClick={this.menuClick}></div> 
      </div>
    );
  }
}
