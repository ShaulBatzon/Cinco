import React from "react";
// import { Link } from "react-router-dom";

export function NavBarByer() {
  return (
    <div className="navbar-gigpage gig-page-body">
      <nav className="navbar-links">
        <a href="#">Dashboard</a>
        <a href="#">Buying</a>
        <a href="#">Messges</a>
        <a href="#">Wish List</a>
      </nav>
      <div className="icons-links">
        <button className="far fa-heart"></button>
        <button className="fas fa-share-alt"></button>
      </div>
    </div>
  );
}
