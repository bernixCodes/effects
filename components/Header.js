import { MdOutlineLanguage } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsDot, BsWhatsapp } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { HiShoppingCart, HiUserCircle } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <>
      {/* HeaderTop */}
      <div className="bg-headerColor text-white flex items-center justify-between ">
        <div className="bg-lanBg flex items-center gap-2 p-2  lg:px-8">
          <MdOutlineLanguage />
          <p>EN</p>
          <IoMdArrowDropdown />
        </div>
        <div className="flex items-center gap-2 ">
          <p>SALES BEGIN</p>
          <BsDot className="hidden md:block" />
          <p className="hidden md:block ">FREE SHIPPING ON ALL ORDERS</p>
        </div>

        <div className="flex items-center gap-2 bg-greenBtnColor p-2  md:px-8 ">
          <BsWhatsapp />
          <p>Chat with us</p>
        </div>
      </div>
      {/* HeaderBottom large*/}
      <div className=" hidden md:flex items-center ">
        <div className=" hidden md:flex h-24  bg-yellowColor w-32 "></div>
        <div className="flex flex-col flex-auto">
          <div className="flex items-center justify-between ">
            <div>
              <div
                className="flex items-center gap-2 px-8 cursor-pointer"
                onClick={() => setOpenDropDown(!openDropDown)}
              >
                <p className="sm:text-center"> All Categories</p>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
              <span className="absolute p-2 z-10 cursor-pointer bg-slate-100">
                <ul className={openDropDown ? "h-max" : "hidden"}>
                  <li className="hover:bg-slate-300 px-7 py-2 ">T-Shirts</li>
                  <li className="hover:bg-slate-300 px-7 py-2 ">Tracksuits</li>
                </ul>
              </span>
            </div>
            <div className="flex flex-1 gap-16 mx-7">
              <input
                className="px-5 outline-none md:flex-1"
                placeholder="What are you looking for?"
              />
              <div className="flex items-center my-2">
                <button className="hidden md:block bg-yellowColor px-5 py-2 font-medium">
                  Search
                </button>
                <span className=" rounded-full  md:rounded-sm bg-headerColor  text-white py-3 px-3">
                  <RiSearch2Line />
                </span>
              </div>
            </div>
            <div className=" hidden md:flex md:w-44">
              <div className="text-2xl px-10">
                <HiShoppingCart />
              </div>
              <div className=" flex items-center">
                <HiUserCircle className="text-2xl" />
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>

          <div className="flex items-center px-8 cursor-pointer mt-1">
            <ul className="flex md:gap-5 lg:gap-16  ">
              <li>Home</li>
              <li className="flex gap-2 items-center ">
                <p>T-Shirts</p>
                <IoMdArrowDropdown />
              </li>
              <li className="flex md:gap-2 items-center ">
                <p>NBA</p>
                <IoMdArrowDropdown />
              </li>
              <li className="flex gap-2 items-center ">
                <p>Tracksuits</p>
                <IoMdArrowDropdown />
              </li>
              <li>
                <div className="flex gap-2 items-center ">
                  <p>Product Delivery</p>
                  <BsDot />
                  <p>1-2 days</p>
                </div>
              </li>
              <li>Contact</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>
      </div>
      {/* HeaderBottom small*/}
      <div className=" flex md:hidden items-center justify-between p-4">
        <div className="flex gap-5 text-xl">
          <AiOutlineMenu />
          <RiSearch2Line />
        </div>
        <div className="flex gap-5 text-2xl">
          <HiShoppingCart />
          <div className="flex gap-1 items-center">
            <HiUserCircle className="text-2xl" />
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
