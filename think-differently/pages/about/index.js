import { BusinessHistory } from "../components/BusinessHistory";
import { Herosection } from "../components/common/Herosection";
import { Missions } from "../components/Missions";
import { OurTestimonials } from "../components/OurTestimonials";
import { WhoWeAre } from "../components/WhoWeAre";
import { WhyYouShouldCare } from "../components/WhyYouShouldCare";

const AboutPage = () => {
      return (
            <>
                  <Herosection
                        title='About Us'
                        caption='How Do We Get Started'
                  />
                  <WhoWeAre
                        title='Phil Pickford '
                        captiontitle='I Team Member'
                        caption='I am Always telling my clients "Its all about you" And it is'
                  />
                  <WhyYouShouldCare title='About Phil Pickford' />
                  <BusinessHistory
                        title='Business History'
                        captiontitle='1940'
                        caption='2007'
                  />
                  <Missions />
                  <OurTestimonials />
            </>
      );
};
export default AboutPage;
