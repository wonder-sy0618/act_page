import React, { Component } from "react";

export default props => (
  <div
    style={{
      position: "fixed",
      color: "white",
      top: 150,
      textAlign: "center",
      width: "100%"
    }}
  >
    {props.prev && props.prev.headimg ? (
      <div>
        <div style={{ paddingRight: 140, fontSize: 14 }}>您的好友</div>
        <div
          style={{
            height: 48,
            lineHeight: 48,
            display: "inline-flex"
          }}
        >
          <img
            src={props.prev.headimg}
            alt=""
            style={{ height: 48, margin: "0px 10px" }}
          />
          <div
            style={{
              height: 48,
              lineHeight: "48px",
              fontFamily: "楷体"
            }}
          >
            {props.prev.name}
          </div>
        </div>
      </div>
    ) : (
      <div>
        <span>您的好友</span>
      </div>
    )}
    <div style={{ marginTop: 20 }}>
      邀请您为
      <img src={require("../res/head1.png")} style={{ width: 100 }} />
      代言
    </div>
  </div>
);
