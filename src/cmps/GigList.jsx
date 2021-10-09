import React from "react";
import { connect } from "react-redux";
// import { gigService } from "../services/gig.service.js";
import { GigPreview } from "./GigPreview";
import { loadGigs } from "../store/gig.action";

class _GigList extends React.Component {
  state = {};

  GetFilterGigs=()=>{
    const { gigs } = this.props;
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("filterBy")) {
      let filterBy = searchParams.get("filterBy");
      if (filterBy) {
        var tags = gigs.filter((entity) =>
          entity.tags.find((tag) => tag === filterBy)
        );
        const filterGigs = tags;
        return filterGigs;
      }
    }  
    else
    return gigs
  }
  componentDidMount() {
    this.props.loadGigs();
  }
  render() {
    const gigs  = this.GetFilterGigs();
    return (
      <div className="gig-list main-layout card-grid">
        {gigs.map((gig, idx) => (
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

export const GigList = connect(mapStateToProps, mapDispatchToProps)(_GigList);
