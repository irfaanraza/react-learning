import { Card, Row, Col, Divider } from "antd";

const { Meta } = Card;

export const CardComponent = (props) => {
      console.log("Image xheck in component : ", props.blog.img);

      return (
            <div className='card-container'>
                  <Card
                        className='card-item'
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt='example' src={props.blog.img.src} />}
                  >
                        <Meta
                              title={props.blog.title}
                              content={props.content}
                              user={props.user}
                              date={props.date}
                        />
                  </Card>
            </div>
      );
};
