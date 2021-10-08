import React from "react";
import { Link } from "react-router-dom";
import { socketService } from "../../services/socket.service";

export class HeaderSeller extends React.Component {

  state = {
    notify: 0,
  }

  componentDidMount() {
    socketService.on('new order', order => {
      console.log('HEY SELLER, ', order.txt, 'order: ',order);
      this.setState({notify: this.state.notify + 1})
    })
  }

  componentWillUnmount() {
    socketService.off('new order');
    socketService.terminate()
  }
  
  
  render() {
    console.log('notify: ',this.state.notify);
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
