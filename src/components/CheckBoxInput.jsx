import useTheme from "../hooks/useTheme";

const CheckBoxInput = ({ label, ...argument }) => {
  const { dark } = useTheme();
  return (
    <div className="flex items-center mb-4">
      <input
        {...argument}
        id={label}
        type="checkbox"
        value=""
        className="w-6 h-6 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={label}
        className={`ml-2 text-md font-medium ${
          dark ? "text-zinc-200" : " text-violet-950"
        }`}>
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;
