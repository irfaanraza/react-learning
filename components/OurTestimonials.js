import { Row, Col, Divider, Image, Button } from "antd";
import testimonial from "../public/assets/testimonial.jpg";
import imglogo from "../public/assets/imglogo.svg";

const OurTestimonials = ({ testimonial }) => {
      return (
            <div className='testimonials-container'>
                  <div className='container'>
                        <Row gutter={10}>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <h1> {testimonial.title}</h1>
                                    <h2>{testimonial.subtitle}</h2>
                                    <h3>{testimonial.description}</h3>
                                    <h3> {testimonial.caption}</h3>
                                    <h5>{testimonial.captiontitle}</h5>

                                    <p>{testimonial.content}</p>

                                    {/* <div
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
                                                            borderColor:
                                                                  "black",
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
                                                            borderColor:
                                                                  "black",
                                                            borderWidth: 3,
                                                            borderColor:
                                                                  "#e86d1f",
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
                                                            borderColor:
                                                                  "black",
                                                            borderWidth: 3,
                                                      }}
                                                />
                                          </div>
                                    </div> */}
                              </Col>

                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <div className='ourtestimonials-image-container xyz'>
                                          <Image
                                                src={`http://localhost:1337${testimonial.image.data[0].attributes.url}`}
                                                preview={false}
                                                className='testimonial-image'
                                          />
                                          <div className='text-block-bottom'>
                                                <img
                                                      src={imglogo.src}
                                                      className='text-block-bottom-img'
                                                />
                                          </div>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};

export default OurTestimonials;
