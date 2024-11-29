import React from "react";
import { FaCartArrowDown, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" ">
      <div className="flex justify-between bg-slate-900 px-6">
        <div className="w-[40%] flex justify-between">
          <div className="flex items-center">
            <FaPhoneAlt className="text-red-500 mr-1" />
            <p className="text-white text-xs">+02 428947294</p>
          </div>
          <div className="flex items-center">
            <MdEmail className="text-red-500 mr-1" />
            <p className="text-white">abc@gmail.com</p>
          </div>
          <div className="flex items-center ">
            <FaAddressCard className="text-red-500 mr-1" />
            <p className="text-white">1734 stonecoal Road</p>
          </div>
        </div>

        <div className="w-[20%] flex justify-between">
          <div className="flex items-center">
            <FaDollarSign className="text-red-500 mr-1" />
            <p className="text-white">USD</p>
          </div>
          <div className="flex  items-center">
            <FaLock className="text-red-500 mr-1" />

            <p className="text-white">My Account</p>
          </div>
        </div>
      </div>

      <div className="h-16 flex justify-between items-center bg-black p-6">
        <div className="text-white text-2xl">
          Electro<span className="text-red-500">.</span>
        </div>

        <div>
          <select className="rounded-bl-lg rounded-tl-lg h-10 py-2 bg-white">
            <option value="" disabled selected={true}>
              All Categories
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <input
            type="search"
            placeholder="search here"
            className="px-2 bg-white  py-2 border-none outline-none"
          />
          <button className="bg-red-500 text-white rounded-br-lg rounded-tr-lg px-6 py-2">
            Search
          </button>
        </div>

        <div className="flex flex-col items-center">
          <FaHeart className="text-white " />
          <p className="text-white">your Wishlist</p>
        </div>
        <div className="flex flex-col items-center">
          <IoMdCart className="text-white" />
          <p className="text-white">your Cart</p>
        </div>
      </div>

      <div className="flex items-center ">
        <ul className="w-[80%] flex justify-between items-center  h-16 px-12">
          <li className="hover:text-red-500 hover:border-b hover:border-b-red-500 ">
            Home
          </li>
          <li className="hover:text-red-500 hover:border-b hover:border-b-red-500">
            Hot Deals
          </li>
          <li className="hover:text-red-500 hover:border-b hover:border-b-red-500">
            Categories
          </li>
          <li className="hover:text-red-500 hover:border-b hover:border-b-red-500">
            Laptops
          </li>
          <li className="hover:text-red-500 hover:border-b hover:border-b-red-500">
            Cameras
          </li>
          <li className="hover:text-red-500 hover:border-b hover:border-b-red-500">
            Accessories
          </li>
        </ul>
        <hr className="bg-black" />
      </div>
    </div>
  );
};

export default Navbar;
