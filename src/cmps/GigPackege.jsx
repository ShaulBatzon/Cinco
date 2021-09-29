import React from "react";

export class GigPackage extends React.Component {
  state = {
    pack: {
      name: "Basic",
      deliveryBy: 3,
      features: [
        "1 Page",
        "Design Customization",
        "Content Upload",
        "Responsive Design",
        "5 Plugins/Extensions",
        "E-Commerce Functionality",
        "10 Products",
      ],
    },
    isClicked: false,
  };

  continue = (ev) => {
    ev.preventDefult();
    console.log("So you goona pay?");
  };

  onClick = () => {
    const { isClicked } = this.state;
    this.setState({ isClicked: !isClicked });
  };

  render() {
    const { pack, isClicked } = this.state;
    const { gig } = this.props;
    return (
      <div>
        <aside className="slidebar-packs">
          <div className="nav-container-pack">
            <label
              className={`${isClicked ? "clicked-pack" : "unclicked-pack"}`}
              onClick={this.onClick}
            >
              Basic
            </label>
            <label className="unclicked-pack" onClick={this.onClick}>
              Standard
            </label>
            <label className="unclicked-pack" onClick={this.onClick}>
              Premium
            </label>
          </div>
          <form className="packs-form" onSubmit={this.continue}>
            <h3>
              <b>{pack.name} Package</b>
              <span>
                {gig.currncyCode}
                {gig.price}
              </span>
            </h3>
            <p>
              A Landing/Opening/Home page WordPress website deigns with
              essentials.
            </p>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                <path d="M9 4H7v5h5V7H9V4z"></path>
              </svg>
              <b> {pack.deliveryBy} Days Delivery</b>
              <ul className="features">
                {pack.features.map((feature) => {
                  return (
                    <li>
                      <svg
                        width="11"
                        height="9"
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
                  {gig.price})
                </button>
              </footer>
            </div>
          </form>
        </aside>
      </div>
    );
  }
}
