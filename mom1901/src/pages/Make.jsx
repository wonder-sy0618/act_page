import React, { Component } from "react";

import imgtreat from "../service/imgtreat/";
import QRCode from "qrcode";

import "./Make.css";
import outputBg from "../res/bg.png";

class Make extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || "";
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  async upload(uploadClipImg, name) {
    let token = await fetch(
      "https://service-1fx5arpi-1256005858.ap-guangzhou.apigateway.myqcloud.com/release/cos_server"
    ).then(resp => resp.json());
    // Split the base64 string in data and contentType
    var block = uploadClipImg.split(";");
    // Get the content type of the image
    var contentType = block[0].split(":")[1]; // In this case "image/gif"
    // get the real base64 content of the file
    var realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."
    // Convert it to a blob to upload
    var blob = this.b64toBlob(realData, contentType);
    console.log(token);
    await fetch(token.uploadUrl, { method: "PUT", body: blob });
    return "code=" + token.code + "&name=" + encodeURIComponent(name);
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
    // request code
    let querystring = await this.upload(
      that.props.uploadClipImg,
      that.props.showName
    );
    // share url
    let shareUrl =
      "https://wonder-sy0618.github.io/act_page/mom1901/build/index.html?" +
      querystring;
    console.log("share url", shareUrl);
    let shareUrlQrcodeBase64 = await QRCode.toDataURL(shareUrl);
    let shareQrcode = await imgtreat.imageOpen(shareUrlQrcodeBase64);
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
