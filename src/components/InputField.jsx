import PropTypes from "prop-types";

const InputField = ({ label, textarea = false, ...argument }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-violet-950 uppercase">
        {label}
      </label>
      <div className="mt-2">
        {!textarea && (
          <input
            {...argument}
            placeholder={label}
            id={label}
            type="text"
            className=" px-2 block w-full rounded-md border-0 py-1.5 text-violet-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
          />
        )}
        {textarea && (
          <textarea
            {...argument}
            placeholder={label}
            id={label}
            type="text"
            className=" h-28 px-2 block w-full rounded-md border-0 py-1.5 text-violet-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
          />
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  textarea: PropTypes.bool,
};

export default InputField;
