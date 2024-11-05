import React from "react";
import { Link } from "react-router-dom";

const ProfileSettings = () => {
  return (
    <Link to={"/profile"} className="ml-[10px] inline-block">
      <span
        className="block relative border border-[#ccc] hover:border-[#777]
              duration-100 rounded-[20px] flex justify-center items-center
              h-10 min-w-10 px-[15px] text-right text-[15px]"
      >
        <span
          className="block bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/cog.svg')]
              h-6 w-6"
        />
        <span className="ml-[5px]">Настройки</span>
      </span>
    </Link>
  );
};

export default ProfileSettings;
