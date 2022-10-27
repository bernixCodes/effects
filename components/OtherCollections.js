import { useState, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";

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
    <div className="p-5">
      <h1 className="font-bold text-3xl py-5">COUNTRY LEAGUES</h1>
      <div className="flex flex-wrap gap-8 items-center justify-center  ">
        {data?.map((card) => (
          <div key={card.id} className="">
            {card.image && (
              <div className="h-60  md:h-80 overflow-hidden relative">
                <img
                  src={card.image}
                  alt=""
                  className="object-cover h-52 md:h-72 w-80 md:w-96 "
                />
                <div className="absolute bottom-8 flex items-center justify-between bg-slide w-full cursor-pointer">
                  <p className="  font-light text-left  text-sm text-white px-2">
                    {card.slug}
                  </p>
                  <button className="bg-yellowColor  px-5 py-3">
                    <IoMdArrowDropright />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCollections;
