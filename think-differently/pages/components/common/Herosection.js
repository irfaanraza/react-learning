import { Image } from "antd";
import banner from "../../../public/assets/banner.jpg";
export const Herosection = () => {
      console.log("banner", banner);
      return (
            <div className='hero-container'>
                  <h1>HeroSection</h1>
                  <Image src={banner.src} width={400} height={200} />
            </div>
      );
};
