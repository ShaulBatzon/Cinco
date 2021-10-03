import React from "react";
import { star } from "../../imgs/star.js";

export class StarRate extends React.Component {
  state = {};

  rate = (reviews) => {
    let rate = reviews.reduce((sum, review) => {
      return (sum += review.rate);
    }, 0);
    return rate / reviews.length;
  };

  starts = (startsLeght) => {
    var starts = [];
    for (let i = 0; i < startsLeght; i++) {
      starts[i] = star;
    }
    return starts;
  };
  render() {
    if (!this.props.reviews || this.props.reviews.length === 0)
      return <div>login</div>;
    return (
      <div className="star-rate">
        <p>{this.starts(Math.ceil(this.rate(this.props.reviews)))}</p>
        <p>{Number(this.rate(this.props.reviews).toFixed(1))}</p>
      </div>
    );
  }
}
