import {
      MailOutlined,
      PhoneOutlined,
      EnvironmentFilled,
} from "@ant-design/icons";
import { Row, Col, Space, Typography } from "antd";
export const ContactDetails = () => {
      return (
            <Row>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className='contactdetails-header'>
                              <h2>Think Differently</h2>
                              <h5>Business.Strategy.People.Profit</h5>
                        </div>

                        <h3>Contact Details</h3>
                        <div
                              style={{
                                    textAlign: "justify",
                                    alignItems: "center",
                              }}
                        >
                              <div>
                                    <Space direction='horizontal'>
                                          <PhoneOutlined
                                                style={{
                                                      color: "#e86d1f",
                                                }}
                                          />
                                          <Typography.Title
                                                level={5}
                                                style={{
                                                      fontSize: 12,
                                                      color: "black",
                                                      fontWeight: "700",
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
                                                      color: "black",
                                                      fontWeight: "700",
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
                                                      color: "black",
                                                      fontWeight: "700",
                                                }}
                                          >
                                                Suit A, 1st Floor, Building
                                                6,Rosedale road Albany
                                          </Typography.Title>
                                    </Space>
                              </div>
                        </div>
                  </Col>
            </Row>
      );
};
