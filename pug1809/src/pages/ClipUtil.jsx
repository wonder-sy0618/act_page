import React, { Component } from "react";
import AlloyCrop from "alloycrop";
import EXIF from "exif-js";

class ClipUtil extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  resetOrientation(srcBase64, srcOrientation, callback) {
    if (!srcOrientation) {
      callback(srcBase64);
      return;
    }

    var img = new Image();

    img.onload = function() {
      var width = img.width,
        height = img.height,
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");

      // set proper canvas dimensions before transform & export
      if (4 < srcOrientation && srcOrientation < 9) {
        canvas.width = height;
        canvas.height = width;
      } else {
        canvas.width = width;
        canvas.height = height;
      }

      // transform context before drawing image
      switch (srcOrientation) {
        case 2:
          ctx.transform(-1, 0, 0, 1, width, 0);
          break;
        case 3:
          ctx.transform(-1, 0, 0, -1, width, height);
          break;
        case 4:
          ctx.transform(1, 0, 0, -1, 0, height);
          break;
        case 5:
          ctx.transform(0, 1, 1, 0, 0, 0);
          break;
        case 6:
          ctx.transform(0, 1, -1, 0, height, 0);
          break;
        case 7:
          ctx.transform(0, -1, -1, 0, height, width);
          break;
        case 8:
          ctx.transform(0, -1, 1, 0, 0, width);
          break;
        default:
          break;
      }

      // draw image
      ctx.drawImage(img, 0, 0);

      // export base64
      callback(canvas.toDataURL("image/png"));
    };

    img.src = srcBase64;
  }

  componentDidMount() {
    let that = this;
    let alloyCrop = new AlloyCrop({
      image_src: this.props.srcImage,
      circle: this.props.circle, // optional parameters , the default value is false
      width: this.props.size,
      height: this.props.size,
      output: this.props.multiple,
      ok: function(base64, canvas) {
        var img = new Image();
        img.src = that.props.srcImage;
        img.onload = function() {
          EXIF.getData(img, function(s) {
            let orientation = EXIF.getTag(this, "Orientation");
            that.resetOrientation(base64, orientation, newBase64 => {
              that.props.onClipImage(newBase64);
            });
          });
        };
      },
      cancel: function() {
        that.props.onCancel();
      },
      ok_text: "确认", // optional parameters , the default value is ok
      cancel_text: "取消" // optional parameters , the default value is cancel
    });
  }

  render() {
    let that = this;
    return <div className="ClipUtil" />;
  }
}
export default ClipUtil;
