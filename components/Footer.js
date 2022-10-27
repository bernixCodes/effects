import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import { MdDoubleArrow } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-footerColor p-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">
          <div>
            <h2 className="font-bold text-xl py-3">Main Menu</h2>
            <ul className="flex flex-col gap-3">
              <li>Home</li>
              <li>T-Shirts</li>
              <li>NBA</li>
              <li>Tracksuits</li>
              <li>Products Delivery 1-2 days</li>
              <li>Contact</li>
              <li>Reviews</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl py-3">Secondary Menu</h2>
            <ul className="flex flex-col gap-3">
              <li>Search</li>
              <li>Privacy policy</li>
              <li>Shipping Policy</li>
              <li>Returns Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl py-3">Subscribe</h2>
            <p className="w-64">
              Subscribe to our mailing list to receive the latest news.
            </p>

            <div className="flex bg-red items-center mt-4 border  w-max">
              <input
                type={"text"}
                placeholder="Email Address"
                className="outline-none bg-none w-full px-4"
              />
              <button className="bg-yellowColor p-3 -ml-1">
                <MdDoubleArrow />
              </button>
            </div>
          </div>
          <div className="md:ml-10 mb-4">
            <h2 className="font-bold text-xl py-3">Follow Us</h2>
            <div className="flex items-center gap-4 text-xl ">
              <span className="bg-headerColor p-2 rounded  text-white">
                <GrFacebookOption />
              </span>
              <span className="bg-headerColor p-2 rounded  text-white">
                <GrTwitter />
              </span>
              <span className="bg-headerColor p-2 rounded  text-white">
                <GrInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 border-t  py-2 flex md:flex-row flex-col items-center justify-between">
        <p className="p-5"> &copy; 2021 Jambulani . All rights reserved</p>
        <span>
          <img src="./footer-items.png" alt="" />
        </span>
      </div>
    </>
  );
};

export default Footer;
