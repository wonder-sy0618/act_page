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
    <div>
      <span>您的好友</span>
    </div>
    {/* <div>
      <div style={{ paddingRight: 140, fontSize: 14 }}>您的好友</div>
      <div>
        <img
          src="https://wx.qlogo.cn/mmopen/vi_32/HYBC7oljpX0iaxMXF8vKCbf2vttNE9NgMZhAQS6t3hdHttXSdH2DBnwqkibgfRgjxa1lG06HGYwel0MuQNZhdwaQ/132"
          style={{ height: 20, margin: "0px 10px" }}
        />
        石莹
      </div>
    </div> */}
    <div style={{ marginTop: 20 }}>
      邀请您为
      <img src={require("../res/head1.png")} style={{ width: 100 }} />
      代言
    </div>
  </div>
);
