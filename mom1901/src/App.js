import React, { Component } from "react";
import "./App.css";

import "weui";
import "react-weui/build/packages/react-weui.css";
import urlParse from "url-parse";

import Index from "./pages/Index";
import Make from "./pages/Make";
import ClipUtil from "./pages/ClipUtil";
import AttrForm from "./pages/AttrForm";
import Proview from "./pages/Proview";

const config = {
  uploadImgLocal: {
    x: 227,
    y: 36,
    width: 160,
    height: 160
  },
  uploadScale: 1,
  showName: {
    fontSize: 35,
    x: 151,
    y: 203
  }
};

class App extends Component {
  constructor(props, context) {
    super(props, context);
    let urlInfo = urlParse(window.location.href, true);
    this.state = {
      prev: {
        headimg: urlInfo.query["code"]
          ? "https://act-page-1256005858.cos.ap-chengdu.myqcloud.com/headimg/" +
            urlInfo.query["code"] +
            ".png"
          : undefined,
        name: urlInfo.query["name"] ? urlInfo.query["name"] : undefined
      },
      config: config,
      uploading: false,
      uploadImg: undefined,
      uploadClipImg: undefined,
      showName: undefined,
      proviewImg: undefined
    };
  }

  onOutputImage(img) {
    this.setState({
      proviewImg: img
    });
  }

  onSelectFile(event) {
    let that = this;
    let file = event.target.files[0];
    let r = new FileReader(); //本地预览
    r.onload = function() {
      let base64 = r.result;
      that.setState({
        uploading: false,
        uploadImg: base64
      });
    };
    r.readAsDataURL(file); //Base64
    that.setState({
      uploading: true
    });
  }

  render() {
    let that = this;
    return (
      <div className="App">
        {that.state.proviewImg ? (
          <Proview {...that.state} />
        ) : !that.state.uploadImg ? (
          <Index onSelectFile={that.onSelectFile.bind(that)} {...that.state} />
        ) : !that.state.uploadClipImg ? (
          <ClipUtil
            srcImage={that.state.uploadImg}
            size={200}
            multiple={config.uploadScale}
            circle={true}
            onClipImage={(img => that.setState({ uploadClipImg: img })).bind(
              that
            )}
            onCancel={(() => that.setState({ uploadImg: undefined })).bind(
              that
            )}
          />
        ) : !that.state.showName ? (
          <AttrForm
            {...that.state}
            onResult={(obj => {
              that.setState({ showName: obj.showName });
            }).bind(that)}
          />
        ) : (
          <Make
            srcImage={that.state.uploadClipImg}
            onOutputImage={that.onOutputImage.bind(that)}
            {...that.state}
          />
        )}
      </div>
    );
  }
}

export default App;
