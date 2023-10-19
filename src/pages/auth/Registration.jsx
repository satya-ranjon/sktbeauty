import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import Layout from "./Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuthentication from "../../hooks/useAuthentication";

const Registration = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { registration, updateUserProfile } = useAuthentication();

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const { email, password, name, url } = data;
    setError(null);

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setError("Provide valid email");
      return;
    } else if (password.length < 6) {
      setError("password is less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("password doesn't have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/.test(password)) {
      setError("password don't have a special character");
      return;
    }

    registration(email, password)
      .then((result) => {
        setError(null);

        if (name || url) {
          updateUserProfile(name, url);
        }
        setSuccess(true);
        toast.success("Your Account Create Successfully");
        navigate(state ? state : "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <Layout title="Create your account ">
      <Form
        btnLabel="Registration"
        handleSubmit={handleSubmit}
        success={success}
        error={error}
      />
      <p className="mt-10 text-center text-sm text-gray-500">
        If have an account...
        <Link
          to="/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Login
        </Link>
      </p>
    </Layout>
  );
};

export default Registration;
