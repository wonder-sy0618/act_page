import React, { Component } from "react";

import imgTitle from "../res/index_bg.jpg";
import InviteText from "./InviteText";

export default props => (
  <div>
    <img
      src={require("../res/head1.png")}
      style={{
        width: "60%",
        zIndex: 100,
        position: "fixed",
        top: 30,
        left: 20
      }}
    />
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
    <InviteText {...props} />
  </div>
);
