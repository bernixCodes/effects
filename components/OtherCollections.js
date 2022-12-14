import { useState, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const OtherCollections = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://camiestas-futbol.effectstudios.co/api/v1/product-category?page=2"
    ).then((res) =>
      res.json().then((data) => {
        setData(data.categories.data);
      })
    );
  }, []);
  return (
    <div className="p-5 ">
      <h1 className="font-bold text-2xl md:text-3xl py-5">Other Collections</h1>
      {/* <div className="grid  grid-cols-2 md:grid-cols-3 gap-5 place-items-center "> */}
      <div className=" grid md:grid-cols-4 grid-cols-2  gap-5 w-full h-auto">
        {data?.map((card) => (
          <div className="flex" key={card.id}>
            {card.image && (
              <div>
                <img
                  src={card.image}
                  alt=""
                  className="object-fill h-80  w-96"
                />
                {/* <div className="absolute bottom-8 flex items-center justify-between bg-slide w-full cursor-pointer">
                  <p className="  font-light text-left  text-sm text-white px-2">
                    {card.slug}
                  </p>
                  <button className="bg-yellowColor  px-5 py-3">
                    <IoMdArrowDropright />
                  </button>
                </div> */}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* </div> */}

      <div className="md:mt-32 mt-10 grid md:grid-cols-2 gap-5 place-items-between w-full">
        <div className="relative bg-slide w-fit h-fit">
          <img src="./fig1.png" alt="" />
          <div className="absolute bottom-1 py-3 px-2 text-white ">
            <h2 className="font-bold text-xl mb-3">PERSONALIZATION</h2>
            <p className="pr-8 mb-3">
              Put a custom print on the football shirt of your choice with our
              Personalization service.
            </p>
            <p>
              Tell us what name, what number and we put it.{" "}
              <span className="font-bold">FREE!!</span>
            </p>
          </div>
        </div>
        <div className="relative bg-slide w-fit h-fit">
          <img src="./fig.png" alt="" />
          <div className="absolute bottom-1 py-3 px-2 text-white ">
            <h2 className="font-bold text-xl mb-3">SOCIAL NETWORKS</h2>
            <p className="pr-8 mb-3">
              Share your shirts with the #CamiestasFutbolSpainn
            </p>
            <div className="flex items-center gap-4 text-xl ">
              <span className="text-headerColor p-2 rounded  bg-white">
                <GrFacebookOption />
              </span>
              <span className="text-headerColor p-2 rounded  bg-white">
                <GrTwitter />
              </span>
              <span className="text-headerColor p-2 rounded  bg-white">
                <GrInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCollections;
