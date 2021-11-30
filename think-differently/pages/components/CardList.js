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
                  content: "An Amazing blog about the 2020, contains content about 2021",
                  user: "Admin",
                  title: "What will be Important in 2021?",
                  date: "30-11-2021",
            },
            {
                  id: 2,
                  img: fonterrrafarmpic,
                  title: "Turning around the fontera disaster",
                  content: "An Amazing blog about the 2020, contains content about 2021",
                  user: "Admin",
                  date: "30-11-2021",
            },
            {
                  id: 3,
                  img: neuroplasticitylearning,
                  title: "Learning and Neuroplasticity",
                  content: "An Amazing blog about the 2020, contains content about 2021",
                  user: "Admin",
                  date: "30-11-2021",
            },
            {
                  id: 4,
                  img: businessplan2020,
                  title: "Some principles to live by and do Business By",
                  content: "An Amazing blog about the 2020, contains content about 2021",
                  user: "Admin",
                  date: "30-11-2021",
            },
            {
                  id: 5,
                  img: amazonprinciple,
                  title: "High Standards and Amazon, With an added extra on listening",
                  content: "An Amazing blog about the 2020, contains content about 2021",
                  user: "Admin",
                  date: "30-11-2021",
            },
            {
                  id: 6,
                  img: informationhiding,
                  title: "Some Musings from 2020",
                  content: "An Amazing blog about the 2020, contains content about 2021",
                  user: "Admin",
                  date: "30-11-2021",
            },
      ];

      return (
            <div>
                  {blogs.map((blog, index) => {
                        return <CardComponent blog={blog} key={index} />;
                  })}
            </div>
      );
};
