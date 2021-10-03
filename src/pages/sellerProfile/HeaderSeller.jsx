import React from "react";
import { Link } from "react-router-dom";

export class HeaderSeller extends React.Component {
    render() {
        return (
            <div >
                <Link to={"/sellerProfile"} className="navbar-logo">
                    Cinco
                </Link>
                <nav className="seller-navbar-links">
                    <ul className="tabs flex">
                        <li className="active selected"><a className="clean-link" href="/dashboard">Dashboard</a></li>
                        <li className="selected"><a className="clean-link" href="/messages">Messages</a></li>
                        <li className="selected"><a className="clean-link" href="/orders">Orders</a></li>
                        <li className="selected"><a className="clean-link" href="/gigs">Gigs</a></li>
                        <li className="selected"><a className="clean-link" href="/analytics">Analytics</a></li>
                        <li className="selected"><a className="clean-link" href="/earnings">Earnings</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

