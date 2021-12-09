import { Card, Row, Col, Divider } from "antd";

import businessmeeting from "../../public/assets/businessmeeting.png";
import amazonprinciple from "../../public/assets/amazonprinciple.jpg";
import businessplan2020 from "../../public/assets/businessplan2020.jpg";
import fonterrrafarmpic from "../../public/assets/fonterrafarmpic.png";
import neuroplasticitylearning from "../../public/assets/neuroplasticitylearning.jpg";
import informationhiding from "../../public/assets/Informationhiding.jpg";
import { CardComponent } from "./CardComponent";

export const CardList = () => {
      const blogs = [
            {
                  id: 1,
                  img: businessmeeting,
                  content: "Across all sectors, organizations are grappling with rapid transformation. On top of that, there are enormous global shifts and challenges to contend with, ",
                  user: "Admin",
                  title: "What will be Important in 2021?",
                  date: "30-11-2021",
            },
            {
                  id: 2,
                  img: fonterrrafarmpic,
                  title: "Turning around the fontera disaster",
                  content: "Ensuring that Fonterra operates as a strong, intergenerational, farmer-owned dairy processor is therefore important for the New Zealand dairy industry's future",
                  user: "Admin",
                  date: "30-11-2021",
            },
            {
                  id: 3,
                  img: neuroplasticitylearning,
                  title: "Learning and Neuroplasticity",
                  content: "I have been following Neuroplasticity with a lot of interest in a while now and as the Founder and president of Radio Zeater Club, the most consistent Shortwave Radio Club on the internet. ",
                  user: "Admin",
                  date: "30-11-2021",
            },
            {
                  id: 4,
                  img: businessplan2020,
                  title: "Some principles to live by and do Business By",
                  content: "Christians use the 10 Commandments. Other religions have their own guidelines. We have local, state and federal laws to maintain a civil and safe society. There is no lack of guidance documents or ideas.",
                  user: "Admin",
                  date: "30-11-2021",
            },
            {
                  id: 5,
                  img: amazonprinciple,
                  title: "High Standards and Amazon, With an added extra on listening",
                  content: "One thing he loves about Customers is that they are “divinely discontent” (I love that phrase – I can think of many areas where that can be used!) ",
                  user: "Admin",
                  date: "30-11-2021",
            },
            {
                  id: 6,
                  img: informationhiding,
                  title: "Some Musings from 2020",
                  content: "I sat down to the ol’ keyboard with nothing particular bouncing around in this skull of mine other than the fact that I missed writing.",
                  user: "Admin",
                  date: "30-11-2021",
            },
      ];

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
