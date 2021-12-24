import { Row, Col, Divider } from "antd";
const BusinessHistory = ({
      titleOne,
      caption,
      captiontitle,
      ContentOne,
      SubtitleOne,
      description,
      Content,
}) => {
      return (
            <div className='ourblog-container'>
                  <div className='container'>
                        <Row gutter={10}>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <h1>Business History</h1>
                                    <Divider
                                          style={{
                                                borderWidth: 2,
                                                borderColor: "black",
                                          }}
                                    ></Divider>
                                    <h2>1990 's</h2>
                                    <p>{ContentOne}</p>
                              </Col>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <h1></h1>
                                    <Divider
                                          style={{
                                                borderWidth: 2,
                                                borderColor: "black",
                                          }}
                                    ></Divider>
                                    <h2>{description}</h2>
                                    <p>{Content}</p>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};
export default BusinessHistory;
