import { NavBarGigPage } from "../cmps/gigPage/NavBarGigPage";
import { StarRate } from "../cmps/gigPage/StarRate";
import React from "react";

export class GigPage extends React.Component {
  state = {
    gig: null,
  };

  componentDidMount() {
    const { gig } = this.props;
    this.setState({ gig });
  }

  render() {
    const { gig } = this.state;
    return (
      <div className="gig-page-body">
        <div className="gig-page-container">
          <div className="container-navbar">
            <NavBarGigPage gig={gig} />
          </div>
          <div id="overview" className="gig-review-comtainer">
            <h1>
              I will fix search console, semrush, ahrefs, moz, errors to rank
              higher
            </h1>

            <div className="seller-overview">
              <div>
                <img
                  src="https://www.tzomet-hrz.co.il/wp-content/uploads/2019/12/1318c8c679a76a7dc58fd67c2714fe54-e1576169232593.jpg"
                  className="profile-pict-img"
                  alt="bibi"
                />
              </div>
              <p className="seller-name">jeffreymsmith</p>
              <StarRate reviews={null} />
              <p>(16223)</p>
            </div>

            <div className="gig-photos">
              <img
                src="https://microlancer.lancerassets.com/v2/services/b3/25f9956bab41098547a961166d740a/service_card_Simple_logos-02.jpg"
                className="gig-images"
                alt=""
              />
              {console.log(gig)}
            </div>

            <div className="gallery"></div>

            <h2>About This Gig</h2>
            <p className="gig-description">{` am a Professional voice over actor with a In House Vocal Booth and I would love to record whatever you need me to, up to 100 words, for $5!* I will deliver any voiceover less than 24 hours of your order. ONE DAY DELIVERY! NEED IT FAST? Purchase the VIP Express Delivery to get your order next! TV, For Video YouTube Video Voiceover Match audio to video Voice Over Online projects Phone greetings On hold Message Radio Commercials Internet Programs any projects Business`}</p>

            <h2>About This Seller</h2>
            <div className="about-seller">
              <div className="about-the-seller-img">
                <img
                  src="https://www.tzomet-hrz.co.il/wp-content/uploads/2019/12/1318c8c679a76a7dc58fd67c2714fe54-e1576169232593.jpg"
                  className="profile-pict-img"
                  alt="bibi"
                />
              </div>
              <div id="aboutSeller" className="about-the-seller-details">
                <p>jeffreymsmith</p>
                <p>Responsive Web Designer And WordPress Expert</p>
                <StarRate reviews={null} />
                <p>(16223)</p>
                <button className="contact-the-seller">Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
