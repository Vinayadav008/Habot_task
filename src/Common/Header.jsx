import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/Logo.png";
function Header() {
  const [isNav, setIsNav] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-white fixed right-0 left-0 z-50 shadow-md">
      <div className=" flex justify-between items-center px-4 py-4 ">
        <div className="font-bold cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div
          className={`hidden md:flex gap-4 items-center font-normal text-sm `}
        >
          <p className="hidden sm:flex">Find Suppliers</p>
          <p className="hidden sm:flex">Find Service Tags</p>
          <button className="text-success font-medium border border-success rounded-md px-8 py-2 flex">
            Login <span className="hidden sm:flex">/ Sign Up</span>
          </button>
        </div>
        <div
          onClick={() => setIsNav(!isNav)}
          className="md:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z"
            />
          </svg>
        </div>
      </div>

      {/* Mobile View Navbar  */}
      <div
        className={` ${
          isNav
            ? "flex flex-col gap-2 p-2 px-8 transition -translate-y-0 ease-in-out duration-500"
            : "hidden"
        } md:hidden  font-normal text-sm `}
      >
        <p className="hidden sm:flex">Find Suppliers</p>
        <p className="hidden sm:flex">Find Service Tags</p>
        <div>
          <button className="text-success font-medium border border-success rounded-md px-8 py-2 flex">
            Login <span className="hidden sm:flex">/ Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
