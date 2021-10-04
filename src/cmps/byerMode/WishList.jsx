import React from "react";
import { Link, NavLink } from "react-router-dom";
import GigList from "../GigList";
import routes from "../routes";

class WishList extends React.Component {
  state = {
      gigs=[]
  };


  componentDidMount(){
// const user=;
  }

  render() {
    return (
      <div className="wisht-list-container">
        <div className="wishListBody">
            <section className="header">
                <h2>My  Wish list</h2>
                <p>{`Organize your go-to freelancers and favorite services into custom
                lists you can easily access and share with your team.`}</p>
            </section>
            GigList
        </div>
      </div>
    );
  }
}
