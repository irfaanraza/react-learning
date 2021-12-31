import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";
import Missions from "/components/Missions";
import WhoWeAre from "/components/WhoWeAre";
import WhyYouShouldCare from "/components/WhyYouShouldCare";
import OurBlogs from "/components/OurBlogs";

const HomePage = ({
      HeroPost,
      WhowePost,
      WhyCarePost,
      BlogsPost,
      MissionPosts,
      TestimonialPage,
}) => {
      let herodata = HeroPost;

      const Whowe = WhowePost;
      const WhoweData = Whowe.data;

      const WhyCare = WhyCarePost;
      const WhyCareData = WhyCare.data;

      const Blogs = BlogsPost;
      const BlogPosts = Blogs.data;

      const MissionPage = MissionPosts;
      const Posts = MissionPage.data;

      const Testimonial = TestimonialPage;
      const TestimonialPost = Testimonial.data;

      const Heropost = Object.values(herodata);
      Heropost[0].attributes.title;
      console.log("from Home:", Posts);
      return (
            <>
                  <Herosection
                        title={Heropost[0].attributes.herotitle}
                        caption={Heropost[0].attributes.herosubtitle}
                  />
                  {WhoweData.map((post) => {
                        return <WhoWeAre data={post.attributes} />;
                  })}
                  {WhyCareData.map((post) => {
                        return <WhyYouShouldCare data={post.attributes} />;
                  })}
                  <OurBlogs Blogs={BlogPosts} />
                  <Missions MissionData={Posts} />

                  {TestimonialPost.map((post) => {
                        return (
                              <OurTestimonials testimonial={post.attributes} />
                        );
                  })}
            </>
      );
};

export async function getStaticProps() {
      const heroresponse = await fetch(
            `${process.env.STRAPI_API_URL}/api/herosection`
      );
      const HeroPost = await heroresponse.json();
      const reswhowe = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-whoweposts?populate=*`
      );
      const WhowePost = await reswhowe.json();

      const reswhycare = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-whycareposts?populate=*`
      );
      const WhyCarePost = await reswhycare.json();

      const responseblog = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-blogsposts?populate=*`
      );
      const BlogsPost = await responseblog.json();

      const missions = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-missionsposts?populate=*`
      );
      const MissionPosts = await missions.json();

      const response = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-testimonialposts?populate=*`
      );
      const TestimonialPage = await response.json();

      return {
            props: {
                  HeroPost,
                  WhowePost,
                  WhyCarePost,
                  BlogsPost,
                  MissionPosts,
                  TestimonialPage,
            },
      };
}
export default HomePage;
