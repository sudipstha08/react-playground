import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => {

    toast(alert.msg, {
      type: alert.alertType,
      autoClose: 1500,
      toastId: alert.id,
    });
    
    return <ToastContainer key={alert.id} />;
});


Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
