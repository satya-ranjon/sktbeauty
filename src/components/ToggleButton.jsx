import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

const ToggleButton = ({ toggle = false, ...argument }) => {
  return (
    <div className=" cursor-pointer" {...argument}>
      {toggle ? (
        <MdLightMode className=" text-2xl " />
      ) : (
        <MdOutlineDarkMode className=" text-2xl" />
      )}
    </div>
  );
};

export default ToggleButton;
