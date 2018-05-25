
import React, { Component } from 'react';
import {Page, Article, Button } from 'react-weui';

import Title from '../components/Title'
import Foot from '../components/Foot'

import iconMake from '../res/icon_make.svg'

export default () => (
  <Page className="Index" transition={true} ptr={false}>
    <Article>
      <section>
        <Title></Title>
      </section>
      <section className="SectionUpload" >
        <a href="#" className="btnUpload" >
          <div className="shadow s1" ></div>
          <div className="shadow s2" ></div>
          <div className="btnContent">
           <img src={iconMake} />
           <br/>
           <span>参加活动</span>
          </div>
        </a>
      </section>
    </Article>
    <Foot></Foot>
  </Page>
)
