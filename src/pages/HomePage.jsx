import React from "react";
import CardList from "../cmps/CardList";
import HeroFrom from "../cmps/HeroFrom";
import IconList from "../cmps/IconList";
import { AppHeaderW } from "../cmps/AppHeader-wihte";
// import AppCarousel from "../cmps/AppCarousel.jsx";
import { Intro } from "./intro";
export class HomePage extends React.Component {
  state = {
    actvie: false,
    color:
      "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
    intravl: "",
    i: 0,
    txt: "Andrea",
    job: "Fashion Designer",
  };

  componentDidMount() {
    const intravl = setInterval(this.getRandomColor, 8000);
    this.setState({ intravl: intravl });
  }

  componentWillUnmount() {
    clearInterval(this.state.intravl);
  }

  getRandomColor = () => {
    console.log("i", this.state.i);
    if (this.state.i > 2) this.setState({ i: 0 });
    var letters = [
      "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png",
      "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png",
      "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
    ];
    var texts = ["Gabrielle", "Moon", "Andrea"];
    var jobs = ["Video Editor", "Marketing Expert", "Fashion Designer"];
    var color = "";
    var txt = "";
    var job = "";
    color = letters[this.state.i];
    txt = texts[this.state.i];
    job = jobs[this.state.i];
    this.setState({ color: color, txt: txt, job: job, i: this.state.i + 1 });
  };

  change = () => {
    console.log("W", window.innerWidth);
    if (window.innerWidth <= 1140) {
      this.setState({ actvie: true });
    } else {
      this.setState({ actvie: false });
    }
  };
  render() {
    window.addEventListener("window", this.change);
    if (this.state.actvie) return <Intro />;
    return (
      <section>
        <div
          className="hero-background"
          style={{
            // backgroundSize: "auto 100%",
            // backgroundRepeat: "no-repeat",
            // // backgroundPosition: "center bottom",
            // backgroundPositionX: "center",
            // backgroundPositionY: "bottom",
            backgroundImage: `url(${this.state.color})`,
          }}
        ></div>
        <div className="content-container hero-content-container">
          <HeroFrom />
          <div className="hero-background-text">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div>
              {this.state.txt},<span> {this.state.job}</span>
            </div>
          </div>
        </div>
        <CardList />
        <IconList />
      </section>
    );
  }
}

// function mapStateToProps(state) {
//     return {
//         gigs: state.userModule.count
//     }
// }

// export const HomePage = connect(mapStateToProps)(_HomePage)
