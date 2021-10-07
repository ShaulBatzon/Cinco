import React from "react";
import { Link } from "react-router-dom";
import { socketService } from "../../services/socket.service";

export class HeaderSeller extends React.Component {
  state = {
    notify: 0,
  }
  
  componentDidMount() {
    socketService.setup()
    socketService.on('got order', this.notify)
  }
  
  componentWillUnmount() {
    socketService.off('got order', this.notify)
    socketService.terminate()
  }
  
  notify = () => {
    console.log('Yes you did it!!');
    // const {notify} = this.state 
    // this.setState({notify: notify+1})
  }

  render() {
    return (
      <div>
        <nav className="seller-navbar-links">
          <ul className="tabs flex">
            <li className="active selected">
              <a className="clean-link" href="/sellerProfile/dashboard">
                Profile
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/messages">
                Messages
              </a>
            </li>
            <li className="selected">
              {/* <label /> */}
              <a className="clean-link" href="/sellerProfile/orders">
                Orders
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/gigs">
                Gigs
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/analytics">
                Analytics
              </a>
            </li>
            <li className="selected">
              <a className="clean-link" href="/sellerProfile/earnings">
                Earnings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
