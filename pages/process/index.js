import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";
import WhoWeAre from "/components//WhoWeAre";

const ProcessPage = ({ HeroData, Whowepost, TestimonialPost }) => {
      const Hero = HeroData;
      const whowe = Whowepost;
      const WhoweData = whowe.data;
      const testimonial = TestimonialPost;
      const TestimonialData = testimonial.data;

      const Heropost = Object.values(Hero);
      Heropost[0].attributes.title;
      return (
            <>
                  <Herosection
                        title={Heropost[0].attributes.title}
                        caption={Heropost[0].attributes.subtitle}
                  />
                  {WhoweData.map((post) => {
                        return <WhoWeAre data={post.attributes} />;
                  })}
                  {TestimonialData.map((post) => {
                        return (
                              <OurTestimonials testimonial={post.attributes} />
                        );
                  })}
            </>
      );
};
export async function getStaticProps() {
      const reshero = await fetch(
            `${process.env.STRAPI_API_URL}/api/process-hero`
      );
      const HeroData = await reshero.json();
      const reswhowe = await fetch(
            `${process.env.STRAPI_API_URL}/api/process-whoweposts?populate=*`
      );
      const Whowepost = await reswhowe.json();
      const restestimonial = await fetch(
            `${process.env.STRAPI_API_URL}/api/process-testimonialposts?populate=*`
      );
      const TestimonialPost = await restestimonial.json();

      return {
            props: {
                  HeroData,
                  Whowepost,
                  TestimonialPost,
            },
      };
}
export default ProcessPage;
