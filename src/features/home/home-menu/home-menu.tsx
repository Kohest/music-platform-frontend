import React from "react";
import HomeMenuItem from "./ui/home-menu-item";

const HomeMenu = () => {
  return (
    <nav className="mt-[-5px] mb-[30px]">
      <div className="border-b border-[#e5e5e5]">
        <HomeMenuItem text="Всё" href="/home" />
        <HomeMenuItem text="Новые релизы" href="/home/new-releases" />
        <HomeMenuItem text="Чарт" href="/home/chart" />
      </div>
    </nav>
  );
};

export default HomeMenu;
