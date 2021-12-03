import { Row, Col, Divider, Image, Button } from "antd";
import testimonial from "../../public/assets/testimonial.jpg";

export const OurTestimonials = ({ title, caption, content, captiontitle }) => {
      console.log("title arha ha ya nai", title);
      return (
            <div className='testimonials-container'>
                  <Row align='middle' gutter={10}>
                        <Col xs={24} sm={24} md={6} lg={12} xl={12}>
                              <h1> {title}</h1>
                              <h3> {caption}</h3>
                              <h5>{captiontitle}</h5>

                              <p>{content}</p>
                              <div
                                    style={{
                                          display: "flex",
                                          justifyContent: "center",
                                    }}
                              >
                                    <div
                                          style={{
                                                display: "flex",
                                                width: 65,
                                                paddingRight: 22,
                                          }}
                                    >
                                          <Divider
                                                type='horizontal'
                                                style={{
                                                      borderColor: "black",
                                                      borderWidth: 3,
                                                }}
                                          />
                                    </div>
                                    <div
                                          style={{
                                                display: "flex",
                                                width: 65,
                                                paddingRight: 10,
                                                paddingLeft: 10,
                                          }}
                                    >
                                          <Divider
                                                type='horizontal'
                                                color=' #e86d1f'
                                                style={{
                                                      borderColor: "black",
                                                      borderWidth: 3,
                                                      borderColor: "#e86d1f",
                                                }}
                                          />
                                    </div>
                                    <div
                                          style={{
                                                display: "flex",
                                                width: 65,
                                                paddingLeft: 20,
                                          }}
                                    >
                                          <Divider
                                                type='horizontal'
                                                style={{
                                                      borderColor: "black",
                                                      borderWidth: 3,
                                                }}
                                          />
                                    </div>
                              </div>
                        </Col>

                        <Col xs={24} sm={24} md={10} lg={12} xl={12}>
                              <div className='ourtestimonials-image-container'>
                                    <Image
                                          src={testimonial.src}
                                          preview={false}
                                          // style={{
                                          //       height: 400,
                                          //       width: 600,
                                          // }}
                                    />
                              </div>
                        </Col>

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
