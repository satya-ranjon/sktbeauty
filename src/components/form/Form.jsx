import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SocialLogin from "./SocialLogin";
import { useLocation } from "react-router-dom";

const Form = ({ btnLabel, handleSubmit, success = false, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const { pathname } = useLocation();

  const handleFormData = (e) => {
    e.preventDefault();
    handleSubmit({ email, password, name, url });
  };

  useEffect(() => {
    if (success) {
      setEmail("");
      setPassword("");
      setName("");
      setUrl("");
    }
  }, [success]);
  return (
    <>
      <div className=" h-6 text-red-400">{error}</div>

      <form
        onSubmit={handleFormData}
        className="space-y-6"
        action="#"
        method="POST">
        {pathname == "/registration" && (
          <>
            <div className="relative float-label-input">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                id="name"
                className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
              />
              <label
                htmlFor="name"
                className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                Name ( Optional )
              </label>
            </div>
            <div className="relative float-label-input">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                id="urlimg"
                placeholder=""
                type="url"
                className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
              />
              <label
                htmlFor="urlimg"
                className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
                Img Url ( Optional )
              </label>
            </div>
          </>
        )}

        <div className="relative float-label-input">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
          />
          <label
            htmlFor="email"
            className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
            Email address
          </label>
        </div>
        <div className="relative float-label-input">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
          />
          <label
            htmlFor="email"
            className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
            Password
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {btnLabel ? btnLabel : "Sign in"}
          </button>
        </div>
      </form>

      <SocialLogin />
    </>
  );
};

Form.propTypes = {
  btnLabel: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  success: PropTypes.bool,
  error: PropTypes.string,
};
export default Form;
