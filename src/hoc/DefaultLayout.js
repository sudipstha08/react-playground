import React, { Fragment, useEffect, useState } from "react";
import { Alert, NotificationBar, SideBar } from "../components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const DefaultLayout = (props) => {
  const history = useHistory();
  return (
    <div id="wrapper">
      <Alert />
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NotificationBar />
          <div className="container-fluid">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, null)(DefaultLayout);
