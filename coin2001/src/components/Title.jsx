import React, { Component } from "react";

import InviteText from "./InviteText";

export default props => (
  <div>
    <img
      src={
        props.prev && props.prev.headimg
          ? require("../res/index_bg_headimg.jpg")
          : require("../res/index_bg.png")
      }
      className="Title"
      style={{
        width: "100%",
        height: (10630 / 7080) * window.innerWidth,
        position: "fixed",
        top: 0,
        left: 0
      }}
    />
    {props.prev && props.prev.headimg ? <InviteText {...props} /> : <div />}
  </div>
);
