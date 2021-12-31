import CardList from "/components/CardList";
import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";

const BlogPage = ({ BlogPageTestimonial, HeroText, BlogPost }) => {
      const postdata = BlogPageTestimonial;

      console.log("from blogs page:", postdata);
      const posts = postdata.data;
      let hero = HeroText;
      const HeroPost = Object.values(hero);
      const Blog = BlogPost;
      const Blogsdata = Blog.data;

      return (
            <>
                  <Herosection
                        title={HeroPost[0].attributes.title}
                        caption={HeroPost[0].attributes.subtitle}
                  />

                  <CardList blogs={Blogsdata} />

                  {posts.map((post) => {
                        return (
                              <OurTestimonials testimonial={post.attributes} />
                        );
                  })}
            </>
      );
};
export async function getStaticProps() {
      const response = await fetch(
            `${process.env.STRAPI_API_URL}/api/blogpage-testimonialposts?populate=*`
      );
      const BlogPageTestimonial = await response.json();

      const blogresponse = await fetch(
            `${process.env.STRAPI_API_URL}/api/blogpage-hero`
      );
      const HeroText = await blogresponse.json();

      const responseblog = await fetch(
            `${process.env.STRAPI_API_URL}/api/blogspages?populate=*`
      );
      const BlogPost = await responseblog.json();

      return {
            props: {
                  BlogPageTestimonial,
                  HeroText,
                  BlogPost,
            },
      };
}
export default BlogPage;
