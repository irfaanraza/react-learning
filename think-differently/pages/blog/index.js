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
                  <OurTestimonials />
            </>
      );
};
export default BlogPage;
