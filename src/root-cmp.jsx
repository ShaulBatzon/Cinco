import React from "react";
import { Switch, Route } from "react-router";
import routes from "./routes";
import {userService} from './services/user.service'
import AppHeader from "./cmps/AppHeader";
import {HeaderSeller} from "./pages/sellerProfile/HeaderSeller.jsx";
import { Loader } from "./cmps/Loader.jsx";
// import { AppFooter } from './cmps/app-footer'
// import {UserDetails} from './pages/user-details'

export class RootCmp extends React.Component {
  state = {
    isSellerMode: null
  }
  componentDidMount() {
    const user = userService.login()
    if (user) {
      const isSeller = user.isSeller
      this.setState({isSellerMode: isSeller})
    }
  }
  
  render() {
    const {isSellerMode} = this.state
    if (isSellerMode === null) return <Loader />
    return (
      <div>
        <main>
          {
            this.state.isSellerMode ? <HeaderSeller /> : <AppHeader />
          }
          
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
                component={route.component}
                path={route.path}
              />
            ))}
            
            {/* <Route path="/user/:id" component={UserDetails} /> */}
          </Switch>
        </main>
        {/* <AppFooter /> */}
      </div>
    );
  }
}
