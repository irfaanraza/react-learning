import { Row, Col, Form, Divider } from "antd";
export const GetInTouch = () => {
      return (
            <>
                  <h1>Get In Touch With Us</h1>
                  <Row gutter={50} justify='start'>
                        <Col>
                              <Row gutter={50} justify='center'>
                                    <Col>
                                          <Form style={{ display: "block" }}>
                                                <Form.Item label='Name'>
                                                      <input />
                                                </Form.Item>
                                                <Form.Item label='LastName'>
                                                      <input />
                                                </Form.Item>
                                          </Form>
                                          <textarea label='Message'></textarea>
                                    </Col>
                                    <Col>
                                          <Form>
                                                <Form.Item label='Email'>
                                                      <input />
                                                </Form.Item>
                                                <Form.Item label='Phone'>
                                                      <input />
                                                </Form.Item>
                                          </Form>
                                    </Col>
                              </Row>
                        </Col>
                        <Col></Col>
                  </Row>
                  <Divider
                        type='vertical'
                        orientation='left'
                        dashed={true}
                        style={{ borderColor: "orange", borderWidth: 20 }}
                  ></Divider>
            </>
      );
};
