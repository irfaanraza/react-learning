import { Row, Col, Form, Divider, Button, Input } from "antd";
import { ContactDetails } from "./ContactDetails";
export const GetInTouch = () => {
      return (
            <div className='contactus-container'>
                  <h2>Get in Touch with Us</h2>
                  <Form layout={"vertical"}>
                        <Row gutter={5}>
                              <Col xs={24} sm={24} md={8} lg={12} xl={12}>
                                    <Row>
                                          <Col
                                                xs={24}
                                                sm={24}
                                                md={8}
                                                lg={12}
                                                xl={12}
                                          >
                                                <Form.Item label='Name'>
                                                      <input type='text' />
                                                </Form.Item>
                                          </Col>
                                          <Col
                                                xs={24}
                                                sm={24}
                                                md={12}
                                                lg={12}
                                                xl={12}
                                                // style={{
                                                //       margin: -150,
                                                //       marginTop: 0,
                                                // }}
                                          >
                                                <Form.Item label='Email'>
                                                      <input type='text' />
                                                </Form.Item>
                                          </Col>

                                          <Col
                                                xs={24}
                                                sm={24}
                                                md={12}
                                                lg={12}
                                                xl={12}
                                          >
                                                <Form.Item label='Last Name'>
                                                      <input type='text' />
                                                </Form.Item>
                                          </Col>
                                          <Col
                                                xs={24}
                                                sm={24}
                                                md={12}
                                                lg={12}
                                                xl={12}
                                                // style={{
                                                //       margin: -150,
                                                //       marginTop: 0,
                                                // }}
                                          >
                                                <Form.Item label='Phone'>
                                                      <input type='text' />
                                                </Form.Item>
                                          </Col>
                                    </Row>
                                    <Form.Item
                                          label='Message'
                                          // style={{ width: "80%" }}
                                    >
                                          <Input.TextArea />
                                    </Form.Item>
                                    <Button className='btncontact'>
                                          Contact Us
                                    </Button>
                              </Col>
                              <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                    <Divider
                                          type='vertical'
                                          style={{
                                                borderColor: "black",
                                                height: 250,
                                          }}
                                    />
                              </Col>
                              <Col>
                                    <div>
                                          <ContactDetails />
                                    </div>
                              </Col>
                        </Row>
                  </Form>
            </div>
      );
};
// <div className='getintouch-container'>
//       <h1>Get In Touch With Us</h1>

//       <Row gutter={5}>
//             <div className='form-container'>
//                   <Col xs={2} sm={4} md={6} lg={8} xl={12}>
//                         <Form className='form'>
//                               <Form.Item
//                                     label='Name'
//                                     name='dsdsdfsd'
//                                     style={{
//                                           marginLeft: 6,
//                                           justifyContent: "center",
//                                     }}
//                               >
//                                     <input
//                                           type='text'
//                                           placeholder='name'
//                                           style={{
//                                                 paddingRight: 5,
//                                                 marginLeft: 5,
//                                           }}
//                                     />
//                               </Form.Item>
//                               <Form.Item
//                                     label='LastName'
//                                     style={{ marginRight: 6 }}
//                               >
//                                     <input type='text' />
//                               </Form.Item>
//                         </Form>
//                   </Col>
//                   <Col xs={2} sm={4} md={6} lg={8} xl={12}>
//                         <Form className='form'>
//                               <Form.Item label='Email'>
//                                     <input />
//                               </Form.Item>
//                               <Form.Item label='Phone'>
//                                     <input />
//                               </Form.Item>
//                         </Form>
//                   </Col>
//             </div>
//       </Row>
//       <Button className='btncontact'>Contact Us</Button>

//       {/* <Divider
//             type='vertical'
//             orientation='left'
//             style={{ borderColor: "black", borderWidth: 2 }}
//       ></Divider> */}
// </div>
