import { useState, useEffect } from "react";

const Leagues = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://camiestas-futbol.effectstudios.co/api/v1/product-category"
    ).then((res) =>
      res.json().then((data) => {
        setData(data.categories.data);
      })
    );
  }, []);
  return (
    <div className="p-5">
      <h1 className="font-bold text-3xl py-5">COUNTRY LEAGUES</h1>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {data?.map((card) => (
          <div key={card.id} className="">
            <img
              src={card.image ? card.image : "/notFoung.jpg"}
              alt=""
              className="object-contain h-52 w-52"
            />
            <p className="font-light p-3 text-left px-5 text-sm ">
              {card.slug}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leagues;
