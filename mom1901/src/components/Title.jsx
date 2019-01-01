import React, { Component } from "react";

import InviteText from "./InviteText";

export default props => (
  <div>
    <img
      src={
        props.prev && props.prev.headimg
          ? require("../res/index_bg_headimg.jpg")
          : require("../res/index_bg.jpg")
      }
      className="Title"
      style={{
        height:
          window.innerHeight > window.innerWidth
            ? window.innerHeight
            : window.innerWidth,
        width:
          (1300 / 2188) *
          (window.innerHeight > window.innerWidth
            ? window.innerHeight
            : window.innerWidth),
        position: "fixed",
        top: 0,
        left: 0
      }}
    />
    {props.prev && props.prev.headimg ? <InviteText {...props} /> : <div />}
  </div>
);
