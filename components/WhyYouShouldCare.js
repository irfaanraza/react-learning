import { LogoutOutlined } from "@ant-design/icons";
import { Row, Col, Image, Layout } from "antd";
import sidebanner from "../public/assets/sidebanner.jpg";
import imglogo from "../public/assets/imglogo.svg";
import { Content } from "antd/lib/layout/layout";

const WhyYouShouldCare = ({ title, content }) => {
      return (
            <div className='whycare-container'>
                  <div className='container'>
                        <Row gutter={10}>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <div className='image-container xyz'>
                                          <Image
                                                src={sidebanner.src}
                                                preview={false}
                                          />
                                          <div className='text-block-bottom'>
                                                <img src={imglogo.src} />
                                          </div>
                                    </div>
                              </Col>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <div className='whycare-content'>
                                          <h2>{title}</h2>
                                          <p>{content}</p>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};
export default WhyYouShouldCare;
