import React from "react";
import { SellerCard } from "./SellerCard.jsx";
import { userService } from "../../services/user.service";
import { Loader } from "../../cmps/Loader.jsx";
import { SellerGigs } from "./SellerGigs.jsx";
import { Orders } from "./Orders.jsx";
import { orderService } from "../../services/order.service.js";
import { NavLink } from "react-router-dom";

import LineChart from "./Chart.jsx";

export class SellerProfile extends React.Component {
  state = {
    selecetTab: "",
    seller: {},
    user: null,
  };
  async componentDidMount() {
    socketService.on("new order", (order) => {
      const user = userService.getLoggedinUser();
      const notifyTxt = order.txt;
      // console.log("HEY SELLER, ", notifyTxt, "order: ", order);
      user.notifications.push(notifyTxt);
      try {
        // console.log("user: ", user);
        // userService.update(user);
      } catch (err) {
        console.log(err);
      }
      this.setState({ notify: this.state.notify + 1 });
    });
    try {
      const seller = userService.getLoginUser();
      this.setState({ seller });
    } catch (err) {
      console.log(err);
    }
  }

  componentWillUnmount() {
    socketService.off("new order");
    // socketService.terminate()
  }

  toggle = (tab) => {
    this.setState({ selecetTab: tab });
  };

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(
      (prevState) => ({
        ...prevState,
        seller: {
          ...prevState.seller,
          [name]: value,
        },
      })
      // () => console.log("state: ", this.state)
    );
  };

  render() {
    const { seller, selecetTab, notify } = this.state;
    const user = userService.getLoggedinUser();
    // const notify =;
    console.log("notify", notify);
    // const { gigs, description, languages} = this.state.sellerProfile
    // const {sellerProfile } = this.state
    // console.log("sellerProfile: ", seller);
    if (!seller) return <Loader />;
    return (
      <div className="main-profile">
        {console.log("seller", seller)}
        <section className="seller-gigs">
          <ul className="seller-gigs-bar">
            <li onClick={() => this.toggle("gigs")}>Active gigs</li>
            <li onClick={() => this.toggle("draft")}>Dashboard</li>
          </ul>
          <div className="gigSellerList">
            {selecetTab === "gigs" ? (
              <SellerGigs />
            ) : selecetTab === "orders" ? (
              <Orders />
            ) : (
              <LineChart />
            )}
          </div>
        </section>
        <section className="form-thin">
          <SellerCard seller={seller} />
          <article>
            <form className="description-form">
              <aside>
                <h3>Description</h3>
              </aside>
              <section>
                <textarea
                  className="textarea-description"
                  name="description"
                  maxLength="600"
                  minLength="15"
                  placeholder={seller.description}
                  spellCheck="false"
                  onChange={this.handleChange}
                ></textarea>
                <div>
                  <input type="button" value="Cancel" />
                  <input type="submit" value="Update" />
                </div>
              </section>
            </form>
          </article>
        </section>
      </div>
    );
  }
}
