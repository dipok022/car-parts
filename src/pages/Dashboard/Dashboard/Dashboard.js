import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [useMemu, setUseMenu] = useState(false);

  console.log(useMemu);

  const handelClick = () => {
    setUseMenu(!useMemu);
  };
  return (
    <div style={{ height: "100vh" }} className="flex truncate">
      <div
        className={`${
          useMemu ? "left-0" : "-left-52"
        } " bg-gray-900 pt-12 absolute lg:static h-full px-8 truncate"`}
      >
        <div>
          <ul className="text-white text-md">
            <li className="mb-4">
              <Link to="myProfile">My Profile</Link>
            </li>
            <li className="mb-4">
              <Link to="">Make Admin</Link>
            </li>
            <li className="mb-4">
              <Link to="">Manage All Orders</Link>
            </li>
            <li className="mb-4">
              <Link to="">Manage Products</Link>
            </li>
          </ul>
        </div>
        <div className="absolute lg:static top-0 lg:hidden dashboard-memu text-white py-2 px-4 bg-gray-900">
          <label className=" swap swap-rotate">
            <input type="checkbox" onClick={() => handelClick()} />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
