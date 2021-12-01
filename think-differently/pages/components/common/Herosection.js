import { Button, Image } from "antd";
import banner from "../../../public/assets/banner.jpg";
export const Herosection = ({ title, caption }) => {
      return (
            <div className='banner'>
                  <Image
                        src={banner.src}
                        className='banner-img'
                        preview={false}
                  />
                  <div className='banner-caption'>
                        <h1>{title}</h1>
                        <p>{caption}</p>
                        <Button className='btncontact'>Contact Us</Button>
                  </div>
            </div>
      );
};
