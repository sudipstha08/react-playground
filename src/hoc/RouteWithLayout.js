import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const RouteWithLayout = (props) => {
  const { component: Component, layout: Layout, ...rest } = props;
  
  if (props.private) {
    return (
      <PrivateRoute>
        <Layout>
          <Component {...props} />
        </Layout>
      </PrivateRoute>
    );
  }
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
