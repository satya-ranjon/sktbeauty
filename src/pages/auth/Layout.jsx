import PropTypes from "prop-types";
import useTheme from "../../hooks/useTheme";

const Layout = ({ title, children }) => {
  const { dark } = useTheme();
  return (
    <div
      className={`${
        dark ? "bg-zinc-800" : "bg-[#f6eeff]"
      } flex min-h-full flex-col justify-center px-6 py-12 lg:px-8`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Layout;
