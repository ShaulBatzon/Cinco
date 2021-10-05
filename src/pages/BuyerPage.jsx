import React from "react";
import { NavBarByer } from "../cmps/byerMode/NavBarByer";
export class BuyerPage extends React.Component {
  state = {};

  render() {
    const { gig } = this.props;
    return (
      <>
        <div className="container-navbar">
          <NavBarByer gig={gig} />
          <div className=""></div>
        </div>
      </>
    );
  }
}
