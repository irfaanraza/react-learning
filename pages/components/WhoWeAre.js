import { Row, Col, Image } from "antd";
import fifteen from "../../public/assets/fifteen.png";
export const WhoWeAre = ({
      title,
      captiontitle,
      caption,
      content,
      captionpara,
}) => {
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
                                          <h2>{content}</h2>

                                          <p>
                                                In today's business world of
                                                smartphones email, texts and all
                                                sort of other technological
                                                distractions, our power to think
                                                has been seriously undermined
                                                Here at Think Differently our
                                                purpose is to make that happen,
                                                and then to ensure you, Think
                                                Differently. our power to think
                                                has been seriously undermined
                                                Here at Think Differently our
                                                purpose is to make that happen,
                                                and then to ensure you, Think
                                                Differently.our power to think
                                                has been seriously undermined
                                                Here at Think Differently our
                                                purpose is to make that happen,
                                                and then to ensure you, Think
                                                Differently
                                          </p>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};
