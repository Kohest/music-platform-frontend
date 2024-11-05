import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../../shared/utils/cnUtil";
interface Props {
  text: string;
  href: string;
}
const HomeMenuItem: FC<Props> = ({ text, href }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;
  return (
    <Link
      to={href}
      className={cn(
        "text-[#ccc] inline-block mr-10 align-bottom h-8 leading-[29px] -bottom-[1px] text-[14px] font-[700] uppercase border-b-[3px] border-transparent",
        isActive && "text-[#222] border-[#f33]"
      )}
    >
      <span className="cursor-pointer">{text}</span>
    </Link>
  );
};

export default HomeMenuItem;
