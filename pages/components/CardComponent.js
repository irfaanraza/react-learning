import { Card, Row, Col, Divider } from "antd";

const { Meta } = Card;

export const CardComponent = (props) => {
      return (
            <Col xs={24} sm={24} md={6} lg={6} xl={8}>
                  <Card
                        className='card-item'
                        hoverable
                        cover={
                              <img
                                    alt='example'
                                    src={props.blog.img.src}
                                    width='300'
                                    height='300'
                              />
                        }
                  >
                        <Meta
                              title={props.blog.title}
                              description={props.blog.content}
                              user={props.blog.user}
                              date={props.blog.date}
                        />
                  </Card>
            </Col>
      );
};
