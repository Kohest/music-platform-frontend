import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  text: string;
  href: string;
  className?: string;
}
const CollectionMenuItem: FC<Props> = ({ text, href, className }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "text-[#777] inline-block mr-10 h-8 relative uppercase hover:text-[#f33]",
          className,
          isActive && "text-black border-b-[3px] border-[#f33]"
        )
      }
    >
      <span className="">{text}</span>
    </NavLink>
  );
};

export default CollectionMenuItem;
