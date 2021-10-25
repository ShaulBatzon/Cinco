import React from "react";
import img from '../assets/imgs/logo.svg'
export class Header extends React.Component {
  state = {
  };


  render() {
    return (
      <div className="flex header-continer">
          <div className="logoNav flex">
           <img src={img}/>
           <nav>
               <a href="#">home</a>
               <a href="#">about</a>
           </nav>
          </div>
          <div className="contect flex">
          <button>contact us</button>
          </div>
      </div>
    );
  }
}