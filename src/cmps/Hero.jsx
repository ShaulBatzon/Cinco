import React from "react";
export class Hero extends React.Component {


  
  render() {
    return(
      <section className="flex hero-continer">
       <h1>Find the <span>best</span></h1>
       <div className="hero-descripson flex">
         <p>Finding the right people and building high</p> 
         <p>performing teams can be hard. Most companies</p> 
         <p>aren’t tapping into the abundance of global talent.</p> 
           <p>We’re about to change that.</p>
         </div>
      </section>
    );
  }
}