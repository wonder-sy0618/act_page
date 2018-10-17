
import React, { Component } from 'react';
import { Msg } from "react-weui";

import Title from '../components/Title'

export default (props) => (
  <div>
    <Msg
        type="success"
        title="创建完成"
        description="请长按下方图片，保存到手机"
        ></Msg>
    <div style={{textAlign : "center"}}>
      <img src={props.proviewImg} style={{"width" : "90%"}} />
    </div>
  </div>
)
