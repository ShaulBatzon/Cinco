import React from "react";
// import { Link } from "react-router-dom";

export function NavBarGigPage(props) {
  return (
    <div className="navbar-gigpage gig-page-body">
      <nav className="navbar-links">
        <a href="#overview">Overview</a>
        <a href="#aboutSeller">About The Seller</a>
        <a href="#aboutSeller">Order Details</a>
        <a href="#recommendations">Reviews</a>
      </nav>
      <div className="icons-links">
        <button className="far fa-heart"></button>
        <button className="fas fa-share-alt"></button>
      </div>
    </div>
  );
}
