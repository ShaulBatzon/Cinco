import { render } from "@testing-library/react";
import React from "react";
import { star } from "../../imgs/star.js";
export class Review extends React.Component {
  state = {};

  render() {
    const { review } = this.props;
    return (
      <li className="review">
        <div className="user-on-review">
          {/* <label className="profile-pic"> */}
          <img className="user-img" src={review.by.imgUrl} />
          {/* </label> */}
        </div>
        <header>
          <div className="user-name">
            <p>{review.by.fullname}</p>
            {star}
            <p>{Math.floor(Math.random() * 5)}</p>
          </div>
          <p>{review.txt}</p>
          <span>
            <time>Published 1 day ago</time>
          </span>
        </header>
      </li>
    );
  }
}
