import Head from "next/head";
import Header from "../components/Header";
import "@fontsource/montserrat";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCard from "../components/HeroCard";
import PopularItems from "./../components/PopularItems";
import Leagues from "../components/Leagues";

export const getStaticProps = async () => {
  const result = await fetch(
    "https://camiestas-futbol.effectstudios.co/api/v1/banner"
  );
  const data = await result.json();
  return {
    props: { banners: data.banners.data },
  };
};

export default function Home({ banners }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div>
      <Head>
        <title>Effects | Landing Page</title>
        <meta name="description" content="Landing Page for Effect Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* Header */}
        <Header />
        {/* Hero */}
        <div className=" m-7 relative ">
          <Slider {...settings}>
            {banners.map((banner) => (
              <div
                key={banner.id}
                className=" w-full h-40 md:h-96 overflow-hidden"
              >
                <div className="absolute">
                  <div
                    className="text-xl md:text-2xl w-72 md:fit text-white font-semibold m-5"
                    dangerouslySetInnerHTML={createMarkup(banner.content)}
                  ></div>
                </div>
                <div className="absolute bottom-1 -left-20">
                  <button className=" text-white">{banner.btn_text}</button>
                </div>
                <img
                  src={banner.image}
                  className="object-contain  w-full overflow-hidden  "
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* HeroCards */}
        <HeroCard />

        {/* Popular T-Shirts */}
        <PopularItems />

        {/* Country Leagues */}
        <Leagues />
      </div>
    </div>
  );
}
