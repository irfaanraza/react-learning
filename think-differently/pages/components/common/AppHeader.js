import { Layout, Row, Col, Typography, Menu } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
import Link from "next/link";

export const AppHeader = () => {
      return (
            <Layout className='container'>
                  <Row className='Row'>
                        <Col span={6}>
                              <div className='Col-1'>
                                    <h1>Think Differently</h1>
                                    <Title className='Col-1-title' level={5}>
                                          Business.Strategy.People.Profit
                                    </Title>
                              </div>
                        </Col>
                        <Col span={18}>
                              <div className='Col-1-top'>
                                    <div className='email'>
                                          <Title level={4}>
                                                <MailOutlined />{" "}
                                                iraza@egenienext.com
                                          </Title>
                                    </div>
                                    <div className='phone-number'>
                                          <Title level={4}>
                                                <PhoneOutlined /> 021431990
                                          </Title>
                                    </div>
                              </div>
                              <div className='nav-container'>
                                    <Menu mode='inline' className='nav-items'>
                                          <Menu.Item key='home'>
                                                <Link href='/home'>
                                                      <a>Home</a>
                                                </Link>
                                          </Menu.Item>
                                          <Menu.Item key='process'>
                                                <Link href='/process'>
                                                      <a>Our Process</a>
                                                </Link>
                                          </Menu.Item>
                                          <Menu.Item key='about'>
                                                <Link href='/about'>
                                                      <a>About Us</a>
                                                </Link>
                                          </Menu.Item>
                                          <Menu.Item key='blog'>
                                                <Link href='/blog'>
                                                      <a>Blog</a>
                                                </Link>
                                          </Menu.Item>
                                          <Menu.Item key='contact'>
                                                <Link href='/contact'>
                                                      <a>Contact Us</a>
                                                </Link>
                                          </Menu.Item>
                                          <Menu.Item key='testimonials'>
                                                <Link href='/testimonials'>
                                                      <a>Testimonials</a>
                                                </Link>
                                          </Menu.Item>
                                    </Menu>
                              </div>
                        </Col>
                  </Row>
            </Layout>
      );
};
