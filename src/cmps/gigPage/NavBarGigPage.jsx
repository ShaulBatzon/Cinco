import React from "react";
import { Link } from 'react-router-dom';

export function NavBarGigPage(props) {
  return (
    <div className="navbar-gigpage" >
      <nav className="navbar-links">
          <div className="nav-overview">
            <a href="#overview">Overview</a>
          </div>
          <div className="nav-aboutSeller">
            <a href="#aboutSeller">About The Seller</a>
          </div>
          <div className="nav-packegeTable">
            <a href="#aboutSeller">Order Details</a>
          </div>
          <div className="nav-recommendations">
            <a href="#recommendations">Reviews</a>
          </div>
      </nav>
      <button className="far fa-heart"></button>
    </div>
  );
}
