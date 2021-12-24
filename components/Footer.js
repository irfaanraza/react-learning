import {
      Dropdown,
      Row,
      Col,
      Button,
      Divider,
      Form,
      Input,
      Select,
      Space,
      Typography,
      Menu,
} from "antd";
import {
      PhoneOutlined,
      MailOutlined,
      EnvironmentFilled,
      FacebookFilled,
      TwitterSquareFilled,
      LinkedinFilled,
} from "@ant-design/icons";
import { ContactDetails } from "./ContactDetails";
import Link from "next/link";
const { Option } = Select;

export const Footer = () => {
      return (
            <div className='footer'>
                  <div className='container'>
                        <Row justify='center' gutter={10}>
                              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form
                                          layout={"vertical"}
                                          className='chat-form'
                                    >
                                          <Row gutter={5}>
                                                <Col
                                                      xs={24}
                                                      sm={24}
                                                      md={12}
                                                      lg={12}
                                                      xl={12}
                                                >
                                                      <Form.Item
                                                            name='Strategies'
                                                            rules={[
                                                                  {
                                                                        required: true,
                                                                        message: "Please select atleast one option!",
                                                                  },
                                                                  {
                                                                        type: "string",
                                                                  },
                                                            ]}
                                                            hasFeedback
                                                      >
                                                            <Select
                                                                  placeholder='I want '
                                                                  rules={[
                                                                        {
                                                                              required: true,
                                                                              message: "Please select atleast one option!",
                                                                        },
                                                                        {
                                                                              type: "string",
                                                                        },
                                                                  ]}
                                                                  hasFeedback
                                                            >
                                                                  <Option value='Call me to discuss my que'>
                                                                        Strategies
                                                                  </Option>
                                                                  <Option value='Capabilities'>
                                                                        Capabilities
                                                                  </Option>
                                                                  <Option value='Goals'>
                                                                        Goals
                                                                  </Option>
                                                            </Select>
                                                      </Form.Item>
                                                </Col>

                                                <Col
                                                      xs={24}
                                                      sm={24}
                                                      md={12}
                                                      lg={12}
                                                      xl={12}
                                                >
                                                      <Form.Item name='Strategies'>
                                                            <Select placeholder='Select a option and change input text above'>
                                                                  <Option value='Strategy'>
                                                                        Strategies
                                                                  </Option>
                                                                  <Option value='Capabilities'>
                                                                        Capabilities
                                                                  </Option>
                                                                  <Option value='Goals'>
                                                                        Goals
                                                                  </Option>
                                                            </Select>
                                                      </Form.Item>
                                                </Col>
                                                <Col
                                                      xs={24}
                                                      sm={24}
                                                      md={12}
                                                      lg={12}
                                                      xl={12}
                                                >
                                                      <Form.Item
                                                            label={
                                                                  <label
                                                                        style={{
                                                                              color: "white",
                                                                        }}
                                                                  >
                                                                        Your
                                                                        Email
                                                                  </label>
                                                            }
                                                            name='Email'
                                                            rules={[
                                                                  {
                                                                        required: true,
                                                                        message: "Please input your email!",
                                                                  },
                                                                  {
                                                                        type: "email",
                                                                        message: "Please enter a valid email address",
                                                                  },
                                                            ]}
                                                            hasFeedback
                                                      >
                                                            <input
                                                                  type='text'
                                                                  className='email-input'
                                                                  style={{
                                                                        width: "100%",
                                                                        minHeight: 20,
                                                                  }}
                                                            />
                                                      </Form.Item>
                                                </Col>

                                                <Col
                                                      xs={24}
                                                      sm={24}
                                                      md={12}
                                                      lg={12}
                                                      xl={12}
                                                >
                                                      <Form.Item
                                                            label={
                                                                  <label
                                                                        style={{
                                                                              color: "white",
                                                                        }}
                                                                  >
                                                                        Phone
                                                                        Number
                                                                  </label>
                                                            }
                                                            name='Phone Number'
                                                            rules={[
                                                                  {
                                                                        required: true,
                                                                        message: "Please input your Phone Number!",
                                                                  },
                                                                  {
                                                                        type: "number",
                                                                        message: "Please enter a valid number",
                                                                  },
                                                                  { min: 5 },
                                                            ]}
                                                            hasFeedback
                                                      >
                                                            <input
                                                                  type='text'
                                                                  className='phone-input'
                                                                  style={{
                                                                        width: "100%",
                                                                        minHeight: 20,
                                                                  }}
                                                            />
                                                      </Form.Item>
                                                </Col>

                                                <Button
                                                      style={{
                                                            width: "100%",
                                                            backgroundColor:
                                                                  "#e86d1f",
                                                            paddingBottom: 10,
                                                            minHeight: 20,
                                                      }}
                                                      htmlType='submit'
                                                      type='primary'
                                                >
                                                      Send Message
                                                </Button>
                                          </Row>
                                    </Form>
                              </Col>
                              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <div className='row-container'>
                                          <h2> Quick Links</h2>
                                          <div className='links'>
                                                <Link href='/'>
                                                      <a>Home</a>
                                                </Link>
                                                <Link href='/'>
                                                      <a>Our Process</a>
                                                </Link>
                                                <Link href='/'>
                                                      <a>About us</a>
                                                </Link>
                                                <Link href='/'>
                                                      <a>Blog</a>
                                                </Link>
                                          </div>
                                          <div className='contactdetails-container'>
                                                <div className='contactdetails-content'>
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
                                                                              level={
                                                                                    5
                                                                              }
                                                                              style={{
                                                                                    fontSize: 12,
                                                                              }}
                                                                        >
                                                                              +923406665578
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
                                                                              level={
                                                                                    5
                                                                              }
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
                                                                              level={
                                                                                    5
                                                                              }
                                                                              style={{
                                                                                    fontSize: 12,
                                                                              }}
                                                                        >
                                                                              Suit
                                                                              A,
                                                                              1st
                                                                              Floor,
                                                                              Building
                                                                              6,Rosedale
                                                                              road
                                                                              Albany
                                                                        </Typography.Title>
                                                                  </Space>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className='social-icon-container'>
                                                      <Col
                                                            xs={24}
                                                            sm={24}
                                                            md={12}
                                                            lg={12}
                                                            xl={12}
                                                      >
                                                            <a className='social-icons'>
                                                                  <FacebookFilled
                                                                        style={{
                                                                              color: "#fff",
                                                                        }}
                                                                  />
                                                            </a>
                                                            <a className='social-icons'>
                                                                  <TwitterSquareFilled
                                                                        style={{
                                                                              color: "#fff",
                                                                        }}
                                                                  />
                                                            </a>
                                                            <a className='social-icons'>
                                                                  <LinkedinFilled
                                                                        style={{
                                                                              color: "#fff",
                                                                        }}
                                                                  />
                                                            </a>
                                                      </Col>
                                                </div>
                                          </div>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};
