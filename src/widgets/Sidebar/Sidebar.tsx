import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks";
import Drawer from "../Drawer/drawer";

const Sidebar = () => {
  const { isDrawerOpen } = useAppSelector((state) => state.drawerSlice);
  return (
    <div className="absolute h-full right-0 top-[70px]  border-l border-[#e5e5e5]">
      <div className="h-[779px] w-[490px] sticky top-0 scale-y-100 translate-y-0">
        <div className="overflow-auto max-w-[490px] top-0 left-0 bottom-0 right-0 text-center sticky">
          <Link
            to="/"
            className="inline-block my-[20px] text-left overflow-hidden rounded-[3px]"
          >
            <img
              src="https://avatars.mds.yandex.net/get-music-misc/2419084/img.66df012b25a0b958e56b12ed/orig"
              alt="telegram"
              className=" cursor-pointer w-[300px] h-[100px]"
            />
          </Link>
        </div>
        {isDrawerOpen && <Drawer />}
      </div>
    </div>
  );
};

export default Sidebar;
