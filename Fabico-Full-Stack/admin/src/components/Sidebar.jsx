import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">

        {/* Add Items */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l
             transition-colors duration-200
             ${isActive ? "bg-[#E0E0E0] border-[#C0C0C0]" : "hover:bg-gray-100"}`
          }
        >
          <img
            className="w-6 h-6"
            src={assets.add_icon}
            alt="Add Icon"
          />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        {/* List Items */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l
             transition-colors duration-200
             ${isActive ? "bg-[#E0E0E0] border-[#C0C0C0]" : "hover:bg-gray-100"}`
          }
        >
          <img
            className="w-6 h-6"
            src={assets.order_icon}
            alt="List Icon"
          />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        {/* Orders */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l
             transition-colors duration-200
             ${isActive ? "bg-[#E0E0E0] border-[#C0C0C0]" : "hover:bg-gray-100"}`
          }
        >
          <img
            className="w-6 h-6"
            src={assets.order_icon}
            alt="Orders Icon"
          />
          <p className="hidden md:block">Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
