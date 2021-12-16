import {
      Layout,
      Row,
      Col,
      Typography,
      Menu,
      Space,
      Button,
      Drawer,
      Image,
} from "antd";
import {
      MailOutlined,
      PhoneOutlined,
      MenuFoldOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import { useState } from "react";
import { DrawerMenu } from "../DrawerMenu";

export const AppHeader = () => {
      const [visible, setVisible] = useState(false);

      const ShowMenu = () => {
            setVisible(true);
      };

      const onClose = () => {
            setVisible(false);
      };
      return (
            <div className='container'>
                  <Row gutter={10}>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                              <Row gutter={10} align='middle'>
                                    <Col
                                          xs={18}
                                          sm={18}
                                          md={20}
                                          lg={20}
                                          xl={20}
                                    >
                                          <div className='Col-1'>
                                                <Image
                                                      src={logo.src}
                                                      preview={false}
                                                      className='logo'
                                                />
                                          </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                          <MenuFoldOutlined
                                                className='btn-mobile-menu'
                                                onClick={ShowMenu}
                                          />
                                          <Drawer
                                                className='side-menu'
                                                placement='right'
                                                onClose={onClose}
                                                visible={visible}
                                          >
                                                <DrawerMenu />
                                          </Drawer>
                                    </Col>
                              </Row>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={18} xl={17}>
                              <Row>
                                    <Col
                                          xs={24}
                                          sm={24}
                                          md={24}
                                          lg={24}
                                          xl={24}
                                    >
                                          <div className='contactinfos-container '>
                                                <div className='email'>
                                                      <h4>
                                                            <Space>
                                                                  <MailOutlined />
                                                                  iraza@egenienext.com
                                                            </Space>
                                                      </h4>
                                                </div>
                                                <div className='phone-number'>
                                                      <h4>
                                                            <Space>
                                                                  <PhoneOutlined />
                                                                  021431990
                                                            </Space>
                                                      </h4>
                                                </div>
                                          </div>
                                    </Col>
                              </Row>

                              <div className='nav-container navigation'>
                                    <Menu className='nav-items'>
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
            </div>
      );
};
