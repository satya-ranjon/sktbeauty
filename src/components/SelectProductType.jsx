import { BsChevronDown } from "react-icons/bs";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import PropTypes from "prop-types";

const SelectProductType = ({ types, getValue }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    getValue(selected);
  }, [selected]);

  const handelSelected = (value) => {
    const findSelectedType = selected?.find((i) => i.id === value.id);
    if (findSelectedType) return;

    setSelected((prev) => [...prev, value]);
  };

  const handleSelectRemove = (id) => {
    const newSelect = selected?.filter((item) => item.id !== id);
    setSelected(newSelect);
  };

  useOutsideClick(dropdownRef, () => {
    setDropdownIsOpen(false);
  });

  return (
    <div ref={dropdownRef} className=" relative">
      <div className="text-sm font-medium leading-6 text-violet-950 uppercase">
        Product Types
      </div>
      <div
        onClick={() => setDropdownIsOpen(true)}
        className="flex justify-center items-center  cursor-pointer bg-white rounded-md border-0  text-violet-950 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6">
        <div className="w-full  px-2 h-10 flex justify-start gap-3 items-center">
          {selected?.map((item) => (
            <div
              key={item.id}
              className=" bg-violet-600 px-2 py-1 text-xs text-white flex justify-center items-center gap-2 cursor-default">
              <span className=" ">{item.name}</span>
              <AiOutlineClose
                className=" cursor-pointer"
                onClick={() => handleSelectRemove(item.id)}
              />
            </div>
          ))}
        </div>
        <div className=" px-3">
          <BsChevronDown />
        </div>
      </div>
      {dropdownIsOpen && (
        <div className=" absolute py-2  left-0 right-0 max-h-60 bg-white overflow-y-scroll">
          <div className="flex justify-start items-start flex-col">
            {types?.map((item) => {
              const findSelectedType = selected?.find((i) => i.id === item.id);

              return (
                <div
                  onClick={() => handelSelected(item)}
                  key={item.id}
                  className={`w-full py-2 px-4 flex justify-between items-center cursor-pointer hover:bg-violet-200 duration-300 transition-colors ${
                    findSelectedType && "bg-violet-200"
                  }`}>
                  <span>{item.name}</span>
                  {findSelectedType && <AiOutlineCheck />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

SelectProductType.propTypes = {
  types: PropTypes.array.isRequired,
  getValue: PropTypes.func,
};

export default SelectProductType;