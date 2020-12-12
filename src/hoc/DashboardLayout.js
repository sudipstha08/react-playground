import React, { Fragment, useEffect, useState } from "react";
import { Alert } from "../components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Layout = (props) => {
  const history = useHistory();

  return <Fragment>{props.children}</Fragment>;
};

export default connect(null, null)(Layout);
