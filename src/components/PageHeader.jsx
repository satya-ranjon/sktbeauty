import { Link } from "react-router-dom";
import { images } from "../constant";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const PageHeader = ({ title, currentPage }) => {
  return (
    <div style={{ backgroundImage: `url(${images.bgimg})` }} className=" py-10">
      <div className=" flex flex-col  justify-center items-center  text-white">
        <h1 className=" font-semibold text-3xl">{title}</h1>
        <div className=" flex justify-center items-center gap-4 mt-8 uppercase text-sm">
          <Link
            to="/"
            className="  hover:text-violet-200 duration-300 transition-colors">
            Home
          </Link>
          <IoIosArrowForward />
          <span>{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  currentPage: PropTypes.string,
};

export default PageHeader;
