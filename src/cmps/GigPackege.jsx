import React from "react";
import { connect } from "react-redux";
import { orderService } from "../services/order.service";
import { userService } from "../services/user.service";
import { addOrder, loadOrders } from "../store/order.actions";
import { utilService } from "../services/util.service";

class _GigPackage extends React.Component {
  state = {
    pack: {
      name: "Basic",
      deliveryBy: 3,
      features: [
        [
          "1 Initial Concept Included",
          "Source File",
          "Logo Transparency",
          "High Resolution",
          "3D Mockup",
          "Social Media Kit",
        ],
        [
          "2 Initial Concept Included",
          "Source File",
          "Logo Transparency",
          "4k Resolution",
          "3D Mockup",
          "Vector File",
        ],
        [
          "3 Initial Concept Included",
          "Source File",
          "Logo Transparency",
          "High Resolution",
          "3D Mockup",
          "Social Media Kit",
          "Vector File",
        ],
      ],
    },
    packageSelected: "Basic",
    packagePrice: this.props.gig.price,
    isSell: false,
  };

  componentDidMount() {
    this.props.loadOrders();
  }

  cheakPrice = (packageSelected) => {
    const { gig } = this.props;
    const standardPirce = gig.price * 2;
    const PremiumPirce = standardPirce * 2;
    // eslint-disable-next-line default-case
    switch (packageSelected) {
      case "Basic":
        return gig.price;
      case "Standard":
        return standardPirce;
      case "Premium":
        return PremiumPirce;
    }
  };

  continue = (ev) => {
    ev.preventDefault();
    orderService.save({
      user: userService.getLoginUser().username,
      price: this.state.packagePrice,
      packName: this.state.packageSelected,
    });
  };

  addOrder = async (ev) => {
    ev.preventDefault();
    const loginUser = userService.getLoginUser();
    if (Object.keys(loginUser).length === 0) return null;
    const { gig } = this.props;
    await this.props.addOrder({
      gigName: gig.gigName,
      buyer: loginUser.username,
      buyerId: loginUser._id,
      gigId: gig._id,
      sellerId: gig.seller._id,
      dueOn: utilService.getDate(),
      price: this.state.packagePrice,
      packName: this.state.packageSelected,
      status: "pending",
    });
  };

  onClick = (currLabel) => {
    // const { packageSelected } = this.state;
    const { gig } = this.props;
    const standardPirce = gig.price * 2;
    const PremiumPirce = standardPirce * 2;
    this.setState({ packageSelected: currLabel });
    // eslint-disable-next-line default-case
    switch (currLabel) {
      case "Basic":
        this.setState({ packagePrice: gig.price });
        break;
      case "Standard":
        this.setState({ packagePrice: standardPirce });
        break;
      case "Premium":
        this.setState({ packagePrice: PremiumPirce });
    }
  };

  render() {
    const { pack, packageSelected } = this.state;
    const { gig } = this.props;
    if (this.state.isSell) {
      return (
        <aside className="slidebar-packs">
          <div className="nav-container-pack">
            <label
              className={
                packageSelected === "Basic" ? "clicked-pack" : "unclicked-pack"
              }
              onClick={() => this.onClick("Basic")}
            >
              Basic
            </label>
            <label
              className={
                packageSelected === "Standard"
                  ? "clicked-pack"
                  : "unclicked-pack"
              }
              onClick={() => this.onClick("Standard")}
            >
              Standard
            </label>
            <label
              className={
                packageSelected === "Premium"
                  ? "clicked-pack"
                  : "unclicked-pack"
              }
              onClick={() => this.onClick("Premium")}
            >
              Premium
            </label>
          </div>
          <form className="packs-form" onSubmit={(ev) => this.addOrder(ev)}>
            <h3>Thank You for your order</h3>
            <p>
              your order has been placed and is being processes. you will recive
              an email with the order details.
            </p>
            <footer>
              <button
                className="btn"
                style={
                  this.state.isSell
                    ? { backgroundColor: "#1dbf73bd" }
                    : { backgroundColor: "#1dbf73bd" }
                }
              >
                {this.state.isSell
                  ? "Owned"
                  : `Continue (${gig.packageSelected}`}
                {/* {this.cheakPrice(packageSelected)}) */}
              </button>
            </footer>
          </form>
        </aside>
      );
    } else {
      return (
        <aside className="slidebar-packs">
          <div className="nav-container-pack">
            <label
              className={
                packageSelected === "Basic" ? "clicked-pack" : "unclicked-pack"
              }
              onClick={() => this.onClick("Basic")}
            >
              Basic
            </label>
            <label
              className={
                packageSelected === "Standard"
                  ? "clicked-pack"
                  : "unclicked-pack"
              }
              onClick={() => this.onClick("Standard")}
            >
              Standard
            </label>
            <label
              className={
                packageSelected === "Premium"
                  ? "clicked-pack"
                  : "unclicked-pack"
              }
              onClick={() => this.onClick("Premium")}
            >
              Premium
            </label>
          </div>
          <form className="packs-form" onSubmit={(ev) => this.addOrder(ev)}>
            <div className="from-heder">
              <p>{packageSelected} Package</p>
              <span>
                {gig.currncyCode}
                {this.cheakPrice(packageSelected)}
              </span>
            </div>
            <ul className="features">
              {/* {pack.features.map((feature, idx) => {
              return (
                <li key={idx}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594
                                                0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 
                                                5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 
                                                1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"
                    ></path>
                  </svg>
                  {feature}
                </li>
              );
            })} */}
              {this.state.packageSelected === "Basic"
                ? pack.features[0].map((feature, idx) => {
                    return (
                      <li key={idx}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594
                                                  0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 
                                                  5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 
                                                  1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    );
                  })
                : this.state.packageSelected === "Standard"
                ? pack.features[1].map((feature, idx) => {
                    return (
                      <li key={idx}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594
                                                  0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 
                                                  5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 
                                                  1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    );
                  })
                : pack.features[2].map((feature, idx) => {
                    return (
                      <li key={idx}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594
                                                  0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 
                                                  5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 
                                                  1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    );
                  })}
            </ul>
            <footer>
              <button className="btn">
                Continue ({gig.currncyCode}
                {this.cheakPrice(packageSelected)})
              </button>
            </footer>
          </form>
        </aside>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderModule.orders,
    // users: state.userModule.users,
    // loggedInUser: state.userModule.user
  };
};
const mapDispatchToProps = {
  loadOrders,
  // loadUsers,
  addOrder,
  // removeOrder
};

export const GigPackage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_GigPackage);
