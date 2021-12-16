import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";
import WhoWeAre from "/components//WhoWeAre";

const ProcessPage = () => {
      return (
            <>
                  <Herosection
                        title='Our Process'
                        caption='How do we get Started'
                  />
                  <WhoWeAre
                        title='Who We Are  '
                        captiontitle='years in the Rosedale'
                        caption='15'
                        content='Its All About You'
                  />
                  <OurTestimonials
                        title='How Does It Start'
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
export default ProcessPage;
