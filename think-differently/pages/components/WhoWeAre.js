import { Row, Col, Layout } from "antd";
export const WhoWeAre = () => {
      return (
            <Row gutter={15}>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>

                        <div className='col-1-content'>
                              <h1>Who we are</h1>
                              <Row>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                                          <div>
                                                <h1>
                                                      15
                                                </h1>

                                          </div>

                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={12}>years based in Rosedale</Col>
                              </Row>
                              {/* <div className='col-1-content-2'>
                                          <h1>15</h1>
                                          <h2>years based in Rosedale</h2>
                                    </div> */}
                        </div>
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <div className='col-2-content'>
                              <h1>Content</h1>
                        </div>
                  </Col>
            </Row>
      );
};
