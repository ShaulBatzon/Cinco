import React from "react";
// import { connect } from 'react-redux'
import { Link, NavLink } from "react-router-dom";

import routes from "../routes";

// import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

export class AppHeaderR extends React.Component {
  state = { 
    isOpen: false,
    isSideBarOpen: false
  };

  menuClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleSideBar = () => {
    this.setState({isSideBarOpen: !this.state.isSideBarOpen})
  }

  render() {
    return (
      <div className="page-navbar content-container">
        <Link to={"/"} style={{ color: "white" }} className="navbar-logo">
          Cinco
        </Link>
        <nav
          className={`navbar-links ${this.state.isOpen ? "open" : "closed"} ${this.state.isSideBarOpen ? 'side-bar-open' : ''}`}
          onMouseLeave={() => this.setState({ isOpen: false , isSideBarOpen: false})}
        >
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
        <div className={`icon ${this.state.isSideBarOpen ? 'none' : ''}`} onClick={()=>this.toggleSideBar()}>
          <i className="fas fa-th-large"></i>
        </div>
      </div>
    );
  }
}
