import { useState, useEffect } from "react";

const PopularItems = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://camiestas-futbol.effectstudios.co/api/v1/popular-products"
    ).then((res) =>
      res.json().then((data) => {
        setData(data.products.data);
      })
    );
  }, []);
  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl md:text-3xl py-5">
        MOST POPULAR T-SHIRTS
      </h1>
      <div className="flex gap-10 w-11/12  whitespace-nowrap overflow-x-scroll p-5">
        {data?.map((card) => (
          <div key={card.id} className="w-96 h-auto">
            <div className="relative">
              <img
                src={card.gallery[0].image}
                alt=""
                className="object-contain h-72"
              />
              <button className="absolute bottom-14 text-white left-5 bg-greenBtnColor py-2 px-4 rounded">
                Save 67%
              </button>
            </div>
            <div className="border w-72 overflow-hidden">
              <p className="font-light p-3  px-5 text-sm text-center">
                {card.product_name}
              </p>
              <div className="flex items-center  gap-3 p-3">
                <p className="font-bold text-2xl">$30.00</p>
                <p className="text-red-500 line-through text-sm">$89.95</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div></div>
      </div>
    </div>
  );
};

export default PopularItems;
