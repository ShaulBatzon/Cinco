import React from "react";
import { userService } from "../../services/user.service";
export class SellerCard extends React.Component {
  state = {
    memberSince: "Dec 2020",
  };

  render() {
    console.log("props:", this.props.seller.username);
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
                  "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/26c7c4a5fb0d7f00117c66059a673699-1570772119630/e62ce888-a2da-4604-b40e-513384de070d.jpg"
                }
              />
            </label>
          </div>
          <div className="user-profile-label">
            <b className="seller-link">{this.props.seller.username}</b>
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
