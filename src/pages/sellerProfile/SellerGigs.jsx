import React from "react";
import { userService } from "../../services/user.service";
// import { gigService } from "../../services/gig.se/rvice";
import { GigPreview } from "../../cmps/GigPreview";

import { connect } from "react-redux";
// import { gigService } from "../services/gig.service.js";
import { loadGigs, loadGigsBySeller } from "../../store/gig.action";
class _SellerGigs extends React.Component {
  state = {};
  componentDidMount() {
    this.props.loadGigs();
  }
  render() {
    const user = userService.login()._id;
    const sellerGigs = this.props.gigs.filter((gig) => gig.seller._id === user);
    return (
      <div className="gig-list main-layout card-grid">
        {sellerGigs.map((gig, idx) => (
          <GigPreview key={idx} gig={gig} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gigs: state.gigModule.gigs,
  };
}
const mapDispatchToProps = {
  loadGigs,
};

export const SellerGigs = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SellerGigs);
