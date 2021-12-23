import React from "react";
// import { connect } from 'react-redux'
import { Link, NavLink } from "react-router-dom";
import routes from "../routes";

// import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

export class AppHeaderW extends React.Component {
  state = {
    search: "",
    isChack: false,
  };

  handleChange = (ev) => {
    let val = ev.target.value;
    this.setState({ search: val });
  };

  filter = () => {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("filterBy")) {
      let param = searchParams.get("filterBy");
      return param;
    }
  };

  toogle = () => {
    this.setState({ isChack: !this.state.isChack });
  };

  submitFrom = (ev) => {
    console.log('submit');
    ev.preventDefault();
    window.location.href = `/explore/?filterBy=${this.state.search}`;
    this.state.search = ""
  };
  render() {
    return (
      <div className="page-navbar-white">
      <div className="nav-container content-container home-layout">
        <div className="nav-container-logo-sreah">
          <Link to={"/"} className="navbar-logo">
            Cinco
          </Link>
        </div>
        <div className="app-nav-wrapper">
          <nav className="navbar-links">
            {routes.map((route) => (
              <NavLink
                className="navbar-links-items "
                exact
                key={route.path}
                to={route.path}
              >
                {route.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="header-form-search-bar-wrapper">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="header-form-search-bar-icon"
          >
            <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
          </svg>
          <input
            value={this.filter()}
            type="text"
            placeholder="Find Services"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={(event) => this.submitFrom(event)}>
            Search
          </button>
        </div>
        {/* <GigFilter onChangeFilter={onChangeFilter}/> */}
        <div className="icon">
          <i className="fas fa-th-large"></i>
        </div>
      </div>
    </div>
    );
  }
}
