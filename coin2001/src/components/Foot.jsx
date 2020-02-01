import React, { Component } from "react";

import { Footer, FooterText, FooterLinks, FooterLink } from "react-weui";

export default props => (
  <Footer>
    {window.innerHeight - (2188 / 1300) * window.innerWidth + 5 > 0 ? (
      <div
        style={{
          width: "100%",
          position: "fixed",
          bottom: "0px",
          left: "0px",
          height:
            window.innerHeight - (2188 / 1300) * window.innerWidth + 5 + "px",
          backgroundColor: "#d8385a",
          zIndex: -1
        }}
      />
    ) : (
      <div />
    )}

    <img src={require("../res/index_foot.png")} style={{ width: "100%" }} />
  </Footer>
);
