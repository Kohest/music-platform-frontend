import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";

interface Props {
  className?: string;
  text: string;
  onClick?: () => void;
}
const UserProfileModalLi: FC<Props> = ({ className, text, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={cn(
        className,
        "block py-[10px] px-[15px] cursor-pointer hover:bg-[#f6f5f3] duration-100"
      )}
    >
      <span className="h-10 max-w-full">{text}</span>
    </li>
  );
};

export default UserProfileModalLi;
