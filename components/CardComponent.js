import { Card, Row, Col, Divider } from "antd";

const { Meta } = Card;

const CardComponent = ({ blog }) => {
      console.log("from Card Component:");
      return (
            <Col xs={24} sm={24} md={6} lg={6} xl={8}>
                  <Card
                        className='card-item'
                        hoverable
                        cover={
                              <img
                                    alt='example'
                                    src={`http://localhost:1337${blog.attributes.cover.data[0].attributes.url}`}
                                    width='400'
                                    height='300'
                              />
                        }
                  >
                        <Meta
                              // title={title}
                              // description={description}
                              title={blog.attributes.title}
                              description={blog.attributes.description}
                              // user={props.blog.user}
                              // date={props.blog.date}
                        />
                  </Card>
            </Col>
      );
};
export default CardComponent;
