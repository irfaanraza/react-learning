import { Herosection } from "../components/common/Herosection";
import { GetInTouch } from "../components/GetInTouch";
import { OurTestimonials } from "../components/OurTestimonials";

const ContactPage = () => {
      return (
            <>
                  <Herosection
                        title='Contact Us'
                        caption='How Do We Get Started'
                  />
                  <GetInTouch />
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
export default ContactPage;
