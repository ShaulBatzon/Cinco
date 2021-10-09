import React from "react";
import { SellerCard } from "./SellerCard.jsx";
import { userService } from "../../services/user.service";
import { Loader } from "../../cmps/Loader.jsx";
import { SellerGigs } from "./SellerGigs.jsx";
import { Orders } from "./Orders.jsx";
import { socketService } from "../../services/socket.service";
import { orderService } from "../../services/order.service.js";

// import { MyChart } from "./Chart.jsx";

export class SellerProfile extends React.Component {
  state = {
    selecetTab: "gigs",
    notify: 0,
    seller: {},
  };

  async componentDidMount() {
    const user = userService.getLoginUser();
    socketService.on("new order", (order) => {
      console.log("HEY SELLER, ", order.txt, "order: ", order);
      console.log("order.txt: ", order.txt);
      // user.notification.push(notification)
      // userService.update()
      // orderService.update(order)
      this.setState({ notify: this.state.notify + 1 });
    });
    try {
      const seller = await userService.getById(user._id);
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
      }),
      () => console.log("state: ", this.state)
    );
  };

  render() {
    const { seller, selecetTab, notify } = this.state;
    console.log("notify: ", this.state.notify);
    // const { gigs, description, languages} = this.state.sellerProfile
    // const {sellerProfile } = this.state
    // console.log("sellerProfile: ", seller);
    if (!seller) return <Loader />;
    return (
      <div className="main-profile">
        <section className="seller-gigs">
          <ul className="seller-gigs-bar">
            <li onClick={() => this.toggle("gigs")}>Active gigs</li>
            <li onClick={() => this.toggle("orders")}>
              Orders<label> ({notify})</label>
            </li>
            <li onClick={() => this.toggle("draft")}>Draft</li>
          </ul>
          <div className="gigSellerList">
            {selecetTab === "gigs" ? <SellerGigs /> : <Orders />}
          </div>
        </section>
        <section className="form-thin">
          <SellerCard />
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
