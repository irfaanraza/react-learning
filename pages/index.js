import Herosection from "../components/common/Herosection";
import WhoWeAre from "../components/WhoWeAre";
import WhyYouShouldCare from "../components/WhyYouShouldCare";
import OurBlogs from "../components/OurBlogs";
import Missions from "../components/Missions";
import OurTestimonials from "../components/OurTestimonials";
export default function Home({ HomePageposts }) {
      return (
            <>
                  <HomePage />
                  {/* <Herosection
                        title='To Achieve Business Success'
                        caption='In an Environment of Accelerating Change We Weed
                              To Think Differently'
                  />
                  <WhoWeAre
                        title='Who We Are'
                        caption='15'
                        content='To Think Differently, First We Need To Think'
                        captiontitle='years based in Rosedale  '
                  />
                  <WhyYouShouldCare title='Why You Should Care?' />
                  <OurBlogs />
                  <Missions />
                  <OurTestimonials
                        title='Our Testimonials'
                        caption='Mike Wardlaw'
                        captiontitle='Managing Director, Babcock (NZ), Ltd'
                        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error,'
                  /> */}
            </>
      );
}
export async function getServerSideProps() {
      const res = await fetch("http://localhost:1337/api/homepages");
      const HomePageposts = await res.json();
      console.log("data fetching:", HomePageposts);
      return {
            props: {
                  HomePageposts,
            },
      };
}
