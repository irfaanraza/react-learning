import { Row, Col } from "antd";
export const WhoWeAre = ({
      title,
      captiontitle,
      caption,
      content,
      captionpara,
}) => {
      return (
            <>
                  <Row gutter={10} justify='center'>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <div className='whoweare'>
                                    <h1>{title}</h1>
                                    <Row gutter={10} align='middle'>
                                          <Col
                                                xs={2}
                                                sm={4}
                                                md={6}
                                                lg={8}
                                                xl={12}
                                          >
                                                <div className='number'>
                                                      <h1>{caption}</h1>
                                                </div>{" "}
                                                <h3
                                                      style={{
                                                            display: "block",
                                                            paddingLeft: 200,
                                                      }}
                                                >
                                                      {captionpara}
                                                </h3>
                                          </Col>
                                          <Col
                                                xs={2}
                                                sm={4}
                                                md={6}
                                                lg={8}
                                                xl={12}
                                          >
                                                <div className='whoweare-text'>
                                                      <h3>{captiontitle}</h3>
                                                </div>
                                          </Col>
                                    </Row>
                              </div>
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <div className='whoweare-content'>
                                    <h2>{content}</h2>

                                    <p>
                                          In today's business world of
                                          smartphones email, texts and all sort
                                          of other technological distractions,
                                          our power to think has been seriously
                                          undermined Here at Think Differently
                                          our purpose is to make that happen,
                                          and then to ensure you, Think
                                          Differently. our power to think has
                                          been seriously undermined Here at
                                          Think Differently our purpose is to
                                          make that happen, and then to ensure
                                          you, Think Differently.our power to
                                          think has been seriously undermined
                                          Here at Think Differently our purpose
                                          is to make that happen, and then to
                                          ensure you, Think Differently
                                    </p>
                              </div>
                        </Col>
                  </Row>
            </>
      );
};
