import Head from "next/head";
import "@fontsource/montserrat";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCard from "../components/HeroCard";
import PopularItems from "./../components/PopularItems";
import Leagues from "../components/Leagues";
import OtherCollections from "./../components/OtherCollections";
import { HiShoppingBag } from "react-icons/hi";

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
    cssEase: "linear",
    adaptiveHeight: true,
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
        {/* Hero */}
        <div className=" m-7  ">
          <Slider {...settings}>
            {banners.map((banner) => (
              <div
                key={banner.id}
                className=" w-40 h-40 md:h-80 md:w-80 overflow-hidden relative"
              >
                <div className="absolute">
                  <div
                    className="text-xl md:text-2xl w-72 md:fit text-white font-semibold m-5"
                    dangerouslySetInnerHTML={createMarkup(banner.content)}
                  ></div>
                  <div className=" md:hidden ml-96 ">
                    <div className="flex items-center">
                      <button className="bg-slide w-fit border px-2 py-1 text-white text-sm">
                        {banner.btn_text}
                      </button>
                      <span className="bg-white p-2 ">
                        <HiShoppingBag />
                      </span>
                    </div>
                  </div>
                </div>

                <img
                  src={banner.image}
                  className="object-fill  w-full overflow-hidden  "
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

        {/* OtherCollections */}
        <OtherCollections />
      </div>
    </div>
  );
}
