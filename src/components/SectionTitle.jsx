import PropTypes from "prop-types";
import useTheme from "../hooks/useTheme";

const SectionTitle = ({ children }) => {
  const { dark } = useTheme();
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1
        className={`text-5xl font-semibold  text-center mt-3  uppercase ${
          dark ? "text-zinc-200" : " text-[#471d6b]"
        }`}>
        {children}
      </h1>
      <span
        className={`h-1 w-56  ${dark ? "bg-zinc-200" : "bg-[#471d6b]"}`}></span>
      <span
        className={`h-1 w-40  ${dark ? "bg-zinc-200" : "bg-[#471d6b]"}`}></span>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
