import React from "react";
import { Link } from 'react-router-dom';

export function NavBarGigPage(props) {
  return (
    <div className="gig-review">
      <nav>
        <ul>
          <li className="nav-overview">
            <a href="#overview">Overview</a>
          </li>
          <li className="nav-description">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="nav-aboutSeller">
            <a href="#aboutSeller">About The Seller</a>
          </li>
          <li className="nav-packegeTable">
            <a href="#aboutSeller">About The Seller</a>
          </li>
          <li className="nav-recommendations">
            <a href="#recommendations">Recommendations</a>
          </li>
        </ul>
      </nav>
      <button className="far fa-heart"></button>
    </div>
  );
}
