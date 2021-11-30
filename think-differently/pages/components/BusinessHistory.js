import { Row, Col, Divider } from "antd";
export const BusinessHistory = ({ title, caption, captiontitle }) => {
      return (
            <div>
                  <Row gutter={15}>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <h2>{title}</h2>
                              <Divider orientation='left'></Divider>
                              <h3> {caption}</h3>
                              <p>
                                    Are you happy with your revenue? Are you
                                    happy with your profits? Are your people
                                    performing to their potential, everyday? Are
                                    you happy with your strategy? Are you
                                    executing it, relentlessly? Are you
                                    comfortable as leader? Do you sleep well?
                                    <br></br>
                                    If the answer to all of the questions is
                                    yes, then don't call me
                              </p>
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <h2>{title}</h2>
                              <Divider orientation='left'></Divider>
                              <h3> {captiontitle}</h3>
                              <p>
                                    Are you happy with your revenue? Are you
                                    happy with your profits? Are your people
                                    performing to their potential, everyday? Are
                                    you happy with your strategy? Are you
                                    executing it, relentlessly? Are you
                                    comfortable as leader? Do you sleep well?
                                    <br></br>
                                    If the answer to all of the questions is
                                    yes, then don't call me
                              </p>
                        </Col>
                  </Row>
            </div>
      );
};
