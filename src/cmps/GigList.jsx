import React from "react";
import { gigService } from "../services/gig.service";
import { GigPreview } from "./GigPreview";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export class GigList extends React.Component {
  state = {
    gigs: [],
  };

  componentDidMount() {
    const gigs = gigService.query();
    this.setState({ gigs });
  }
  render() {
    const { gigs } = this.state;
    return (
      <div className="gig-list main-layout card-grid">
        {gigs.map((gig, idx) => (
          <GigPreview key={idx} gig={gig} />
        ))}
      </div>
    );
  }
}