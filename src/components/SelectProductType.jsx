import { BsChevronDown } from "react-icons/bs";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import PropTypes from "prop-types";
import useTheme from "../hooks/useTheme";

const SelectProductType = ({ types, getValue, label, reset, initialData }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const { dark } = useTheme();

  useEffect(() => {
    if (initialData) {
      setSelected(initialData);
    }
  }, [initialData]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    getValue(selected);
  }, [selected]);

  useEffect(() => {
    setSelected([]);
  }, [reset]);

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
      <div
        className={`text-sm font-medium leading-6  uppercase ${
          dark ? "text-zinc-200" : " text-violet-950"
        }`}>
        {label}
      </div>
      <div
        onClick={() => setDropdownIsOpen(true)}
        className={`${
          dark ? "text-zinc-200 bg-zinc-700" : " text-violet-950 bg-white"
        } flex justify-center items-center  cursor-pointer  rounded-md border-0   shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6`}>
        <div
          className={`w-full  p-2 flex flex-wrap text-zinc-400 justify-start gap-3 items-center ${
            dropdownIsOpen && selected?.length <= 0 && "p-5"
          }`}>
          {!dropdownIsOpen && selected?.length === 0 && label}
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
        <div className={`px-3 ${dropdownIsOpen && " rotate-180"}`}>
          <BsChevronDown />
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
            {types?.map((item) => {
              const findSelectedType = selected?.find((i) => i.id === item.id);

              return (
                <div
                  onClick={() => handelSelected(item)}
                  key={item.id}
                  className={`w-full py-2 px-4 flex justify-between items-center cursor-pointer ${
                    dark ? "hover:bg-zinc-700 " : "hover:bg-violet-200"
                  } duration-300 transition-colors ${
                    findSelectedType &&
                    (dark ? " bg-zinc-700" : "bg-violet-200")
                  }`}>
                  <span
                    className={`${
                      dark ? "text-zinc-200" : " text-violet-950"
                    }`}>
                    {item.name}
                  </span>
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
  label: PropTypes.string,
  reset: PropTypes.bool,
  initialData: PropTypes.array,
};

export default SelectProductType;
