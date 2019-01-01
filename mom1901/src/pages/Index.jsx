import React, { Component } from "react";
import { Page, Article, Button } from "react-weui";

import Title from "../components/Title";
import Foot from "../components/Foot";

import iconMake from "../res/icon_make.svg";
import "./Index.css";

export default props => (
  <div
    className="Index"
    style={{ height: window.innerHeight, backgroundColor: "#d8385a" }}
  >
    <div>
      <Title {...props} />
    </div>
    <div
      className="SectionUpload"
      style={
        props.prev && props.prev.headimg
          ? { marginTop: (1150 / 1300) * window.innerWidth + "px" }
          : { marginTop: (1100 / 1300) * window.innerWidth + "px" }
      }
    >
      <a
        href="#"
        className={props.uploading ? "btnUpload disabled" : "btnUpload"}
        style={{
          width: (420 / 1300) * window.innerWidth,
          height: (420 / 1300) * window.innerWidth
        }}
      >
        <input type="file" accept="image/*" onChange={props.onSelectFile} />
        <div
          className="shadow s1"
          style={{
            width: (420 / 1300) * window.innerWidth,
            height: (420 / 1300) * window.innerWidth
          }}
        />
        <div
          className="shadow s2"
          style={{
            width: (420 / 1300) * window.innerWidth,
            height: (420 / 1300) * window.innerWidth
          }}
        />
        <div className="btnContent">
          <img src={iconMake} />
          <br />
          <span>参与活动</span>
        </div>
      </a>
    </div>
    <Foot />
  </div>
);
