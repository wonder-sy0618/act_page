import React, { Component } from "react";

export default props => (
  <div
    style={{
      position: "fixed",
      top: 175,
      textAlign: "center",
      width: "100%"
    }}
  >
    <img
      src={props.prev.headimg}
      alt=""
      style={{ height: 73, marginLeft: "22px" }}
    />
    <div
      style={{
        marginTop: "-5px",
        marginLeft: "20px",
        fontSize: "13px",
        color: "white"
      }}
    >
      {props.prev.name}
    </div>
  </div>
);
