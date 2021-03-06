
import React, { Component } from 'react';
import AlloyCrop from "alloycrop"

class ClipUtil extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }

  componentDidMount() {
    let that = this;
    let alloyCrop = new AlloyCrop({
            image_src: this.props.srcImage,
            circle: this.props.circle, // optional parameters , the default value is false
            width: this.props.size,
            height: this.props.size,
            output: this.props.multiple,
            ok: function (base64, canvas) {
              that.props.onClipImage(base64)
            },
            cancel: function () {
              that.props.onCancel()
            },
            ok_text: "确认", // optional parameters , the default value is ok
            cancel_text: "取消" // optional parameters , the default value is cancel
     });
  }

  render() {
    let that = this;
    return (
      <div className="ClipUtil" >
      </div>
    );
  }
}
export default ClipUtil
