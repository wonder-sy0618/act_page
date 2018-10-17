
import React, { Component } from 'react';
import {Page, Article, Button, Form, CellHeader, CellBody, Input, FormCell, Label, ButtonArea, CellsTitle } from 'react-weui';

import Foot from '../components/Foot'

import "./AttrForm.css"

class AttrForm extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      showName : undefined
    }
  }

  render() {
    let that = this;
    return (
      <Page className="AttrForm" transition={false} ptr={false} >
        <Article>
          <section>
            <div className="ImgProview" >
              <img src={that.props.uploadClipImg} />
            </div>
          </section>
          <section className="SectionUpload" >
            <CellsTitle>请填写您的姓名</CellsTitle>
            <Form>
              <FormCell>
                <CellHeader>
                    <Label>姓名：</Label>
                </CellHeader>
                <CellBody>
                    <Input type="text"
                      maxLength={10}
                      onChange={((e) => {
                        that.setState({showName : e.target.value})
                      }).bind(that)}
                      />
                </CellBody>
              </FormCell>
            </Form>
            <ButtonArea>
                <Button
                      onClick={(() => {
                        that.props.onResult({
                          showName : that.state.showName
                        });
                      }).bind(that)} >
                    继续
                </Button>
            </ButtonArea>
          </section>
        </Article>
      </Page>
    );
  }

}

export default AttrForm
