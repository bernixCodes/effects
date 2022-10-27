import { FaShippingFast } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";

const HeroCard = () => {
  const cardDetails = [
    {
      id: 1,
      title: "Secure Shipping",
      des: "on all orders",
      icon: <FaShippingFast />,
    },
    {
      id: 2,
      title: "Telephone",
      des: "+1 23 456 7890",
      icon: <BsFillTelephoneFill />,
    },
    {
      id: 3,
      title: "Chat WhatsApp",
      des: "Mon - Fri: 9:00 -21:00  ",
      icon: <BsWhatsapp />,
    },
    {
      id: 4,
      title: "Quality Guarantee",
      des: "Verified Purchase Reviews",
      icon: <AiFillCheckCircle />,
    },
  ];
  return (
    <div className="flex items-center gap-5  p-5 flex-wrap justify-center  cursor-pointer w-full">
      {cardDetails.map((cardDetail) => (
        <div
          key={cardDetail.id}
          className="bg-creamColor p-5 w-full  md:w-52 lg:w-96 "
        >
          <div className="bg-yellowColor text-left text-white w-fit p-3 rounded text-xl">
            {cardDetail.icon}
          </div>
          <div className="pt-2">
            <h2>{cardDetail.title}</h2>
            <p>{cardDetail.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
