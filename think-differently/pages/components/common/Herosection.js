import { Button, Image } from "antd";
import banner from "../../../public/assets/banner.jpg";
export const Herosection = () => {
      return (
            <div classame='banner'>
                  <Image
                        src={banner.src}
                        className='banner-img'
                        preview={false}
                  />
                  <div className='banner-caption'>
                        <h1>To Achieve Business Success</h1>
                        <p>
                              In an Environment of Accelerating Change We Weed
                              To Think Differently
                        </p>
                        <Button className='btn-contact'>Contact Us</Button>
                  </div>
            </div>
      );
};
