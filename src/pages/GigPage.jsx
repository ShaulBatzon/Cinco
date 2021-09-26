import { NavBarGigPage } from "../cmps/gigPage/NavBarGigPage";
import { StarRate } from "../cmps/gigPage/StarRate";
import React from "react";
import { GigPackage } from "../cmps/GigPackege.jsx";

export class GigPage extends React.Component {
  state = {
    gig: {
      "_id": "s101",
      "seller": {
        "_id": "u101",
        "fullname": "user1",
        "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/26c7c4a5fb0d7f00117c66059a673699-1570772119630/e62ce888-a2da-4604-b40e-513384de070d.jpg"
      },
      "title": "Design Logo",
      "description": "Web Designer, Logo Designer",
      "price": 120,
      "currncyCode": "$",
      "tags": [
        "logo",
        "design",
        "web"
      ],
      "imgUrls": [
        "https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/99806061/original/3e7b24fb9dfae7647b55caa0b7d43b597d4fad7e.jpg",
        "more1.jpg",
        "more2.jpg"
      ],
      "reviews": [
        {
          "id": "madeId",
          "txt": "a great place to dine..",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ]
    }
  };

  // componentDidMount() {
  //   const { gig } = this.props;
  //   this.setState({ gig });
  // }

  render() {
    const { gig } = this.state;
    return (
      <div className="gig-page-body">
        <NavBarGigPage gig={gig} />
        <h1>
          I will fix search console, semrush, ahrefs, moz, errors to rank higher
        </h1>

        <div className="seller-overview">
          <img
            src="https://www.tzomet-hrz.co.il/wp-content/uploads/2019/12/1318c8c679a76a7dc58fd67c2714fe54-e1576169232593.jpg"
            className="profile-pict-img"
            alt="bibi"
          />
          <p>jeffreymsmith</p>
          <StarRate reviews={null} />
          <p>(16223)</p>

          <img
            src="https://microlancer.lancerassets.com/v2/services/b3/25f9956bab41098547a961166d740a/service_card_Simple_logos-02.jpg"
            className="gig-images"
            alt=""
          />

          <h2>About This Gig</h2>
          <p>{` am a Professional voice over actor with a In House Vocal Booth and I would love to record whatever you need me to, up to 100 words, for $5!* I will deliver any voiceover less than 24 hours of your order. ONE DAY DELIVERY! NEED IT FAST? Purchase the VIP Express Delivery to get your order next! TV, For Video YouTube Video Voiceover Match audio to video Voice Over Online projects Phone greetings On hold Message Radio Commercials Internet Programs any projects Business`}</p>
          <h2>About This Seller</h2>
          <img
            src="https://www.tzomet-hrz.co.il/wp-content/uploads/2019/12/1318c8c679a76a7dc58fd67c2714fe54-e1576169232593.jpg"
            className="profile-pict-img"
            alt="bibi"
          />
          <p>jeffreymsmith</p>
          <StarRate reviews={null} />
          <p>(16223)</p>
        </div>
        <GigPackage gig={gig} />
      </div>
    );
  }
}
