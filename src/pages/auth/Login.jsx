import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import Layout from "./Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuthentication from "../../hooks/useAuthentication";

const Login = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { login, user } = useAuthentication();

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const { email, password } = data;
    setError(null);
    login(email, password)
      .then((result) => {
        setError(null);
        setSuccess(true);
        toast.success("You Have Successfully Login!");
        navigate(state ? state : "/");
      })
      .catch((error) => {
        setError("Your email and password doesn't match");
      });
  };

  if (user?.email) {
    return navigate("/");
  }
  return (
    <Layout title="Login in to your account ">
      <Form
        btnLabel="Sign in"
        handleSubmit={handleSubmit}
        success={success}
        error={error}
      />
      <p className="mt-10 text-center text-sm text-gray-500">
        If you don't have an account...
        <Link
          to="/registration"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Create Account
        </Link>
      </p>
    </Layout>
  );
};

export default Login;
