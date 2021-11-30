import { Row, Col, Divider, Image, Button } from "antd";
import sidebanner from "../../public/assets/sidebanner.jpg";

export const OurTestimonials = ({ title }) => {
      return (
            <Row>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <h1> {title}</h1>
                        <p>
                              Many desktop publishing packages and web page
                              editors now use Lorem Ipsum as their default model
                              text, and a search for 'lorem ipsum' will uncover
                              many web sites still in their infancy. Various
                              versions have evolved over the years, sometimes by
                              accident, sometimes on purpose (injected humour
                              and the like)
                        </p>
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <Image src={sidebanner.src} preview={false} />
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <div>
                              <h1>Chat With Us?</h1>
                              <Button>Contact Us</Button>
                              <h1>021431990</h1>
                        </div>
                  </Col>
            </Row>
      );
};
