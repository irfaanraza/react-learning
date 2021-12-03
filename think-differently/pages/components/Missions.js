import { Row, Col, Image } from "antd";
import learning from "../../public/assets/learning.png";
import leadership from "../../public/assets/leadership.png";
import goals from "../../public/assets/goals.png";

export const Missions = () => {
      return (
            <div className='missions-container'>
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
                                    <h1>Specialise in Strategy </h1>
                                    <p>
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is that it has a
                                          more-or-less normal distribution of
                                          letters,
                                    </p>
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
                                    <h1>One Goal Setting Too</h1>
                                    <p>
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is that it has a
                                          more-or-less normal distribution of
                                          letters,
                                    </p>
                              </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                              <div
                                    className='icon-container
                                    '
                              >
                                    <Image
                                          src={goals.src}
                                          preview={false}
                                          className='icon'
                                    />
                              </div>
                              <div className='strategy-container'>
                                    <h1>Leadership Capabilities </h1>
                                    <p>
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is that it has a
                                          more-or-less normal distribution of
                                          letters,
                                    </p>
                              </div>
                        </Col>
                  </Row>
            </div>
      );
};
