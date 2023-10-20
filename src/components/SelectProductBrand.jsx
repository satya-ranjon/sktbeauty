import { BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import PropTypes from "prop-types";
import useProductBrand from "../hooks/useProductBrand";
import useTheme from "../hooks/useTheme";

const SelectProductBrand = ({
  getValue = () => {},
  label,
  reset,
  initialData,
}) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { dark } = useTheme();

  useEffect(() => {
    if (initialData) {
      setSelected(initialData);
    }
  }, [initialData]);

  const [data] = useProductBrand();

  const dropdownRef = useRef(null);

  const resetSelect = () => {
    setSelected(null);
    setDropdownIsOpen(false);
  };

  useEffect(() => {
    if (reset) {
      setSelected(null);
    }
  }, [reset]);

  const handelSelected = (value) => {
    setSelected(value);
    getValue(value);
    setDropdownIsOpen(false);
  };

  useOutsideClick(dropdownRef, () => {
    setDropdownIsOpen(false);
  });

  return (
    <div ref={dropdownRef} className=" relative">
      <div className="text-sm font-medium leading-6 text-violet-950 uppercase">
        {label}
      </div>
      <div
        onClick={() => setDropdownIsOpen(true)}
        className={`${
          dark ? "bg-zinc-700" : "bg-white text-violet-950 "
        } flex justify-center items-center  cursor-pointer  rounded-md border-0  shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6`}>
        <div
          className={`w-full  p-2 flex flex-wrap justify-start gap-3 items-center ${
            dark ? "text-zinc-200" : " text-zinc-400 "
          } ${dropdownIsOpen && !selected && "p-5"}`}>
          {!dropdownIsOpen && !selected?._id && label}

          <span className={`${dark ? "" : "text-violet-950 "}`}>
            {selected?.name}
          </span>
        </div>
        <div className={`px-3 ${dropdownIsOpen && " rotate-180"}`}>
          <BsChevronDown
            className={` ${dark ? " text-zinc-200" : "text-violet-800"}`}
          />
        </div>
      </div>
      {dropdownIsOpen && (
        <div
          className={`${
            dark
              ? "bg-zinc-800 z-50 text-zinc-200 border-[1px] border-b-zinc-200"
              : "bg-white z-50"
          }shadow-xl absolute py-2  left-0 right-0 max-h-60  overflow-y-scroll z-50`}>
          <div className="flex justify-start items-start flex-col">
            <div
              onClick={resetSelect}
              className={`w-full py-2 px-4 flex justify-between items-center cursor-pointer border-b-2`}>
              <span
                className={`${dark ? "text-zinc-200" : " text-violet-950"}`}>
                Select Brand Name
              </span>
            </div>
            {data?.map((item) => {
              return (
                <div
                  onClick={() => handelSelected(item)}
                  key={item._id}
                  className={`w-full py-2 px-4 flex justify-between items-center cursor-pointer ${
                    dark ? "hover:bg-zinc-700" : "hover:bg-violet-200"
                  } duration-300 transition-colors ${
                    selected?._id === item?._id &&
                    (dark ? "bg-zinc-700" : "bg-violet-200")
                  }`}>
                  <span
                    className={`${
                      dark ? "text-zinc-200" : " text-violet-950"
                    }`}>
                    {item.name}
                  </span>
                  {selected?._id === item?._id && (
                    <AiOutlineCheck
                      className={` ${
                        dark ? " text-zinc-200" : "text-violet-800"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

SelectProductBrand.propTypes = {
  getValue: PropTypes.func,
  label: PropTypes.string,
  reset: PropTypes.bool,
  initialData: PropTypes.object,
};

export default SelectProductBrand;
