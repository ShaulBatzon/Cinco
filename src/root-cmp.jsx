import React from "react";
import { Switch, Route } from "react-router";
import routes from "./routes";
import AppHeader from "./cmps/AppHeader";
// import { AppFooter } from './cmps/app-footer'
// import {UserDetails} from './pages/user-details'

export class RootCmp extends React.Component {
  render() {
    return (
      <div>
        <main>
          <AppHeader />
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
