import { Row, Col } from "antd";
export const WhoWeAre = () => {
      return (
            <>
                  {/* <Row gutter={15} align='center'>
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
                                                            years </br> based in <br></br>Rosedale
                                                </h3>
                                          </div>
                                      </Col>
                                   </Row>
                        </div>

                        </Col>
                  </Row> */}

                  <Row gutter={15} justify='center'>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <div className='whoweare'>
                                    <h1>Who we are</h1>
                                    <Row gutter={10} align='middle'>
                                          <Col
                                                xs={2}
                                                sm={4}
                                                md={6}
                                                lg={8}
                                                xl={12}
                                          >
                                                <div className='number'>
                                                      <h1
                                                            style={{
                                                                  fontSize: 45,
                                                                  fontWeight:
                                                                        "700",
                                                            }}
                                                      >
                                                            15
                                                      </h1>
                                                </div>
                                          </Col>
                                          <Col
                                                xs={2}
                                                sm={4}
                                                md={6}
                                                lg={8}
                                                xl={12}
                                          >
                                                <div className='whoweare-text'>
                                                      <h3>
                                                            years<br></br> based
                                                            in <br></br>Rosedale
                                                      </h3>
                                                </div>
                                          </Col>
                                    </Row>
                              </div>
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <div className='whoweare-content'>
                                    <h3>
                                          To Think Differently, First We Need To
                                          Think
                                    </h3>
                                    <p>
                                          In today's business world of
                                          smartphones email, texts and all sort
                                          of other technological distractions,
                                          our power to think has been seriously
                                          undermined Here at Think Differently
                                          our purpose is to make that happen,
                                          and then to ensure you, Think
                                          Differently
                                    </p>
                              </div>
                        </Col>
                  </Row>
            </>
      );
};
