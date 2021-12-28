import { Row, Col, Divider, Image, Button } from "antd";
import testimonial from "../public/assets/testimonial.jpg";
import imglogo from "../public/assets/imglogo.svg";

const OurTestimonials = ({
      title,
      caption,
      captiontitle,
      content,
      description,
      subtitle,
      img,
}) => {
      return (
            <div className='testimonials-container'>
                  <div className='container'>
                        <Row gutter={10}>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <h1> {title}</h1>
                                    <h2>{subtitle}</h2>
                                    <h3>{description}</h3>
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
                                    </div>
                              </Col>

                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <div className='ourtestimonials-image-container xyz'>
                                          <Image
                                                src={`http://localhost:1337${img}`}
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

                              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
            </div>
      );
};

export default OurTestimonials;
