import { Menu } from "antd";
import { useState } from "react";
import Link from "next/link";
export const DrawerMenu = () => {
      return (
            <Menu mode='vertical' className='nav-items'>
                  <Menu.Item key='home'>
                        <Link href='/home'>
                              <a
                                    style={{
                                          color: "#e86d1f",
                                    }}
                              >
                                    Home
                              </a>
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
      );
};
