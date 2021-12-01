import { Row, Col, Image, Layout } from "antd";
import sidebanner from "../../public/assets/sidebanner.jpg";

export const WhyYouShouldCare = ({ title }) => {
      return (
            <Row gutter={50} align='middle'>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <div className='image-container'>
                              <Image src={sidebanner.src} preview={false} />
                        </div>
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <h1>{title}</h1>
                        <p>
                              Are you happy with your revenue? Are you happy
                              with your profits? Are your people performing to
                              their potential, everyday? Are you happy with your
                              strategy? Are you executing it, relentlessly? Are
                              you comfortable as leader? Do you sleep well?
                              <br></br>
                              If the answer to all of the questions is yes, then
                              don't call me
                        </p>
                  </Col>
            </Row>
      );
};
