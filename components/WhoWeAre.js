import { Row, Col, Image } from "antd";
import fifteen from "../public/assets/fifteen.png";
const WhoWeAre = ({ title, captiontitle, caption, content, captionpara }) => {
      return (
            <div className='container'>
                  <div className='whoweare-container'>
                        <Row gutter={10}>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <div className='fifteen-container'>
                                          <Image
                                                src={fifteen.src}
                                                preview={false}
                                                className='fifteen'
                                          />
                                    </div>
                              </Col>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <div className='whoweare-content'>
                                          <h2>{title}</h2>
                                          <p>{content}</p>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};
export default WhoWeAre;
