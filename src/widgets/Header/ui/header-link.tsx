import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../../shared/utils/cnUtil";

interface Props {
  className?: string;
  href: string;
  title: string;
}

const HeaderLink: FC<Props> = ({ href, className, title }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "block ml-[40px] h-[70px] pt-[3px] leading-[65px] align-top hover:text-[#f33]",
          className,
          isActive && "text-black border-b-[3px] border-[#f33]"
        )
      }
      to={href}
    >
      {title}
    </NavLink>
  );
};

export default HeaderLink;
