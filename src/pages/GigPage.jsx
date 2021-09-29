import { NavBarGigPage } from "../cmps/gigPage/NavBarGigPage";
import { StarRate } from "../cmps/gigPage/StarRate";
import React from "react";
import { connect } from "react-redux";
import { gigService } from "../services/gig.service";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GigPackage } from "../cmps/GigPackege";

export class GigPage extends React.Component {
  state = {
    gig: {},
    seller: {},
    imgUrls: [],
  };

  componentDidMount() {
    // const { currGig } = this.props;
    // console.log("currGig: ", currGig);
    // this.setState({gig: currGig})
    const gigId = gigService.getGigId();
    gigService.getById(gigId).then((gig) => {
      this.setState({ gig: { ...gig } });
      this.setState({ seller: gig.seller });
      this.setState({ imgUrls: gig.imgUrls });
    });
  }

  render() {
    // if(!this.state.gig) return <Loading />
    const { gig, seller, imgUrls } = this.state;
    const imgForCarousel = imgUrls.map((img) => <img src={img} />);
    const CustomDot = ({ index, onClick, active }) => {
      return (
        <button
          onClick={(e) => {
            onClick();
            e.preventDefault();
          }}
          className={active ? "custom-dot--active" : "custom-dot"}
        >
          {React.Children.toArray(imgForCarousel)[index]}
        </button>
      );
    };

    return (
      <div className="gig-page-body">
        {/* <div className="gig-page-container"> */}
        <div className="container-navbar">
          <NavBarGigPage gig={gig} />
        </div>
        <div id="overview" className="gig-review-comtainer">
          <h1>{gig.title}</h1>

          <div className="seller-overview">
            <div>
              <img
                src={seller.imgUrl}
                className="profile-pict-img"
                alt="bibi"
              />
            </div>
            <p className="seller-name">{seller.fullname}</p>
            <StarRate reviews={null} />
            <p>(16223)</p>
          </div>
          <div className="gig-flow">
            <div className="gig-photos">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={5000}
                centerMode={false}
                className=""
                containerClass="gig-carousel-container"
                customDot={<CustomDot />}
                dotListClass="gig-dotList-container"
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                  },
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {/* <img src={imgUrls[0]} className="gig-images" alt="" /> */}
                {imgUrls.map((imgUrl) => (
                  <img src={imgUrl} alt="" />
                ))}
              </Carousel>
            </div>
            <GigPackage gig={gig} />
          </div>

          {/* <div className="gallery"></div> */}

          <h2>About This Gig</h2>
          <p className="gig-description">{` am a Professional voice over actor with a In House Vocal Booth and I would love to record whatever you need me to, up to 100 words, for $5!* I will deliver any voiceover less than 24 hours of your order. ONE DAY DELIVERY! NEED IT FAST? Purchase the VIP Express Delivery to get your order next! TV, For Video YouTube Video Voiceover Match audio to video Voice Over Online projects Phone greetings On hold Message Radio Commercials Internet Programs any projects Business`}</p>

          <h2 className="seller-info-header">About This Seller</h2>
          <div className="about-seller">
            <div className="about-the-seller-img">
              <img
                src={seller.imgUrl}
                className="profile-pict-img"
                alt="bibi"
              />
            </div>
            <div id="aboutSeller" className="about-the-seller-details">
              <p>{seller.fullname}</p>
              <p>{gig.description}</p>
              <p className="seller-star">
                <StarRate reviews={null} />
              </p>
              <p>(16223)</p>
              <button className="contact-the-seller">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
