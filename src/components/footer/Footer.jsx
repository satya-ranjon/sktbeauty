import React from "react";
import { images } from "../../constant";
import { BsDot } from "react-icons/bs";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const menu = ["about us", "ur team", "faq", "maintenance mode", "contact"];

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${images.bgimg})` }}
      className=" py-10 bg-cover bg-no-repeat bg-center ">
      <div className=" container mx-auto px-5">
        {/* ---------Menu-------- */}

        <div className=" flex justify-center items-center w-full">
          <div className=" flex flex-wrap  justify-center gap-5 items-center   text-white font-semibold text-sm">
            {menu?.map((item, i) => (
              <React.Fragment key={i}>
                <Link
                  to="#"
                  className="hover:text-violet-400 duration-300 transition-colors cursor-pointer">
                  {item.toUpperCase()}
                </Link>
                <BsDot className=" text-violet-500" />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ---------Info-------- */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0  text-white font-normal text-sm mt-10">
          <div className=" flex flex-col gap-4 justify-center md:justify-start items-center md:items-start text-violet-200">
            <div className=" flex justify-start gap-2 items-center">
              <AiOutlinePhone className=" text-xl text-violet-200" />
              <h1 className="text-violet-200">0170000000</h1>
            </div>
            <div className=" flex justify-start gap-2 items-center">
              <GoLocation className=" text-xl" />
              <h1 className="">25 West 21th Street, Dhaka,BD</h1>
            </div>
            <div className=" flex justify-start gap-2 items-center">
              <AiOutlineMail className=" text-xl" />
              <h1 className="">info@skt.com</h1>
            </div>
            <div className=" flex justify-start gap-2 items-center">
              <IoMdTime className=" text-xl" />
              <h1 className="">Mon-Fri: 10:00 - 18:00</h1>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-4">
            <Logo />
            <div className="flex justify-center items-center gap-8 text-3xl text-violet-200">
              <Link to="#">
                <FaFacebookF className=" text-2xl" />
              </Link>
              <Link to="#">
                <AiOutlineTwitter />
              </Link>
              <Link to="#">
                <AiFillInstagram />
              </Link>
              <Link to="#">
                <AiFillYoutube />
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-3 justify-start items-center md:items-end text-center md:text-end">
            <div className=" w-[] text-sm  text-violet-200">
              Style too own civil out along. Perfectly offending attempted add
              arranging age gentleman. Get who uncommonly our expression ten
              increasing considered.
            </div>
            <button className=" uppercase  mt-3 hover:text-violet-400 duration-300 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
