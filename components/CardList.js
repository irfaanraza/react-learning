import { Card, Row, Col, Divider } from "antd";

import businessmeeting from "../public/assets/businessmeeting.png";
import amazonprinciple from "../public/assets/amazonprinciple.jpg";
import businessplan2020 from "../public/assets/businessplan2020.jpg";
import fonterrrafarmpic from "../public/assets/fonterrafarmpic.png";
import neuroplasticitylearning from "../public/assets/neuroplasticitylearning.jpg";
import informationhiding from "../public/assets/Informationhiding.jpg";
import CardComponent from "./CardComponent";

const CardList = ({ blogs }) => {
      return (
            <div className='card-container'>
                  <div className='container'>
                        <Row gutter={[5, 5]}>
                              {blogs.map((blog, index) => {
                                    return (
                                          <CardComponent
                                                blog={blog}
                                                key={index}
                                          />
                                    );
                              })}
                        </Row>
                  </div>
            </div>
      );
};
export default CardList;
