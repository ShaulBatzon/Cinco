import React from "react";
import CardList from "../cmps/CardList";
// import HeroFrom from "../cmps/HeroFrom";
import IconList from "../cmps/IconList";
import { HeroFromIntro } from "../cmps/HeroFromIntro";
// import AppCarousel from "../cmps/AppCarousel.jsx";
export class Intro extends React.Component {
  state = {
    color: "",
    intravl: "",
    i: 0,
  };

  componentDidMount() {
    const intravl = setInterval(this.getRandomColor, 6000);
    this.setState({ intravl: intravl });
  }

  componentWillUnmount() {
    clearInterval(this.state.intravl);
  }

  getRandomColor = () => {
    if (this.state.i > 2) this.setState({ i: 0 });
    var letters = ["#952d0a", "#672031", "#00411e"];
    var color = "";
    color = letters[this.state.i];
    this.setState({ color: color, i: this.state.i + 1 });
  };

  render() {
    return (
      <section>
        <div
          style={{ backgroundColor: this.state.color }}
          className="intro-hero-background"
        ></div>
        <div className="content-container intro-hero-content-container">
          <HeroFromIntro />
        </div>
        {/* <CardList />
        <IconList /> */}
      </section>
    );
  }
}
