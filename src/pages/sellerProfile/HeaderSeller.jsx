import React from "react";
import { Link } from "react-router-dom";
import { Badge } from '@mui/material';
import { Avatar } from '@mui/material';
import { socketService } from "../../services/socket.service";
import { userService } from "../../services/user.service";


// import NotificationsIcon from '@mui/icons-material/Notifications';
export class HeaderSeller extends React.Component {

  state = {
    notify: 0,
    user: {}
  }

  async componentDidMount() {
    const user = userService.getLoginUser();
    this.setState({ user })
    socketService.on('new order', order => {
      const notifyTxt = order.txt
      // user.notifications.push(notifyTxt)
      this.setState((prevstate) => ({ ...prevstate, notify: prevstate.notify + 1}));
      try {
        // userService.update(user)
      } catch (err) {
        console.log(err);
      }
    })
  }

  componentWillUnmount() {
    socketService.off("new order");
    // socketService.terminate()
  }

  clearNotify = () => {
    // this.setState({notify: 0})
  }

  toggleMode = () => {
    const { user } = this.state
    
    try {
     
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    const { notify, user } = this.state
    console.log('notify: ',notify);
    return (
      <div className="header-seller-container">
        <div className="hamburger"></div>
        <div>
          <Link to={"/sellerProfile"} className="navbar-logo">
            Cinco
          </Link>
        </div>
        <nav className="seller-navbar-links">
          <ul className="flex">
            <li>
              <a className="clean-link" href="/sellerProfile">
                Profile
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/messages">
                Messages
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/orders">
                Orders
              </a>
            </li>
            <li>
              <a className="clean-link" href="/sellerProfile/gigs">
                Gigs
              </a>
            </li>
            {/* <li>
              <a className="clean-link" href="/sellerProfile/analytics">
                Analytics
              </a>
            </li> */}
            <li>
              <a className="clean-link" href="/sellerProfile/earnings">
                Earnings
              </a>
            </li>
          </ul>
        </nav>
        <div className="prof-pic-nav">
          <nav>
            <ul>
              <li><a className="pointer">Switch to Buying</a></li>
              <div className="badge-notify pointer">
                <Badge badgeContent={notify} color="error">
                <a className="clean-link" href="/sellerProfile/orders"><i class="far fa-bell"></i></a>
                </Badge>
              </div>
              <li>
                <a className="pointer">
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar alt="Shaul Battzon" src={user.imgUrl} />
                  </Badge>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
