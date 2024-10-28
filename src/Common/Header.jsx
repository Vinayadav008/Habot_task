import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Images/Logo.png'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()
  return (
    <div className="bg-white">
      <div className=" flex justify-between items-center px-4 py-4 ">
        <div className="font-bold cursor-pointer" onClick={()=>navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className={`flex gap-4 items-center font-normal text-sm `}>
          <p className="hidden sm:flex">Find Suppliers</p>
          <p className="hidden sm:flex">Find Service Tags</p>
          <button className="text-success font-medium border border-success rounded-md px-8 py-2 flex">Login <span className="hidden sm:flex">/ Sign Up</span></button>
        </div>
       </div>
    </div>
  );
}

export default Header;
