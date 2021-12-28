import Herosection from "/components/common/Herosection";
import OurTestimonials from "/components/OurTestimonials";
import Missions from "/components/Missions";
import WhoWeAre from "/components/WhoWeAre";
import WhyYouShouldCare from "/components/WhyYouShouldCare";
import OurBlogs from "/components/OurBlogs";
export default function Home({
      HeroPost,
      WhowePost,
      WhyCarePost,
      BlogOne,
      BlogTwo,
      BlogThree,
      MissionPost1,
      MissionPost2,
      MissionPost3,
      TestimonialPage,
}) {
      let herodata = HeroPost;
      console.log("data from herosection:", herodata);
      let Whowe = WhowePost;
      let Whycare = WhyCarePost;
      let blogone = BlogOne;
      let blogtwo = BlogTwo;
      let blogthree = BlogThree;
      let mission1 = MissionPost1;
      let mission2 = MissionPost2;
      let mission3 = MissionPost3;
      let data = TestimonialPage;
      console.log("data:", herodata);
      const TestimonialPost = Object.values(data);
      TestimonialPost[0].attributes.title;
      const Post1 = Object.values(mission1);
      Post1[0].attributes.title;
      const Post2 = Object.values(mission2);
      Post2[0].attributes.title;
      const Post3 = Object.values(mission3);
      Post3[0].attributes.title;
      const BlogOneData = Object.values(blogone);
      BlogOneData[0].attributes.title;
      const BlogTwoData = Object.values(blogtwo);
      BlogTwoData[0].attributes.title;
      const BlogThreeData = Object.values(blogthree);
      BlogThreeData[0].attributes.title;
      const WhyCareData = Object.values(Whycare);
      WhyCareData[0].attributes.title;
      const WhoweData = Object.values(Whowe);
      WhoweData[0].attributes.title;
      const Heropost = Object.values(herodata);
      Heropost[0].attributes.title;

      console.log(
            "I am from Home :",
            WhyCareData[0].attributes.image.data.attributes.url
      );

      return (
            <>
                  <Herosection
                        title={Heropost[0].attributes.herotitle}
                        caption={Heropost[0].attributes.herosubtitle}
                  />
                  <WhoWeAre
                        title={WhoweData[0].attributes.title}
                        content={WhoweData[0].attributes.content}
                  />
                  <WhyYouShouldCare
                        title={WhyCareData[0].attributes.title}
                        content={WhyCareData[0].attributes.content}
                        image={
                              WhyCareData[0].attributes.image.data.attributes
                                    .url
                        }
                  />
                  <OurBlogs
                        title={BlogOneData[0].attributes.title}
                        titleTwo={BlogTwoData[0].attributes.titleTwo}
                        titleThree={BlogThreeData[0].attributes.titleThree}
                        subtitle={BlogOneData[0].attributes.subtitle}
                        subtitleTwo={BlogTwoData[0].attributes.subtitleTwo}
                        subtitleThree={
                              BlogThreeData[0].attributes.subtitleThree
                        }
                        content={BlogOneData[0].attributes.content}
                        contentTwo={BlogTwoData[0].attributes.contentTwo}
                        contentThree={BlogThreeData[0].attributes.contentThree}
                  />
                  <Missions
                        title1={Post1[0].attributes.title1}
                        title2={Post2[0].attributes.title2}
                        title3={Post3[0].attributes.title3}
                        content1={Post1[0].attributes.content1}
                        content2={Post2[0].attributes.content2}
                        content3={Post3[0].attributes.content3}
                  />
                  <OurTestimonials
                        title={TestimonialPost[0].attributes.title}
                        subtitle={TestimonialPost[0].attributes.subtitle}
                        description={TestimonialPost[0].attributes.description}
                        content={TestimonialPost[0].attributes.content}
                        subtitle={TestimonialPost[0].attributes.subtitle}
                  />
            </>
      );
}

export async function getStaticProps() {
      const heroresponse = await fetch(
            `${process.env.STRAPI_API_URL}/api/herosection`
      );
      const HeroPost = await heroresponse.json();
      const reswhowe = await fetch(
            `${process.env.STRAPI_API_URL}/api/whoweare`
      );
      const WhowePost = await reswhowe.json();

      const reswhycare = await fetch(
            `${process.env.STRAPI_API_URL}/api/whycare?populate=*`
      );
      const WhyCarePost = await reswhycare.json();

      const resblogone = await fetch(
            `${process.env.STRAPI_API_URL}/api/ourblog`
      );
      const BlogOne = await resblogone.json();

      const resblogtwo = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-blog-two`
      );
      const BlogTwo = await resblogtwo.json();

      const resblogthree = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-blog-three`
      );
      const BlogThree = await resblogthree.json();

      const missionone = await fetch(
            `${process.env.STRAPI_API_URL}/api/missionspost`
      );
      const MissionPost1 = await missionone.json();

      const missiontwo = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-mission-two`
      );
      const MissionPost2 = await missiontwo.json();

      const missionthree = await fetch(
            `${process.env.STRAPI_API_URL}/api/home-mission-three`
      );
      const MissionPost3 = await missionthree.json();

      const response = await fetch(
            `${process.env.STRAPI_API_URL}/api/ourtestimonial`
      );
      const TestimonialPage = await response.json();

      return {
            props: {
                  HeroPost,
                  WhowePost,
                  WhyCarePost,
                  BlogOne,
                  BlogTwo,
                  BlogThree,
                  MissionPost1,
                  MissionPost2,
                  MissionPost3,
                  TestimonialPage,
            },
      };
}
