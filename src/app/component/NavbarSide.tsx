"use client";

import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import Image from "next/image";

interface SideBarProps {
  onMenuItemClick: (path: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onMenuItemClick }) => {
  const [selectedItem, setSelectedItem] = useState("/");

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-dark-sidebar bg-white h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed">
      <div className="rounded-xl">
        <Image
          src="/logo.svg" // Ensure `logo` is correctly imported
          alt="Logo"
          width={100}
          height={100}
          className="h-8 rounded-xl object-left"
        />
      </div>
      <div className="text-sidebar2 text-2xl space-y-10">
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/")}
        >
          <RiHome5Fill />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/search" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/search")}
        >
          <RiUserSearchLine />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/mail" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/mail")}
        >
          <RiMailFill />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/send" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/send")}
        >
          <IoIosSend />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/stack" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stack")}
        >
          <SiElasticstack />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/inbox" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/inbox")}
        >
          <FaInbox />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/stacks" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stacks")}
        >
          <IoStatsChartSharp />
        </div>
      </div>
      <div className="text-white bg-green-500 p-1 rounded-full">SP</div>
    </div>
  );
};

export default SideBar;
