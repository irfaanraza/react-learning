import { Row, Col, Divider } from "antd";
const BusinessHistory = ({ data }) => {
      return (
            <div className='ourblog-container'>
                  <div className='container'>
                        <Row gutter={10}>
                              {data.map((post) => {
                                    return (
                                          <Col
                                                xs={24}
                                                sm={24}
                                                md={12}
                                                lg={12}
                                                xl={12}
                                          >
                                                <h1>{post.attributes.title}</h1>
                                                <Divider
                                                      style={{
                                                            borderWidth: 2,
                                                            borderColor:
                                                                  "black",
                                                      }}
                                                ></Divider>
                                                <h2>
                                                      {post.attributes.subtitle}
                                                </h2>
                                                <p>{post.attributes.content}</p>
                                          </Col>
                                    );
                              })}

                              {/* <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <h1></h1>
                                    <Divider
                                          style={{
                                                borderWidth: 2,
                                                borderColor: "black",
                                          }}
                                    ></Divider>
                                    <h2>{data.subtitle}</h2>
                                    <p>{data.content}</p>
                              </Col> */}
                        </Row>
                  </div>
            </div>
      );
};
export default BusinessHistory;
