import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  subtitle?: string;
  href: string;
}
const TitleSmall: FC<Props> = ({ title, subtitle, href }) => {
  return (
    <Link
      to={href}
      className="text-[#222] hover:text-[#f33] group  block mr-[13px] after:absolute after:left-auto after:-right-[12px]
      after:top-[32px] after:bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/dropdown-thin.svg')] after:rotate-[270deg]
      after:w-4 after:h-4 after:bg-left-4 after:hover:-right-[20px] after:duration-200"
    >
      <div className="font-bold mb-[5px] text-[20px] leading-[25px]">
        <span>{title}</span>
      </div>
      <div className="flex mt-[5px] mb-[10px] text-[#777] text-[15px] leading-[20px]">
        <span className="max-w-[600px] mr-auto overflow-ellipsis">
          {subtitle}
        </span>
        <span className="group-hover:text-[#f33]">Смотреть все</span>
      </div>
    </Link>
  );
};

export default TitleSmall;
