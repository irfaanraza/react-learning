import { Row, Col, Divider } from "antd";
export const BusinessHistory = ({ title, caption, captiontitle }) => {
      return (
            <div className='ourblog-container'>
                  <Row gutter={50}>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12} flex='2'>
                              <h1>Business History</h1>
                              <Divider
                                    style={{
                                          borderWidth: 2,
                                          borderColor: "black",
                                    }}
                              ></Divider>
                              <h2>1990's</h2>
                              <p>
                                    What ever you may think, New Zealand's
                                    future is, you can be sure. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                    Maxime mollitia, molestiae quas vel sint
                                    commodi repudiandae consequuntur voluptatum
                                    laborum numquam blanditiis harum quisquam
                                    eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique
                                    accusantium nemo autem. Veritatis obcaecati
                                    tenetur iure eius earum ut molestias
                                    architecto voluptate aliquam nihil, eveniet
                                    aliquid culpa officia aut! Impedit sit sunt
                                    quaerat, odit, tenetur error, harum nesciunt
                                    ipsum debitis quas aliquid
                              </p>
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12} flex='2'>
                              <h1></h1>
                              <Divider
                                    style={{
                                          borderWidth: 2,
                                          borderColor: "black",
                                    }}
                              ></Divider>
                              <h2>2004</h2>
                              <p>
                                    A topic close to my heart Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit.
                                    Maxime mollitia, molestiae quas vel sint
                                    commodi repudiandae consequuntur voluptatum
                                    laborum numquam blanditiis harum quisquam
                                    eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique
                                    accusantium nemo autem. Veritatis obcaecati
                                    tenetur iure eius earum ut molestias
                                    architecto voluptate aliquam nihil, eveniet
                                    aliquid culpa officia aut! Impedit sit sunt
                                    quaerat, odit, tenetur error, harum nesciunt
                                    ipsum debitis quas aliquid
                              </p>
                        </Col>
                  </Row>
            </div>
      );
};
