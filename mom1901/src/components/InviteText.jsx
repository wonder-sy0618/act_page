import React, { Component } from "react";

export default props => (
  <div
    style={{
      position: "fixed",
      top: (600 / 1300) * window.innerWidth,
      textAlign: "center",
      width: "100%"
    }}
  >
    <img
      src={props.prev.headimg}
      alt=""
      style={{
        height: (250 / 1300) * window.innerWidth,
        marginLeft: "2px"
      }}
    />
    <div
      style={{
        marginTop: "-5px",
        fontSize: "13px",
        color: "white"
      }}
    >
      {props.prev.name}
    </div>
  </div>
);
