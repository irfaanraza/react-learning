import { Row, Col, Divider } from "antd";
const OurBlogs = ({ Blogs }) => {
      console.log("from Missions page:", Blogs);
      return (
            <div className='ourblog-container'>
                  <div className='container'>
                        <Row gutter={20}>
                              {Blogs.map((post) => {
                                    console.log(post.attributes);
                                    return (
                                          <Col
                                                xs={24}
                                                sm={24}
                                                md={8}
                                                lg={8}
                                                xl={8}
                                          >
                                                <h1>{post.attributes.title}</h1>
                                                <Divider
                                                      style={{
                                                            borderWidth: 2,
                                                            borderColor:
                                                                  "black",
                                                      }}
                                                ></Divider>
                                                <div className='blog'>
                                                      <h2>
                                                            {
                                                                  post
                                                                        .attributes
                                                                        .subtitle
                                                            }
                                                      </h2>
                                                      <p>
                                                            {
                                                                  post
                                                                        .attributes
                                                                        .content
                                                            }
                                                      </p>
                                                </div>
                                          </Col>
                                    );
                              })}
                        </Row>
                  </div>
            </div>
      );
};
export default OurBlogs;
