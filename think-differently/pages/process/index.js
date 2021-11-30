import { Herosection } from "../components/common/Herosection";
import { OurTestimonials } from "../components/OurTestimonials";
import { WhoWeAre } from "../components/WhoWeAre";

const ProcessPage = () => {
      return (
            <>
                  <Herosection
                        title='Our Process'
                        caption='How do we get Started'
                  />
                  <WhoWeAre
                        title='Who We Are  '
                        captiontitle='Its All About You'
                  />
                  <OurTestimonials title='How Does It Start?' />
            </>
      );
};
export default ProcessPage;
