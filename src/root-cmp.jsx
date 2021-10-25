import React from "react";
import { Header } from "./cmps/Header";
import { Hero } from "./cmps/Hero";
import { Main } from "./cmps/Main";
// import img from './assets/img/bg-pattern-home-1.svg'
// import img2 from './assets/img/bg-pattern-home-2.svg'
export class RootCmp extends React.Component {
  state = {
  };


  render() {
    return (
      <div className="flex web">
        <div className="div1 flex">
        {/* <span><img src={img}/></span>
        <span className="spanImg"><img src={img2}/></span> */}
          <Header/>
          <Hero/>
        </div>
        <div className="div2 main-container">
          <Main/>
           </div>
        <div className="div3 main-container"> </div>
        {/* <AppFooter /> */}
      </div>
    );
  }
}
