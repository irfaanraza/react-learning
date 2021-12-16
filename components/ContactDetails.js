import {
      MailOutlined,
      PhoneOutlined,
      EnvironmentFilled,
} from "@ant-design/icons";
import { Row, Col, Space, Typography, Image } from "antd";
import logo from "../public/assets/logo.png";
export const ContactDetails = () => {
      return (
            <Row>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div style={{ float: "inline-end" }}>
                              <div className='contactdetails-header'>
                                    <Image
                                          src={logo.src}
                                          preview={false}
                                          className='logo'
                                    />
                              </div>

                              <h2>Contact Details</h2>

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
