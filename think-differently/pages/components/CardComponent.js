import { Card, Row, Col, Divider } from "antd";

const { Meta } = Card;

export const CardComponent = (props) => {
      console.log("Image xheck in component : ", props.blog.img);

      return (
            <Col xs={2} sm={4} md={6} lg={6} xl={8}>
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
                              content={props.content}
                              user={props.user}
                              date={props.date}
                        />
                  </Card>
            </Col>
      );
};
