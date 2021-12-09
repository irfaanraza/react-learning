import {
      Row,
      Col,
      Form,
      Divider,
      Button,
      Input,
      Space,
      Typography,
      Image,
} from "antd";
import {
      PhoneOutlined,
      MailOutlined,
      EnvironmentFilled,
} from "@ant-design/icons";
import logo from "../../public/assets/logo.png";

export const GetInTouch = () => {
      const [form] = Form.useForm();

      return (
            <div className='contactus-container'>
                  <div className='container'>
                        <h2>Get in Touch with Us</h2>
                        <Form layout={"vertical"} form={form}>
                              <Row gutter={5}>
                                    <Col xs={24} sm={24} md={8} lg={12} xl={12}>
                                          <Row>
                                                <Col
                                                      xs={12}
                                                      sm={12}
                                                      md={12}
                                                      lg={12}
                                                      xl={12}
                                                >
                                                      <Form.Item label='Name'>
                                                            <input type='text' />
                                                      </Form.Item>
                                                      <Form.Item label='Last Name'>
                                                            <input type='text' />
                                                      </Form.Item>
                                                </Col>
                                                <Col
                                                      xs={12}
                                                      sm={12}
                                                      md={12}
                                                      lg={12}
                                                      xl={12}
                                                >
                                                      <Form.Item label='Email'>
                                                            <input type='text' />
                                                      </Form.Item>
                                                      <Form.Item label='Phone'>
                                                            <input type='text' />
                                                      </Form.Item>
                                                </Col>

                                                <Col
                                                      xs={18}
                                                      sm={18}
                                                      md={18}
                                                      lg={18}
                                                      xl={18}
                                                >
                                                      <Form.Item label='Message'>
                                                            <Input.TextArea />
                                                      </Form.Item>
                                                </Col>
                                          </Row>

                                          <Button className='btncontact'>
                                                Contact Us
                                          </Button>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                          <Divider
                                                type='vertical'
                                                style={{
                                                      borderColor: "black",
                                                      height: 250,
                                                }}
                                          />
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                          <div className='contactdetails-header'>
                                                <Image
                                                      src={logo.src}
                                                      preview={false}
                                                      className='logo'
                                                />
                                          </div>

                                          <h2>Contact Details</h2>
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
                                                                        color: "black",
                                                                        fontWeight:
                                                                              "700",
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
                                                                        fontWeight:
                                                                              "700",
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
                                                                        fontWeight:
                                                                              "700",
                                                                  }}
                                                            >
                                                                  Suit A, 1st
                                                                  Floor,
                                                                  Building
                                                                  6,Rosedale
                                                                  road Albany
                                                            </Typography.Title>
                                                      </Space>
                                                </div>
                                          </div>
                                    </Col>
                              </Row>
                        </Form>
                  </div>
            </div>
      );
};
