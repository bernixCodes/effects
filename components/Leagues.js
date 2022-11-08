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
    <div className="p-5 m-8 md:m-0">
      <h1 className="font-bold text-2xl md:text-3xl py-5">COUNTRY LEAGUES</h1>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-5 place-items-center ">
        {data?.map((card) => (
          <div key={card.id} className="hover:scale-105">
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
