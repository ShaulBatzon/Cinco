import React from "react";
import { userService } from "../../services/user.service";
import { GigPreview } from "../../cmps/GigPreview";
import { connect } from "react-redux";
// import { gigService } from "../services/gig.service.js";
import { loadGigs, loadGigsBySeller } from "../../store/gig.action";
import { Link } from "react-router-dom";

class _SellerGigs extends React.Component {
  state = {};
  componentDidMount() {
    this.props.loadGigs();
  }
  render() {

    const user = userService.getLoginUser()._id;
    const sellerGigs = this.props.gigs.filter((gig) => gig.seller._id === user);
    return (
      <div className="gig-list main-layout card-grid">
        {sellerGigs.map((gig, idx) => (
          <GigPreview key={idx} gig={gig} />
        ))}
        <Link to="/sellerProfile/gigs/AddGig">
          <button>Create a new gig</button>
        </Link>
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
