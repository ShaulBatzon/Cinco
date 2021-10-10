import React from "react";
// import { connect } from 'react-redux'
import { AppHeaderW } from "./AppHeader-wihte";
import { AppHeaderR } from "./AppHeaderR";
import routes from "../routes";
import { socketService } from "../services/socket.service";

// import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

export class AppHeader extends React.Component {
  state = {
    actvie: false,
    comp: <AppHeaderR />,
  };

  // componentDidMount() {
  //   socketService.on('order accepted', order => {
  //     console.log('HEY BUYER, ', order.txt, 'order: ',order);
  //   })
  // }
  
  // componentWillUnmount() {
  //   socketService.off('order accepted')
  //   // socketService.terminate()
  // }

  change = () => {
    if (window.scrollY >= 100) {
      this.setState({ actvie: true, comp: <AppHeaderW /> });
    } else {
      this.setState({ actvie: false, comp: <AppHeaderR /> });
    }
  };

  render() {
    window.addEventListener("scroll", this.change);
    const { comp } = this.state;
    return <>{comp}</>;
  }
}
