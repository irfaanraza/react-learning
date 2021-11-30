import { Row, Col, Image } from "antd";
import sidebanner from "../../public/assets/sidebanner.jpg";

export const WhyYouShouldCare = ({ title }) => {
      return (
            <div style={{ backgroundColor: "#f8f8f8" }}>
                  <Row gutter={15}>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <Image
                                    src={sidebanner.src}
                                    preview={false}
                                    className='sidebanner'
                              />
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                              <h2>{title}</h2>
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
