import React from "react";
import CardList from "../cmps/CardList";
import HeroFrom from "../cmps/HeroFrom";
import IconList from "../cmps/IconList";
import { AppHeaderW } from "../cmps/AppHeader-white";
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

  
  render() {
    if (this.state.actvie) return <Intro />;
    return (
      <section>
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${this.state.color})`,
          }}
        ></div>
        <div className="content-container hero-content-container home-layout">
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
