import React, { Component } from "react";

import imgTitle from "../res/index_bg.jpg";

export default props => (
  <img
    src={imgTitle}
    className="Title"
    style={{
      height:
        window.innerHeight > window.innerWidth
          ? window.innerHeight
          : window.innerWidth,
      width:
        (600 / 530) *
        (window.innerHeight > window.innerWidth
          ? window.innerHeight
          : window.innerWidth),
      position: "fixed",
      top: 0,
      left: 0,
      maxWidth: "10000%",
      marginLeft: "-190px"
    }}
  />
);
