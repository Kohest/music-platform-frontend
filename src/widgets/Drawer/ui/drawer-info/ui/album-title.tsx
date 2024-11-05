import React, { FC } from "react";
import { cn } from "../../../../../shared/utils/cnUtil";
import { Link } from "react-router-dom";
interface Props {
  titleSize: string;
  title: string;
  href: string;
}
const DrawerTitle: FC<Props> = ({ titleSize, title, href }) => {
  return (
    <div
      className={cn(
        "text-[20px] leading-[25px] text-[#222] hover:text-[#f33] mb-[3px]",
        titleSize === "large" && "text-[45px] font-bold"
      )}
    >
      <Link to={href}>{title}</Link>
    </div>
  );
};

export default DrawerTitle;
