import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import SubNav from "./SubNav";
import { useLayoutEffect, useState } from "react";
import useDisplay from "../../hooks/useDisplay";
import NavRightMenu from "./NavRightMenu";
import ToggleButton from "../ToggleButton";
import useTheme from "../../hooks/useTheme";

const menu = [
  { link: "/", label: "HOME" },
  { link: "/add-product", label: "ADD PRODUCT" },
  { link: "/cart", label: "MY CART" },
  { link: "/shop", label: "SHOP" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  const [styled, setStyled] = useState(null);

  const { dark, toggleTheme } = useTheme();

  const handleTheme = () => {
    toggleTheme();
  };

  const [windowWidth, scrollY] = useDisplay();

  useLayoutEffect(() => {
    if (windowWidth >= 768) {
      setOpen(true);
    }
    if (windowWidth <= 425) {
      setOpen(false);
    }
  }, [windowWidth]);

  useLayoutEffect(() => {
    if (scrollY > 100 && windowWidth >= 768) {
      setStyled("fixed top-0 left-0 right-0 z-10 ");
      return;
    }
    setStyled(null);
  }, [scrollY]);

  return (
    <>
      <div
        className={`bg-[#471d6b]  text-white border-b-[1px] border-b-violet-800  ${styled}`}>
        <div className=" container mx-auto flex justify-between items-center py-5 font-normal text-md px-4 ">
          <Logo />
          <div className=" flex justify-start gap-8 md:pr-4 lg:hidden">
            <ToggleButton onClick={handleTheme} toggle={dark} />
            <FaBarsStaggered
              className=" text-xl cursor-pointer"
              onClick={() => setOpen(!isOpen)}
            />
          </div>
          {isOpen && (
            <div
              className={`${
                windowWidth <= 768 && "absolute"
              } top-0 bottom-0  w-64 lg:w-fit right-0  bg-[#471d6b] z-[9999]`}>
              <button
                onClick={() => setOpen(!isOpen)}
                className=" lg:hidden p-3 bg-[#b995d960] m-3 rounded-sm">
                <AiOutlineClose className=" text-xl" />
              </button>
              <div className="h-full w-full flex lg:flex-row  gap-8 flex-col justify-start mt-10 lg:mt-0 lg:justify-center items-center">
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
                <div className="  lg:hidden">
                  <NavRightMenu />
                </div>
              </div>
            </div>
          )}

          <div className=" hidden lg:flex items-center justify-start gap-4">
            <NavRightMenu />
            <ToggleButton onClick={handleTheme} toggle={dark} />
          </div>
        </div>
      </div>
      <SubNav />
    </>
  );
};

export default Navbar;
