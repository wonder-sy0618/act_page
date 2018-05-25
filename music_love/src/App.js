import React, { Component } from 'react';
import './App.css';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

import Index from "./pages/Index"
import Make from "./pages/Make"
import Proview from "./pages/Proview"
import AlloyFinger from 'alloyfinger/react/AlloyFinger';

class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      uploading : false,
      uploadImg : undefined,
      proviewImg : undefined,
    }
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
              that.state.uploadImg
              ? <Make {...that.state} ></Make>
              : <Index onSelectFile={this.onSelectFile.bind(that)} {...that.state} ></Index>
            )
        }
      </div>
    );
  }
}

export default App;
