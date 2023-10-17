import PropTypes from "prop-types";

const Button = ({ children, ...argument }) => {
  return (
    <button
      {...argument}
      className=" bg-violet-800 text-white  py-2 px-3 rounded-sm">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
