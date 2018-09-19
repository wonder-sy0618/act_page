import React, { Component } from 'react';
import './App.css';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

import Index from "./pages/Index"
import Make from "./pages/Make"
import ClipUtil from "./pages/ClipUtil"
import AttrForm from "./pages/AttrForm"
import Proview from "./pages/Proview"

const config = {
  uploadImgLocal : {
    x : 227,
    y : 90,
    width : 160,
    height : 160
  },
  uploadScale : 1,
  showName : {
    fontSize : 28,
    x : 151,
    y : 213
  }
}

class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      config : config,
      uploading : false,
      uploadImg : undefined,
      uploadClipImg : undefined,
      showName : undefined,
      proviewImg : undefined,
    }
  }

  onOutputImage(img) {
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
              ? <Index onSelectFile={that.onSelectFile.bind(that)} {...that.state} ></Index>
              : (
                !that.state.uploadClipImg
                ? <ClipUtil
                      srcImage={that.state.uploadImg}
                      size={200}
                      multiple={config.uploadScale}
                      circle={true}
                      onClipImage={((img) => that.setState({uploadClipImg: img})).bind(that)}
                      onCancel={(() => that.setState({uploadImg: undefined})).bind(that)}
                      ></ClipUtil>
                : (
                  !that.state.showName
                  ? <AttrForm
                        {...that.state}
                        onResult={((obj) => {that.setState({showName: obj.showName});}).bind(that)}
                        ></AttrForm>
                  : <Make
                        srcImage={that.state.uploadClipImg}
                        onOutputImage={that.onOutputImage.bind(that)}
                        {...that.state}
                        ></Make>
                )
              )
            )
        }
      </div>
    );
  }
}

export default App;
