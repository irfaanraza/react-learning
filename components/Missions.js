import { Row, Col, Image } from "antd";
import learning from "../public/assets/learning.svg";
import leadership from "../public/assets/leadership.svg";
import goals from "../public/assets/goals.svg";

const Missions = ({ title1, title2, title3, content1, content2, content3 }) => {
      return (
            <div className='missions-container'>
                  <div className='container'>
                        <Row gutter={10}>
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <div className='icon-container'>
                                          <Image
                                                src={learning.src}
                                                preview={false}
                                                className='icon'
                                          />
                                    </div>
                                    <div className='strategy-container'>
                                          <h1>{title1} </h1>
                                          <p>{content1}</p>
                                    </div>
                              </Col>
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <div className='icon-container'>
                                          <Image
                                                src={leadership.src}
                                                preview={false}
                                                className='icon'
                                          />
                                    </div>
                                    <div className='strategy-container'>
                                          <h1>{title2}</h1>
                                          <p>{content2}</p>
                                    </div>
                              </Col>
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <div className='icon-container'>
                                          <Image
                                                src={goals.src}
                                                preview={false}
                                                className='icon'
                                          />
                                    </div>
                                    <div className='strategy-container'>
                                          <h1>{title3} </h1>
                                          <p>{content3}</p>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};

export default Missions;
