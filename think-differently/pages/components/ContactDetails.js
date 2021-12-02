import {
      MailOutlined,
      PhoneOutlined,
      EnvironmentFilled,
} from "@ant-design/icons";
import { Row, Col, Space, Typography } from "antd";
export const ContactDetails = () => {
      return (
            <div className='contactdetails-container'>
                  <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <div className='contactdetails-header'>
                                    <h2>Think Differently</h2>
                                    <h5>Business.Strategy.People.Profit</h5>
                              </div>
                              <div className='contactdetails-content'>
                                    <h1>Contact Details</h1>
                                    <div>
                                          <div>
                                                <Space>
                                                      <PhoneOutlined
                                                            style={{
                                                                  color: "#e86d1f",
                                                            }}
                                                      />
                                                      <Typography.Title
                                                            level={5}
                                                            style={{
                                                                  fontSize: 12,
                                                            }}
                                                      >
                                                            021431990
                                                      </Typography.Title>
                                                </Space>
                                          </div>
                                          <div>
                                                <Space>
                                                      <MailOutlined
                                                            style={{
                                                                  color: "#e86d1f",
                                                            }}
                                                      />
                                                      <Typography.Title
                                                            level={5}
                                                            style={{
                                                                  fontSize: 12,
                                                            }}
                                                      >
                                                            irfan.rza65@gmail.com
                                                      </Typography.Title>
                                                </Space>
                                          </div>
                                          <div>
                                                <Space>
                                                      <EnvironmentFilled
                                                            style={{
                                                                  color: "#e86d1f",
                                                            }}
                                                      />
                                                      <Typography.Title
                                                            level={5}
                                                            style={{
                                                                  fontSize: 12,
                                                            }}
                                                      >
                                                            Suit A, 1st Floor,
                                                            Building 6,Rosedale
                                                            road Albany
                                                      </Typography.Title>
                                                </Space>
                                          </div>
                                    </div>
                              </div>
                        </Col>
                  </Row>
            </div>
      );
};
