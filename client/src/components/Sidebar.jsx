import { categories } from "../utils/data";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";

// import Logo from "../assets/logo.png";
import Logo from "../assets/camera.svg";
const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 easy-in-out capitalize";
const isActiveStyle =
  " flex items-center px-5 gap-3  font-extrabold  border-r-2 border-black-2  transition-all duration-200 easy-in-out capitalize";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => closeToggle && closeToggle(false);

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          onClick={handleCloseSidebar}
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
        >
          <img src={Logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl font-medium">
            Discover Categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              key={category.name}
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
            >
              <img
                className="w-8 h-8 rounded-full shadow-sm"
                src={category.image}
                alt=""
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          className="  flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
          to={`user-profile/${user._id}`}
        >
          <img
            src={user.image}
            className="h-10 w-10 rounded-full"
            alt="user-profile"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
