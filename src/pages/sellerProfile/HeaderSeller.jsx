import React from "react";
import { Link } from "react-router-dom";

export class HeaderSeller extends React.Component {
  render() {
    return (
      <div>
        <nav className="seller-navbar-links">
          <ul className="tabs flex">
            <li className="active selected">
              <a className="clean-link" href="/sellerProfile/dashboard">
                Dashboard
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/messages">
                Messages
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/orders">
                Orders
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/gigs">
                Gigs
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/analytics">
                Analytics
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/earnings">
                Earnings
              </a>
            </li>
            <li className="selected">
              <Link to="/sellerProfile/gigs/addNewGig">
                <button>create a new gig</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}