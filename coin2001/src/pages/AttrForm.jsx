import React, { Component } from "react";
import {
  Page,
  Article,
  Button,
  Form,
  CellHeader,
  CellBody,
  Input,
  FormCell,
  Label,
  ButtonArea,
  CellsTitle,
  CellFooter,
  Radio
} from "react-weui";

import Foot from "../components/Foot";

import "./AttrForm.css";

const BgSel = [
  {
    title:
      "面对新型冠状病毒感染的肺炎疫情。我承诺，强防护、不恐慌，相信科学更健康。",
    img: require("../res/bg_1.png")
  },
  {
    title:
      "面对新型冠状病毒感染的肺炎疫情。我承诺，戴口罩、勤洗手，多测体温勤消毒。",
    img: require("../res/bg_2.png")
  },
  {
    title:
      "面对新型冠状病毒感染的肺炎疫情。我承诺，少聚集、多通风，每天保持好心情。",
    img: require("../res/bg_3.png")
  },
  {
    title:
      "面对新型冠状病毒感染的肺炎疫情。我承诺，早发现、早报告，隔离治疗要趁早。",
    img: require("../res/bg_4.png")
  }
];

class AttrForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showName: undefined,
      bgImg: BgSel[0].img
    };
  }

  render() {
    let that = this;
    return (
      <Page
        className="AttrForm"
        transition={false}
        ptr={false}
        onLoadMore={undefined}
        infiniteLoader={false}
      >
        <Article>
          <section>
            <div className="ImgProview">
              <img src={that.props.uploadClipImg} />
            </div>
          </section>
          <section className="SectionUpload">
            <Form style={{ borderTop: 0 }}>
              <CellsTitle>我的姓名</CellsTitle>
              <FormCell>
                <CellHeader>
                  <Label>姓名：</Label>
                </CellHeader>
                <CellBody>
                  <Input
                    type="text"
                    maxLength={6}
                    onChange={(e => {
                      that.setState({ showName: e.target.value });
                    }).bind(that)}
                  />
                </CellBody>
              </FormCell>
            </Form>
            <Form radio>
              <CellsTitle>我倡导的主题</CellsTitle>
              {BgSel.map(i => 
                <FormCell radio key={"AttrForm_Radio_" + i.img}>
                  <CellBody>
                    {i.title}
                  </CellBody>
                  <CellFooter>
                    <Radio name="bgImgRadio" value={i.img} 
                      defaultChecked={i.img==this.state.bgImg ? true : false}
                      onChange={(e => {
                        that.setState({ bgImg: e.target.value });
                      })} />
                  </CellFooter>
                </FormCell>
              )}
            </Form>
            <ButtonArea>
              <Button
                onClick={(() => {
                  that.props.onResult({
                    showName: that.state.showName,
                    bgImg: that.state.bgImg
                  });
                }).bind(that)}
              >
                生成海报
              </Button>
            </ButtonArea>
          </section>
        </Article>
      </Page>
    );
  }
}

export default AttrForm;
