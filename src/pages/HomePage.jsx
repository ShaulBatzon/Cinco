import React from "react";
import AppHeader from "../cmps/AppHeader";
import CardList from "../cmps/CardList";
import HeroFrom from "../cmps/HeroFrom";
import IconList from "../cmps/IconList";
export class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <section>
        <div className="hero-background"></div>
        <div className="content-container hero-content-container">
          <AppHeader />
          <HeroFrom />
          <div class="hero-background-text">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div>
              Gabrielle,<span>Video Editor</span>
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
