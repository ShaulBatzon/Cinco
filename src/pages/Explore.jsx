import React from "react";
import { connect } from "react-redux";
import { GigList } from "../cmps/GigList";
import { loadGigs } from "../store/gig.action";

export class Explore extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="main-container">
          <GigList />
        </div>
      </div>
    );
  }
}
