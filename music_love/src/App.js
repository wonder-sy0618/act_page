import React, { Component } from 'react';
import './App.css';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

import Index from "./pages/Index"
import AlloyFinger from 'alloyfinger/react/AlloyFinger';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index></Index>
      </div>
    );
  }
}

export default App;
