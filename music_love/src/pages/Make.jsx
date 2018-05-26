
import React, { Component } from 'react';
import AlloyCrop from "alloycrop"

import Title from '../components/Title'

import "./Make.css"

class Make extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }

  componentDidMount() {
    let that = this;
    new AlloyCrop({
            image_src: this.props.uploadImg,
            circle:true, // optional parameters , the default value is false
            width: 200,
            height: 200,
            output: 1.5,
            ok: function (base64, canvas) {
              console.log("ok", base64, canvas)
              that.props.onOutputImage(base64)
            },
            cancel: function () {
              console.log("cancel")
            },
            ok_text: "确认", // optional parameters , the default value is ok
            cancel_text: "取消" // optional parameters , the default value is cancel
     });
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
