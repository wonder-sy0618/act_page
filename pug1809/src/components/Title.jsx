
import React, { Component } from 'react';

import imgTitle from "../res/star1.jpg"

export default (props) => (
  <img src={imgTitle} className="Title" style={{
    "height": window.innerHeight,
    "width": 1920 / 1280 * window.innerHeight,
    "position": "fixed",
    "top": 0,
    "left": 0,
    "maxWidth": "10000%",
    "marginLeft": "-120px",
  }} />
)
