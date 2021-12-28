import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";
import WhoWeAre from "/components//WhoWeAre";

const ProcessPage = ({ HeroData, Whowepost, TestimonialPost }) => {
      let Hero = HeroData;
      let whowe = Whowepost;
      let testimonial = TestimonialPost;
      const TestimonialData = Object.values(testimonial);

      const Whopost = Object.values(whowe);
      Whopost[0].attributes.title;
      const Heropost = Object.values(Hero);
      Heropost[0].attributes.title;
      return (
            <>
                  <Herosection
                        title={Heropost[0].attributes.title}
                        caption={Heropost[0].attributes.subtitle}
                  />
                  <WhoWeAre
                        title={Whopost[0].attributes.title}
                        content={Whopost[0].attributes.content}
                        img={Whopost[0].attributes.image.data.attributes.url}
                  />
                  <OurTestimonials
                        title={TestimonialData[0].attributes.title}
                        content={TestimonialData[0].attributes.content}
                        caption={TestimonialData[0].attributes.subtitle}
                        captiontitle={TestimonialData[0].attributes.description}
                        img={
                              TestimonialData[0].attributes.image.data
                                    .attributes.url
                        }
                  />
            </>
      );
};
export async function getStaticProps() {
      const reshero = await fetch(
            `${process.env.STRAPI_API_URL}/api/process-hero`
      );
      const HeroData = await reshero.json();
      const reswhowe = await fetch(
            `${process.env.STRAPI_API_URL}/api/process-whowe?populate=*`
      );
      const Whowepost = await reswhowe.json();
      const restestimonial = await fetch(
            `${process.env.STRAPI_API_URL}/api/process-testimonial?populate=*`
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
