import { NavBarGigPage } from "../cmps/gigPage/NavBarGigPage";
import { StarRate } from "../cmps/gigPage/StarRate";
import React from "react";
// import { connect } from "react-redux";
import { gigService } from "../services/gig.service";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GigPackage } from "../cmps/GigPackege";
import { Reviews } from "../cmps/gigPage/Reviews.jsx";
import { Loader } from "../cmps/Loader.jsx";

export class GigPage extends React.Component {
  state = {
    gig: {},
    seller: {},
    imgUrls: [],
    reviews: [],
  };

  componentDidMount() {
    const gigId = gigService.getGigId();
    gigService.getById(gigId).then((gig) => {
      this.setState({ reviews: gig.reviews });
      this.setState({ gig: { ...gig } });
      this.setState({ seller: gig.seller });
      this.setState({ imgUrls: gig.imgUrls });
    });
  }

  render() {
    if (Object.keys(this.state.gig).length === 0) return <Loader />;
    const { gig, seller, imgUrls, reviews } = this.state;
    const imgForCarousel = imgUrls.map((img) => (
      <img src={img} alt="gig-img" />
    ));
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
        <div className="container-navbar ">
          <NavBarGigPage gig={gig} />
        </div>
        <div id="overview" className="gig-review-comtainer">
          <div className="gig-flow-continer">
            <GigPackage gig={gig} />
            <div className="gig-info">
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
                <StarRate reviews={reviews} />
                <p>({reviews.length})</p>
              </div>
              {/* <div className="gig-flow"> */}
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
                  {imgUrls.map((imgUrl, idx) => (
                    <img key={idx} src={imgUrl} alt="" />
                  ))}
                </Carousel>
              </div>
              {/* </div> */}

              {/* <div className="gallery"></div> */}

              <h2>About This Gig</h2>
              <p className="gig-description">{gig.description}</p>

              <h2 className="seller-info-header">About This Seller</h2>
              <div className="about-seller">
                <div className="about-the-seller-img">
                  <img
                    src={seller.imgUrl2}
                    className="profile-pict-img"
                    alt="seller"
                  />
                </div>
                <div id="aboutSeller" className="about-the-seller-details">
                  <p>{seller.fullname}</p>
                  <p>{seller.description}</p>
                  <div className="gigPageRate">
                    <StarRate reviews={reviews} />
                    <p>({reviews.length})</p>
                  </div>
                  <button className="contact-the-seller">Contact Me</button>
                </div>
              </div>
              <Reviews reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
