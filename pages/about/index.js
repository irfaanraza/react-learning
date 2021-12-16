import BusinessHistory from "/components/BusinessHistory";
import Herosection from "/components/common/Herosection";
import Missions from "/components/Missions";
import OurTestimonials from "/components/OurTestimonials";
import WhoWeAre from "/components/WhoWeAre";
import WhyYouShouldCare from "/components/WhyYouShouldCare";

const AboutPage = ({ HomePageposts }) => {
      let data = HomePageposts;
      console.log("checking data:", data);
      return (
            <>
                  <Herosection
                        title='About Us'
                        caption='How Do We Get Started'
                  />
                  <WhoWeAre
                        title='Phil Pickford '
                        captiontitle='I Team Member'
                        captionpara='I am Always telling my clients "Its all about you" And it is'
                  />
                  <WhyYouShouldCare title='About Phil Pickford' />
                  <BusinessHistory
                        title='Business History'
                        captiontitle='1940'
                        caption='2007'
                  />
                  <Missions />
                  <OurTestimonials
                        title='Our Testimonials'
                        caption='Mike Wardlaw'
                        captiontitle='Managing Director, Babcock (NZ) Ltd'
                        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error,'
                  />
            </>
      );
};
export async function getStaticProps() {
      const res = await fetch(`${process.env.STRAPI_API_URL}/api/homepages`);
      const HomePageposts = await res.json();
      console.log("checking api data:", HomePageposts);
      return {
            props: {
                  HomePageposts,
            },
      };
}
export default AboutPage;
