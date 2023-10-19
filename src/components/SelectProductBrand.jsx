import { BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import PropTypes from "prop-types";
import useProductBrand from "../hooks/useProductBrand";

const SelectProductBrand = ({ getValue = () => {}, label, reset }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const [data] = useProductBrand();

  const dropdownRef = useRef(null);

  const resetSelect = () => {
    setSelected(null);
    setDropdownIsOpen(false);
  };

  useEffect(() => {
    setSelected(null);
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
        className="flex justify-center items-center  cursor-pointer bg-white rounded-md border-0  text-violet-950 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6">
        <div
          className={`w-full  p-2 flex flex-wrap justify-start gap-3 items-center text-zinc-400 ${
            dropdownIsOpen && !selected && "p-5"
          }`}>
          {!dropdownIsOpen && !selected && label}

          <span className=" text-violet-950"> {selected?.name}</span>
        </div>
        <div className={`px-3 ${dropdownIsOpen && " rotate-180"}`}>
          <BsChevronDown />
        </div>
      </div>
      {dropdownIsOpen && (
        <div className="shadow-xl absolute py-2  left-0 right-0 max-h-60 bg-white overflow-y-scroll z-50">
          <div className="flex justify-start items-start flex-col">
            <div
              onClick={resetSelect}
              className={`w-full py-2 px-4 flex justify-between items-center cursor-pointer border-b-2`}>
              <span>Select Brand Name</span>
            </div>
            {data?.map((item) => {
              return (
                <div
                  onClick={() => handelSelected(item)}
                  key={item._id}
                  className={`w-full py-2 px-4 flex justify-between items-center cursor-pointer hover:bg-violet-200 duration-300 transition-colors ${
                    selected?._id === item?._id && "bg-violet-200"
                  }`}>
                  <span>{item.name}</span>
                  {selected?._id === item?._id && <AiOutlineCheck />}
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
};

export default SelectProductBrand;
