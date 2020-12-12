import React from "react";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Login, UserProfile, CompanyProfile, NascentCompany, NewProject, Details } from "./containers";

import { Home, MyItems, Conferences, Members, Task, Document, ActionItems, Conversation } from "./containers";
import NotificationAll from './containers/NotificationAll';
import DefaultLayout from "./hoc/DefaultLayout";
import DashboardLayout from "./hoc/DashboardLayout";
import RouteWithLayout from "./hoc/RouteWithLayout";

const Test = (props) => {
  return <h1>Test page</h1>;
};



const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <RouteWithLayout
          exact
          path="/"
          component={Home}
          layout={DefaultLayout}
          private={false}
        />
        <RouteWithLayout
          exact
          path="/notifications"
          component={NotificationAll}
          layout={DefaultLayout}
          private={false}
        />

        <RouteWithLayout
          path="/login"
          component={Login}
          layout={DashboardLayout}
          private={false}
        />

        <RouteWithLayout
          path="/test"
          component={Test}
          layout={DashboardLayout}
          private={true}
        />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/login" component={Login} />

        <Route exact path="/user-profile-update" component={UserProfile} />
        <Route exact path="/company-profile-update" component={CompanyProfile} />
        <Route exact path="/nascent-company" component={NascentCompany} />
        <Route exact path="/new-project" component={NewProject} />
        <Route exact path="/details" component={Details} />

        <RouteWithLayout
          exact
          path="/myitems"
          component={MyItems}
          layout={DashboardLayout}
          private={false}
        />

        <RouteWithLayout
          exact
          path="/conferences"
          component={Conferences}
          layout={DashboardLayout}
          private={false}
        />

        <RouteWithLayout
          exact
          path="/members"
          component={Members}
          layout={DashboardLayout}
          private={false}
        />

        <RouteWithLayout
          exact
          path="/task"
          component={Task}
          layout={DashboardLayout}
          private={false}
        />

        <RouteWithLayout
          exact
          path="/document"
          component={Document}
          layout={DashboardLayout}
          private={false}
        />

        <RouteWithLayout
          exact
          path="/actionitems"
          component={ActionItems}
          layout={DashboardLayout}
          private={false}
        />

        <RouteWithLayout
          exact
          path="/conversation"
          component={Conversation}
          layout={DashboardLayout}
          private={false}
        />

      </Switch>
    </Router>
  </Provider>
);
export default App;
