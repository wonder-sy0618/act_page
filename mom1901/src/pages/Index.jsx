import React, { Component } from "react";
import { Page, Article, Button } from "react-weui";

import Title from "../components/Title";
import Foot from "../components/Foot";

import iconMake from "../res/icon_make.svg";
import "./Index.css";

class Index extends Component {
  constructor(props, context) {
    super();
  }
  componentWillUnmount() {
    // 为了避免首页大图加载时底色是白色，在加载前页面底色设置为红（index.html）
    // 离开index时使设置失效
    document.getElementsByTagName("html")[0].style.backgroundColor = "";
  }
  render() {
    return (
      <div className="Index" style={{}}>
        <div>
          <Title {...this.props} />
        </div>
        <div
          className="SectionUpload"
          style={
            this.props.prev && this.props.prev.headimg
              ? { marginTop: (1150 / 1300) * window.innerWidth + "px" }
              : { marginTop: (1100 / 1300) * window.innerWidth + "px" }
          }
        >
          <a
            href="#"
            className={
              this.props.uploading ? "btnUpload disabled" : "btnUpload"
            }
            style={{
              width: (420 / 1300) * window.innerWidth,
              height: (420 / 1300) * window.innerWidth
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={this.props.onSelectFile}
            />
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
  }
}
export default Index;
