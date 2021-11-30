import { AppHeader } from "../components/common/AppHeader";
import { Herosection } from "../components/common/Herosection";
import { OurTestimonials } from "../components/OurTestimonials";
import { Missions } from "../components/Missions";
import { WhoWeAre } from "./../components/WhoWeAre";
import { WhyYouShouldCare } from "./../components/WhyYouShouldCare";
import { OurBlogs } from "../components/OurBlogs";

const HomePage = () => {
      return (
            <>
                  <Herosection
                        title='To Achieve Business Success'
                        caption='In an Environment of Accelerating Change We Weed
                              To Think Differently'
                  />
                  <WhoWeAre />
                  <WhyYouShouldCare />
                  <OurBlogs />
                  <Missions />
                  <OurTestimonials />
            </>
      );
};
export default HomePage;
