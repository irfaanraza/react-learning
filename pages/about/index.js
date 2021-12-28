import BusinessHistory from "/components/BusinessHistory";
import Herosection from "/components/common/Herosection";
import Missions from "/components/Missions";
import OurTestimonials from "/components/OurTestimonials";
import WhoWeAre from "/components/WhoWeAre";
import WhyYouShouldCare from "/components/WhyYouShouldCare";

const AboutPage = ({
      AboutTestimonialPage,
      HeroSectionpost,
      Whowearepost,
      Whycarepost,
      Businesspost,
      Missionpost1,
      Missionpost2,
      Missionpost3,
      Businesspost2,
}) => {
      let data = HeroSectionpost;
      let aboutt = AboutTestimonialPage;
      let whowe = Whowearepost;
      let whycare = Whycarepost;
      let businessp1 = Businesspost;
      let m1 = Missionpost1;
      let m2 = Missionpost2;
      let m3 = Missionpost3;
      let businessPost2 = Businesspost2;
      const BusinessPost = Object.values(businessPost2);

      const posts = Object.values(data);
      posts[0].attributes.title;
      const abouttposts = Object.values(aboutt);
      abouttposts[0].attributes.title;
      const whowepost = Object.values(whowe);
      whowepost[0].attributes.title;
      const whypost = Object.values(whycare);
      whypost[0].attributes.title;
      const business = Object.values(businessp1);
      business[0].attributes.title;
      const postone = Object.values(m1);
      postone[0].attributes.title;
      const posttwo = Object.values(m2);
      posttwo[0].attributes.title;
      const postthree = Object.values(m3);
      postthree[0].attributes.title;

      console.log(
            "Business history page data:",
            business[0].attributes.contentOne
      );

      return (
            <>
                  <Herosection
                        title={posts[0].attributes.herotitle}
                        caption={posts[0].attributes.herosubtitle}
                  />
                  <WhoWeAre
                        title={whowepost[0].attributes.title}
                        content={whowepost[0].attributes.content}
                        img={whowepost[0].attributes.image.data.attributes.url}
                  />
                  <WhyYouShouldCare
                        title={whypost[0].attributes.title}
                        content={whypost[0].attributes.content}
                        img={whypost[0].attributes.image.data.attributes.url}
                  />
                  <BusinessHistory
                        titleOne={business[0].attributes.titleOne}
                        SubtitleOne={business[0].attributes.SubtitleOne}
                        ContentOne={business[0].attributes.contentOne}
                        description={BusinessPost[0].attributes.description}
                        Content={BusinessPost[0].attributes.content}
                  />
                  <Missions
                        title1={postone[0].attributes.title}
                        title2={posttwo[0].attributes.title}
                        title3={postthree[0].attributes.title}
                        content1={postone[0].attributes.content}
                        content2={posttwo[0].attributes.content}
                        content3={postthree[0].attributes.content}
                  />
                  <OurTestimonials
                        title={abouttposts[0].attributes.title}
                        caption={abouttposts[0].attributes.subtitle}
                        captiontitle={abouttposts[0].attributes.description}
                        content={abouttposts[0].attributes.content}
                        img={
                              abouttposts[0].attributes.image.data.attributes
                                    .url
                        }
                  />
            </>
      );
};

export async function getStaticProps() {
      const res = await fetch(`${process.env.STRAPI_API_URL}/api/herosection`);
      const HeroSectionpost = await res.json();
      const resp = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-testimonial?populate=*`
      );
      const AboutTestimonialPage = await resp.json();
      const responsewhoweare = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-whowe?populate=*`
      );
      const Whowearepost = await responsewhoweare.json();
      const responsewhycare = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-whycare?populate=*`
      );
      const Whycarepost = await responsewhycare.json();
      const responsebusiness = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-business`
      );
      const Businesspost = await responsebusiness.json();

      const resbusiness = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-businesspost`
      );
      const Businesspost2 = await resbusiness.json();

      const responsemone = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-mission`
      );
      const Missionpost1 = await responsemone.json();
      const responsemtwo = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-mission-two`
      );
      const Missionpost2 = await responsemtwo.json();
      const responsemthree = await fetch(
            `${process.env.STRAPI_API_URL}/api/about-mission-three`
      );
      const Missionpost3 = await responsemthree.json();
      return {
            props: {
                  HeroSectionpost,
                  AboutTestimonialPage,
                  Whowearepost,
                  Whycarepost,
                  Businesspost,
                  Missionpost1,
                  Missionpost2,
                  Missionpost3,
                  Businesspost2,
            },
      };
}
export default AboutPage;
