import React, { Component } from 'react';
import './App.css';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

import Index from "./pages/Index"
import Make from "./pages/Make"
import ClipUtil from "./pages/ClipUtil"
import Proview from "./pages/Proview"

class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      uploading : false,
      uploadImg : undefined,
      uploadClipImg : undefined,
      proviewImg : undefined,
    }
  }

  onOutputImage(img) {
    this.setState({
      proviewImg : img
    })
  }

  onClipImage(img) {
      console.log("onClipImage", img)
      this.setState({
        proviewImg : img
      })
  }

  onSelectFile(event) {
    let that = this;
    let file = event.target.files[0];
    let r = new FileReader();  //本地预览
    r.onload = function(){
        let base64 = r.result;
        that.setState({
          uploading : false,
          uploadImg : base64
        })
    }
    r.readAsDataURL(file);    //Base64
    that.setState({
      uploading : true
    })
  }


  render() {
    let that = this;
    return (
      <div className="App">
        {
          that.state.proviewImg
            ? <Proview {...that.state} ></Proview>
            : (
              !that.state.uploadImg
              ? <Index onSelectFile={this.onSelectFile.bind(that)} {...that.state} ></Index>
              : (
                !that.state.uploadClipImg
                ? <ClipUtil onClipImage={that.onClipImage.bind(that)}
                      srcImage={that.state.uploadImg}
                      size={200}
                      circle={true}
                      onClipImage={that.onClipImage.bind(that)}
                      ></ClipUtil>
                : <Make onOutputImage={that.onOutputImage.bind(that)} {...that.state} ></Make>
              )
            )
        }
      </div>
    );
  }
}

export default App;
