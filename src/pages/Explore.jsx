import React from "react";
// import { connect } from "react-redux";
import { GigList } from "../cmps/GigList";
// import { loadGigs } from "../store/gig.action";

export class Explore extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="space"></div>
        <div className="content-container">
          <GigList />
        </div>
      </div>
    );
  }
}
