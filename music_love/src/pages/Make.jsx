
import React, { Component } from 'react';

import imgtreat from "../service/imgtreat/"
import Title from '../components/Title'

import "./Make.css"
import outputBg from '../res/output_bg.png'

class Make extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }

  async componentDidMount() {
    let that = this;
    let img = await new Promise((success) => {
      let img = new Image();
      img.src = outputBg
      img.onload = () => {
        success(img)
      }
    });
    let cavans = await imgtreat.create(img.width, img.height);
    let imgUpload = await imgtreat.imageOpen(that.props.uploadClipImg);
    cavans.getContext("2d").drawImage(
      imgUpload, that.props.config.uploadImgLocal.x, that.props.config.uploadImgLocal.y,
      that.props.config.uploadImgLocal.width * that.props.config.uploadScale, that.props.config.uploadImgLocal.height * that.props.config.uploadScale);
    let imgBg = await imgtreat.imageOpen(outputBg);
    cavans.getContext("2d").drawImage(imgBg, 0, 0, cavans.width, cavans.height);
    // 导出图片
    that.props.onOutputImage(cavans.toDataURL("image/png"));
  }

  render() {
    let that = this;
    return (
      <div className="Make" >
      </div>
    );
  }
}
export default Make
