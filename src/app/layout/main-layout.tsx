import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header/header";
import Footer from "../../widgets/Footer/footer";
import GeneralPlayer from "../../widgets/GeneralPlayer/general-player";
import Sidebar from "../../widgets/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="w-[1440px] m-auto bg-white relative flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <Outlet />
        <Sidebar />
        <GeneralPlayer />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
