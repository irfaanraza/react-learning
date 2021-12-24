import CardComponent from "/components/CardComponent";
import CardList from "/components/CardList";
import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";

const BlogPage = ({ BlogPage, HeroText, Card1 }) => {
      let data = BlogPage;
      let hero = HeroText;
      let c1 = Card1;
      const CardOne = Object.values(c1);
      CardOne[0].attributes.title;
      const HeroPost = Object.values(hero);
      const Testimonial = Object.values(data);

      console.log("checking data from blog page: ", CardOne);

      return (
            <>
                  <Herosection
                        title={HeroPost[0].attributes.title}
                        caption={HeroPost[0].attributes.subtitle}
                  />
                  <CardList
                        title={CardOne[0].attributes.title}
                        description={CardOne[0].attributes.description}
                  />
                  <OurTestimonials
                        title={Testimonial[0].attributes.title}
                        subtitle={Testimonial[0].attributes.subtitle}
                        description={Testimonial[0].attributes.description}
                        content={Testimonial[0].attributes.content}
                  />
            </>
      );
};
export async function getStaticProps() {
      const response = await fetch(
            `${process.env.STRAPI_API_URL}/api/blogpage-testimonial`
      );
      const BlogPage = await response.json();

      const blogresponse = await fetch(
            `${process.env.STRAPI_API_URL}/api/blogpage-hero`
      );
      const HeroText = await blogresponse.json();

      const res1 = await fetch(`${process.env.STRAPI_API_URL}/api/cardpost1`);
      const Card1 = await res1.json();
      return {
            props: {
                  BlogPage,
                  HeroText,
                  Card1,
            },
      };
}
export default BlogPage;
