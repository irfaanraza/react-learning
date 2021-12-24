import { Row, Col, Divider } from "antd";
const OurBlogs = ({
      title,
      titleTwo,
      titleThree,
      subtitleTwo,
      subtitle,
      subtitleThree,
      content,
      contentTwo,
      contentThree,
}) => {
      console.log("I am from Blogs:", subtitleThree);
      return (
            <div className='ourblog-container'>
                  <div className='container'>
                        <Row gutter={10}>
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <h1>{title}</h1>
                                    <Divider
                                          style={{
                                                borderWidth: 2,
                                                borderColor: "black",
                                          }}
                                    ></Divider>
                                    <div className='blog'>
                                          <h2>{subtitle}</h2>
                                          <p>{content}</p>
                                    </div>
                              </Col>
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <h1>{titleTwo}</h1>
                                    <Divider
                                          style={{
                                                borderWidth: 2,
                                                borderColor: "black",
                                          }}
                                    ></Divider>
                                    <div className='blog'>
                                          <h2>{subtitleTwo}</h2>
                                          <p>{contentTwo}</p>
                                    </div>
                              </Col>
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <h1>{titleThree}</h1>
                                    <Divider
                                          style={{
                                                borderWidth: 2,
                                                borderColor: "black",
                                          }}
                                    ></Divider>
                                    <div className='blog'>
                                          <h2>{subtitleThree}</h2>
                                          <p>{contentThree}</p>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};
export default OurBlogs;
