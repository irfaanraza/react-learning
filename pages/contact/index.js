import { Carousel } from "antd";
import Herosection from "/components/common/Herosection";
import GetInTouch from "/components/GetInTouch";
import OurTestimonials from "/components/OurTestimonials";

const ContactPage = ({ ContactHero, ContactTestimonial, ContactDetails }) => {
      const data = ContactTestimonial;
      const posts = data.data;

      console.log("from contact page:", posts);
      const Herodata = ContactHero;
      const ContactData = ContactDetails;
      const Contactdetail = Object.values(ContactData);

      // let ContactData = ContactDetails;
      const Heropost = Object.values(Herodata);

      return (
            <>
                  <Herosection
                        title={Heropost[0].attributes.title}
                        caption={Heropost[0].attributes.subtitle}
                  />
                  <GetInTouch
                        phone={Contactdetail[0].attributes.phone}
                        email={Contactdetail[0].attributes.email}
                        address={Contactdetail[0].attributes.address}
                  />
                  <Carousel autoplay className='carousel'>
                        {posts.map((post) => {
                              return (
                                    <OurTestimonials
                                          testimonial={post.attributes}
                                    />
                              );
                        })}
                  </Carousel>
            </>
      );
};

export async function getStaticProps() {
      const res = await fetch(`${process.env.STRAPI_API_URL}/api/contact-hero`);
      const ContactHero = await res.json();
      const responsetestimonial = await fetch(
            `${process.env.STRAPI_API_URL}/api/contact-testimonialposts?populate=*`
      );
      const ContactTestimonial = await responsetestimonial.json();
      const contactresponse = await fetch(
            `${process.env.STRAPI_API_URL}/api/contact-detail`
      );
      const ContactDetails = await contactresponse.json();

      return {
            props: {
                  ContactHero,
                  ContactTestimonial,
                  ContactDetails,
            },
      };
}

export default ContactPage;
