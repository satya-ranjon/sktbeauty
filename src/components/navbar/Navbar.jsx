import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { LiaUser } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import SubNav from "./SubNav";
import { useLayoutEffect, useState } from "react";
import useDisplay from "../../hooks/useDisplay";

const menu = [
  { link: "/", label: "HOME" },
  { link: "/add-product", label: "ADD PRODUCT" },
  { link: "/my-cart", label: "MY CART" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(true);

  const [windowWidth] = useDisplay();

  useLayoutEffect(() => {
    if (windowWidth >= 768) {
      setOpen(true);
    }
    if (windowWidth <= 425) {
      setOpen(false);
    }
  }, [windowWidth]);

  return (
    <>
      <div className="bg-[#471d6b]  text-white border-b-[1px] border-b-violet-800">
        <div className=" container mx-auto flex justify-between items-center py-5 font-normal text-md px-4 ">
          <Logo />
          <FaBarsStaggered
            className=" text-xl cursor-pointer md:hidden"
            onClick={() => setOpen(!isOpen)}
          />
          {isOpen && (
            <div
              className={`${
                windowWidth <= 425 && "absolute"
              } top-0 bottom-0  w-64 md:w-fit right-0  bg-[#471d6b]`}>
              <button
                onClick={() => setOpen(!isOpen)}
                className=" md:hidden p-3 bg-[#b995d960] m-3 rounded-sm">
                <AiOutlineClose className=" text-xl" />
              </button>
              <div className="h-full w-full flex md:flex-row  gap-8 flex-col justify-start mt-10 md:mt-0 md:justify-center items-center">
                {menu.map((item) => (
                  <NavLink
                    key={item.link}
                    to={item.link}
                    className={({ isActive }) =>
                      `${isActive && "text-[#B995D9]"}  font-semibold `
                    }>
                    {item.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${
                      isActive && "text-[#B995D9]"
                    }   flex justify-center items-center gap-2 md:hidden `
                  }>
                  <span>LOGIN</span>
                  <LiaUser />
                </NavLink>
              </div>
            </div>
          )}

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${
                isActive && "text-[#B995D9]"
              }   md:flex justify-center items-center gap-2 hidden `
            }>
            <span>LOGIN</span>
            <LiaUser />
          </NavLink>
        </div>
      </div>
      <SubNav />
    </>
  );
};

export default Navbar;
