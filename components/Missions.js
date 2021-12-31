import { Row, Col, Image } from "antd";
import learning from "../public/assets/learning.svg";
import leadership from "../public/assets/leadership.svg";
import goals from "../public/assets/goals.svg";

const Missions = ({ MissionData }) => {
      return (
            <div className='missions-container'>
                  <div className='container'>
                        <Row gutter={10}>
                              {MissionData.map((post) => {
                                    console.log(post.attributes);
                                    return (
                                          <Col
                                                xs={24}
                                                sm={24}
                                                md={8}
                                                lg={8}
                                                xl={8}
                                          >
                                                <div className='icon-container'>
                                                      <Image
                                                            src={`http://localhost:1337${post.attributes.image.data[0].attributes.url}`}
                                                            preview={false}
                                                            className='icon'
                                                      />
                                                </div>
                                                <div className='strategy-container'>
                                                      <h1>
                                                            {
                                                                  post
                                                                        .attributes
                                                                        .title
                                                            }
                                                      </h1>
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
                  {/* <div className='container'>
                        <Row gutter={10}>
                              {MissionData.map((post) => {
                                    console.log(
                                          "from missions map",
                                          post.attributes
                                    );
                              })}
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <div className='icon-container'>
                                          <Image
                                                src={learning.src}
                                                preview={false}
                                                className='icon'
                                          />
                                    </div>
                                    <div className='strategy-container'>
                                          <h1>{post.attributes.title} </h1>
                                          <p>{post.attributes.content}</p>
                                    </div>
                              </Col>
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <div className='icon-container'>
                                          <Image
                                                src={leadership.src}
                                                preview={false}
                                                className='icon'
                                          />
                                    </div>
                                    <div className='strategy-container'>
                                          <h1>{title2}</h1>
                                          <p>{content2}</p>
                                    </div>
                              </Col>
                              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <div className='icon-container'>
                                          <Image
                                                src={goals.src}
                                                preview={false}
                                                className='icon'
                                          />
                                    </div>
                                    <div className='strategy-container'>
                                          <h1>{title3} </h1>
                                          <p>{content3}</p>
                                    </div>
                              </Col>
                        </Row>
                  </div> */}
            </div>
      );
};

export default Missions;
