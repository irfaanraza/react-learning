import { Row, Col, Layout } from "antd";
export const WhoWeAre = () => {
      return (
            <Row gutter={15}>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <div className='whoweare'>
                              <h1>Who we are</h1>
                              <Row gutter={10} align='middle'>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                                          <div className='number'>
                                                <h1>15</h1>
                                          </div>
                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                                          <div className='whoweare-text'>
                                                <h3>
                                                      years based in Rosedale{" "}
                                                </h3>
                                          </div>
                                    </Col>
                              </Row>
                        </div>
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <div>
                              <h1>Content</h1>
                        </div>
                  </Col>
            </Row>
      );
};
