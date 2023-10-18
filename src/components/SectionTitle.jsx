import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className=" text-5xl font-semibold  text-center mt-3 text-[#471d6b] uppercase">
        {children}
      </h1>
      <span className=" h-1 w-56 bg-[#471d6b]"></span>
      <span className=" h-1 w-40 bg-[#471d6b]"></span>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
