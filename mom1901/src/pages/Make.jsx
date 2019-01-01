import React, { Component } from "react";

import imgtreat from "../service/imgtreat/";
import Title from "../components/Title";
import QRCode from "qrcode";

import "./Make.css";
import outputBg from "../res/bg.png";

class Make extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  async componentDidMount() {
    let that = this;
    let img = await new Promise(success => {
      let img = new Image();
      img.src = outputBg;
      img.onload = () => {
        success(img);
      };
    });
    let cavans = await imgtreat.create(img.width, img.height);
    //
    let shareUrl = await QRCode.toDataURL(
      "https://wonder-sy0618.github.io/act_page/mom1901/build/index.html"
    );
    let shareQrcode = await imgtreat.imageOpen(shareUrl);
    cavans
      .getContext("2d")
      .drawImage(
        shareQrcode,
        that.props.config.uploadImgLocal.x - 2,
        that.props.config.uploadImgLocal.y + 655,
        that.props.config.uploadImgLocal.width * that.props.config.uploadScale,
        that.props.config.uploadImgLocal.height * that.props.config.uploadScale
      );
    //
    let imgUpload = await imgtreat.imageOpen(that.props.uploadClipImg);
    cavans
      .getContext("2d")
      .drawImage(
        imgUpload,
        that.props.config.uploadImgLocal.x,
        that.props.config.uploadImgLocal.y,
        that.props.config.uploadImgLocal.width * that.props.config.uploadScale,
        that.props.config.uploadImgLocal.height * that.props.config.uploadScale
      );
    //
    let imgBg = await imgtreat.imageOpen(outputBg);
    cavans.getContext("2d").drawImage(imgBg, 0, 0, cavans.width, cavans.height);
    //
    await imgtreat.textDraw(
      cavans,
      that.props.showName,
      that.props.config.showName.x * 2,
      that.props.config.showName.y * 2,
      {
        fillStyle: "white",
        font: that.props.config.showName.fontSize + 'px "楷体" ',
        wordSpacing: 1.7 - (that.props.showName.length - 2) * 0.2,
        middlePos: true,
        isVertical: false
      }
    );
    // 导出图片
    that.props.onOutputImage(cavans.toDataURL("image/png"));
  }

  render() {
    let that = this;
    return (
      <div
        className="Make"
        style={{ textAlign: "center", margin: "200px 0px" }}
      >
        <img src={require("../res/loading.gif")} />
      </div>
    );
  }
}
export default Make;
