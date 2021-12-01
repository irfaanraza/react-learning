import { Row, Col, Divider, Image, Button } from "antd";
import testimonial from "../../public/assets/testimonial.jpg";

export const OurTestimonials = ({ title, caption, content }) => {
      console.log("title arha ha ya nai", title);
      return (
            <div className='testimonials-container'>
                  <Row align='middle' gutter={2}>
                        <div className='image-content-container'>
                              <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                                    <h1> {title}</h1>
                                    <h3> {caption}</h3>

                                    <p>{content}</p>
                              </Col>

                              <div className='ourtestimonials-image-container'>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                                          <Image
                                                src={testimonial.src}
                                                preview={false}
                                                style={{
                                                      height: 400,
                                                      width: 600,
                                                }}
                                          />
                                    </Col>
                              </div>
                        </div>

                        <Col xs={2} sm={4} md={6} lg={8} xl={12} flex='2'>
                              <div className='contactus'>
                                    <h1>Chat With Us?</h1>
                                    <Button className='btncontact'>
                                          Contact Us
                                    </Button>
                                    <h1>021431990</h1>
                              </div>
                        </Col>
                  </Row>
            </div>
      );
};
