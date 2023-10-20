import { NavLink } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import { LiaUser } from "react-icons/lia";

const NavRightMenu = () => {
  const { user, logoutUser, loading } = useAuthentication();

  return (
    <div className=" flex flex-col md:flex-row justify-start gap-2 items-center">
      {user && !user.photoURL && !loading && (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {user?.email?.slice(0, 2)}
          </span>
        </div>
      )}
      {user?.photoURL && !loading && (
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src={user.photoURL}
          alt="photo"
        />
      )}
      {user?.displayName && !loading && <h1>{user.displayName}</h1>}
      {user && !loading && (
        <span
          className=" cursor-pointer font-semibold"
          onClick={() => logoutUser()}>
          Logout
        </span>
      )}
      {!user && (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${
              isActive && "text-[#B995D9]"
            }    justify-center items-center gap-2 flex `
          }>
          <span>LOGIN</span>
          <LiaUser />
        </NavLink>
      )}
    </div>
  );
};

export default NavRightMenu;
