import Herosection from "/components/common/Herosection";
import GetInTouch from "/components/GetInTouch";
import OurTestimonials from "/components/OurTestimonials";

const ContactPage = ({ ContactHero, ContactTestimonial, ContactDetails }) => {
      let Herodata = ContactHero;
      let TestimonialData = ContactTestimonial;
      let ContactData = ContactDetails;
      const Heropost = Object.values(Herodata);
      Heropost[0].attributes.title;
      const Testimonialpost = Object.values(TestimonialData);
      Testimonialpost[0].attributes.title;
      const Contactdetail = Object.values(ContactData);

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
                  <OurTestimonials
                        title={Testimonialpost[0].attributes.title}
                        caption={Testimonialpost[0].attributes.subtitle}
                        content={Testimonialpost[0].attributes.content}
                  />
            </>
      );
};

export async function getStaticProps() {
      const res = await fetch(`${process.env.STRAPI_API_URL}/api/contact-hero`);
      const ContactHero = await res.json();
      const responsetestimonial = await fetch(
            `${process.env.STRAPI_API_URL}/api/contact-testimonial`
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
