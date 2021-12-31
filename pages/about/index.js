import BusinessHistory from "/components/BusinessHistory";
import Herosection from "/components/common/Herosection";
import Missions from "/components/Missions";
import OurTestimonials from "/components/OurTestimonials";
import WhoWeAre from "/components/WhoWeAre";
import WhyYouShouldCare from "/components/WhyYouShouldCare";

const AboutPage = ({
      HeroSectionpost,
      AboutTestimonialPage,
      Whowearepost,
      Whycarepost,
      Missionposts,
      Businessposts,
}) => {
      const data = HeroSectionpost;
      const posts = Object.values(data);
      const aboutt = AboutTestimonialPage;
      const TestimonialPost = aboutt.data;
      const whowe = Whowearepost;
      const WhowePost = whowe.data;
      const whycare = Whycarepost;
      const WhyPost = whycare.data;
      const business = Businessposts;
      const BusinessPost = business.data;
      const missiondata = Missionposts;
      const MissionsPost = missiondata.data;

      return (
            <>
                  <Herosection
                        title={posts[0].attributes.herotitle}
                        caption={posts[0].attributes.herosubtitle}
                  />
                  {WhowePost.map((post) => {
                        return <WhoWeAre data={post.attributes} />;
                  })}
                  {WhyPost.map((post) => {
                        return <WhyYouShouldCare data={post.attributes} />;
                  })}
                  r <BusinessHistory data={BusinessPost} />;
                  <Missions MissionData={MissionsPost} />
                  {TestimonialPost.map((post) => {
                        return (
                              <OurTestimonials testimonial={post.attributes} />
                        );
                  })}
            </>
      );
};

export async function getStaticProps() {
      const res = await fetch(`${process.env.STRAPI_API_URL}/api/herosection`);
      const HeroSectionpost = await res.json();
      const resp = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-testimonialposts?populate=*`
      );
      const AboutTestimonialPage = await resp.json();
      const responsewhoweare = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-whoweposts?populate=*`
      );
      const Whowearepost = await responsewhoweare.json();
      const responsewhycare = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-whycareposts?populate=*`
      );
      const Whycarepost = await responsewhycare.json();

      const resbusiness = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-businesspsots?populate=*`
      );
      const Businessposts = await resbusiness.json();

      const response = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-missionsposts?populate=*`
      );
      const Missionposts = await response.json();

      return {
            props: {
                  HeroSectionpost,
                  AboutTestimonialPage,
                  Whowearepost,
                  Whycarepost,
                  Missionposts,
                  Businessposts,
            },
      };
}
export default AboutPage;
