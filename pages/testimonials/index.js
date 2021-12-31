import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";
import { Carousel, Row, Col, Button } from "antd";
const TestimonialsPage = ({ TestimonialPagePost }) => {
      let data = TestimonialPagePost;
      console.log("checking api data from testimonials:", data.data);
      const posts = data.data;

      return (
            <>
                  <Herosection
                        title='Testimonials'
                        caption='How Do We Get Started ?'
                  />
                  <Carousel className='testimonial-carousel'>
                        {posts.map((post) => {
                              return (
                                    <OurTestimonials
                                          testimonial={post.attributes}
                                    />
                              );
                        })}
                  </Carousel>
                  <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <div className='contactus'>
                                    <h1>Chat With Us?</h1>
                                    <Button className='btncontact'>
                                          Contact Us
                                    </Button>
                                    <h1>021431990</h1>
                              </div>
                        </Col>
                  </Row>
            </>
      );
};
export async function getStaticProps() {
      const res = await fetch(
            `${process.env.STRAPI_API_URL}/api/testimonialpages?populate=*`
      );
      const TestimonialPagePost = await res.json();

      return {
            props: {
                  TestimonialPagePost,
            },
      };
}
export default TestimonialsPage;
