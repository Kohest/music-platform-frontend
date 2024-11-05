import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div>
      <Link
        to={"/home"}
        className="inline-block ml-[30px] mt-[23px] w-[184px] align-top h-[24px] bg-[url(https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-logo/i/music-ru-black_v2023.svg)]"
      ></Link>
    </div>
  );
};

export default HeaderLogo;
