import BusinessHistory from "/components/BusinessHistory";
import Herosection from "/components/common/Herosection";
import Missions from "/components/Missions";
import OurTestimonials from "/components/OurTestimonials";
import WhoWeAre from "/components/WhoWeAre";
import WhyYouShouldCare from "/components/WhyYouShouldCare";

const AboutPage = ({ HeroSectionpost, AboutTestimonialPage }) => {
      let data = HeroSectionpost;
      const posts = Object.values(data);
      posts[0].attributes.title;
      let aboutt = AboutTestimonialPage;
      const abouttposts = Object.values(aboutt);
      abouttposts[0].attributes.title;

      console.log("from about who we are:", abouttposts[0].attributes.title);

      return (
            <>
                  <Herosection
                        title={posts[0].attributes.herotitle}
                        caption={posts[0].attributes.herosubtitle}
                  />
                  <WhoWeAre
                        title='about phil'
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
                        title={abouttposts[0].attributes.title}
                        caption={abouttposts[0].attributes.subtitle}
                        captiontitle={abouttposts[0].attributes.description}
                        content={abouttposts[0].attributes.content}
                  />
            </>
      );
};
export async function getServerSideProps() {
      const res = await fetch(`${process.env.STRAPI_API_URL}/api/herosection`);
      const HeroSectionpost = await res.json();
      const resp = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-testimonial`
      );
      const AboutTestimonialPage = await resp.json();
      return {
            props: {
                  HeroSectionpost,
                  AboutTestimonialPage,
            },
      };
}
export default AboutPage;
