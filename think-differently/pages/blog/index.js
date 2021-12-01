import { CardComponent } from "../components/CardComponent";
import { CardList } from "../components/CardList";
import { Herosection } from "../components/common/Herosection";
import { OurTestimonials } from "../components/OurTestimonials";

const BlogPage = () => {
      return (
            <>
                  <Herosection
                        title='Recent Blogs'
                        caption='How Do We Get Started'
                  />
                  <CardList />
                  <OurTestimonials
                        title='Our Testimonials'
                        caption='Mike Wardlaw'
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
export default BlogPage;
