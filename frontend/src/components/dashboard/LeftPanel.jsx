import { useState } from "react";
import Image from "next/image";
import providusIcon from "../../../public/assets/svg/providus-logo.svg";
import { nanoid } from "@reduxjs/toolkit";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CardsIcon,
  DashboardIcon,
  PrintIcon,
  ChartIcon,
  SettingsIcon,
  LogoutIcon,
} from "../../../public/assets/svg/Icons";

const LeftPanel = () => {
  const [listItems, setListItems] = useState([
    {
      id: nanoid(),
      value: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
      isSelected: false,
    },
    {
      id: nanoid(),
      value: "Cards List",
      path: "/cards-list" || "/cards/customer-info",
      icon: <CardsIcon />,
      isSelected: false,
    },
    {
      id: nanoid(),
      value: "Print Logs",
      path: "/print-logs",
      icon: <PrintIcon />,
      isSelected: false,
    },
    {
      id: nanoid(),
      value: "Card Stock",
      path: "/card-stock" || "card-stock/card-stock-log",
      icon: <ChartIcon />,
      isSelected: false,
    },
    {
      id: nanoid(),
      value: "Settings",
      path: "/settings",
      icon: <SettingsIcon />,
      isSelected: false,
    },
  ]);

  const router = useRouter();

  const handleClick = (id) =>
    setListItems((items) =>
      items.map((item) => {
        return item.id === id
          ? {
              ...item,
              isSelected: true,
            }
          : {
              ...item,
              isSelected: false,
            };
      })
    );

  return (
    <div className="flex flex-col pt-[12px] w-[270px] h-[100vh] bg-bac font-sans">
      <Image className="self-center" src={providusIcon} alt="" />
      <hr className="border-[#d9d9d9]" />
      <div className="flex flex-col justify-between h-[100vh] p-[20px]">
        <div className="flex flex-col gap-[20px]">
          {listItems.map((item) => (
            <Link key={item.id} href={item.path}>
              <div
                className={`flex gap-[20px] items-center px-[20px] py-[8px] rounded-[12px] font-[600] text-white cursor-pointer text-[0.9rem] ${
                  (router.pathname === item.path || item.isSelected) &&
                  "bg-white text-yellow font-[700]"
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.icon}
                {item.value}
              </div>
            </Link>
          ))}
        </div>
        <Link href="/logout">
          <span className="flex gap-[20px] justify-center items-center px-[20px] py-[8px] rounded-[12px] font-[600] text-white bg-yellow cursor-pointer text-[0.9rem]">
            <LogoutIcon />
            Logout
          </span>
        </Link>
      </div>
      <div className="flex justify-center gap-[10px] p-[10px] text-white mt-[20px]">
        <small className="text-[9px]">&copy; 2022 PROVIDUS BANK</small>
        <span className="border"></span>
        <small className="text-[9px]">ALL RIGHTS RESERVED</small>
      </div>
    </div>
  );
};

export default LeftPanel;
