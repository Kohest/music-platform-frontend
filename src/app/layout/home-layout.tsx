import React from "react";
import PageContainer from "../../shared/ui/page-container";
import HomeMenu from "../../features/home/home-menu/home-menu";
import Title from "../../shared/ui/title";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="pb-[125px] w-[950px] flex flex-col flex-auto relative">
      <PageContainer>
        <div>
          <Title text="Главная" />
          <HomeMenu />
          <Outlet />
        </div>
      </PageContainer>
    </div>
  );
};

export default HomeLayout;
