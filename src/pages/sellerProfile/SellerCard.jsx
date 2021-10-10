/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { userService } from "../../services/user.service";
export class SellerCard extends React.Component {
  state = {
    memberSince: "Dec 2020",
  };

  render() {
    const {seller}=this.props
     console.log('props:', this.props.seller);
    return (
      <div className="seller-card">
        <div className="online-user-icon">
          <div>
            <i className="fa fa-circle">Online</i>
          </div>
        </div>
        <div className="user-profile-info">
          <div className="user-profile-img">
            <label className="profile-pict">
              <input type="file" accept="image/png,image/jpeg" hidden={true} />
              <img
                src={
                seller.imgUrl2
                }
              />
            </label>
          </div>
          <div className="user-profile-label">
            <p className="seller-link">{seller.fullname}</p>
          </div>
        </div>
        <div className="user-stats-desc">
          <ul className="user-stats">
            <li className="location">
              From<b>Israel</b>
            </li>
            <li className="member-since">
              Member since<b>{this.state.memberSince}</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
