import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";

const TestimonialsPage = ({ TestimonialPagePost }) => {
      let data = TestimonialPagePost;
      // console.log("checking api data from testimonials:", data);

      const posts = Object.values(data);
      posts[0].attributes.title;
      // console.log("data from api:", posts);
      // console.log("data from api post[0]:", posts[0].attributes.title);

      return (
            <>
                  <Herosection
                        title='Testimonials'
                        caption='How Do We Get Started ?'
                  />

                  <OurTestimonials
                        title={posts[0].attributes.title}
                        caption={data.title}
                        captiontitle={posts[0].attributes.subtitle}
                        description={posts[0].attributes.description}
                        content={posts[0].attributes.content}
                        img={posts[0].attributes.image.data.attributes.url}
                  />
            </>
      );
};
export async function getStaticProps() {
      const res = await fetch(
            `${process.env.STRAPI_API_URL}/api/testimonial?populate=*`
      );
      const TestimonialPagePost = await res.json();
      console.log("checking api data:", TestimonialPagePost);
      return {
            props: {
                  TestimonialPagePost,
            },
      };
}
export default TestimonialsPage;
