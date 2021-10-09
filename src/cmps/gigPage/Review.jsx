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
          <img  alt=""className="user-img" src={review.by.imgUrl} />
          {/* </label> */}
        </div>
        <header>
          <div className="user-name">
            <p>{review.by.fullname}</p>
            {star}
            <p>{review.rate}</p>
          </div>
          <p>{review.txt}</p>
          <span>
            <time>Published {Math.floor(Math.random() * 20)} day ago</time>
          </span>
        </header>
      </li>
    );
  }
}
