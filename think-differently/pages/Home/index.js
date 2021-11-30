import { AppHeader } from "../components/common/AppHeader";
import { Herosection } from "../components/common/Herosection";
import { WhoWeAre } from "./../components/WhoWeAre";
import { WhyYouShouldCare } from './../components/WhyYouShouldCare';

const HomePage = () => {
      return (
            <>
                  <Herosection />
                  <WhoWeAre />
                  <WhyYouShouldCare />
            </>
      );
};
export default HomePage;
