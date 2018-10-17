import React, { Component } from "react";
import { Page, Article, Button } from "react-weui";

import Title from "../components/Title";
import Foot from "../components/Foot";

import iconMake from "../res/icon_make.svg";
import "./Index.css";

export default props => (
  <div className="Index">
    <div>
      <Title />
    </div>
    <div className="SectionUpload">
      <a
        href="#"
        className={props.uploading ? "btnUpload disabled" : "btnUpload"}
      >
        <input type="file" accept="image/*" onChange={props.onSelectFile} />
        <div className="shadow s1" />
        <div className="shadow s2" />
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
