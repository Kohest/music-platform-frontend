import React, { FC } from "react";
import { IMenuItem } from "../model/types";
import { cn } from "../../../shared/utils/cnUtil";
import HeaderLink from "./header-link";
interface Props {
  className?: string;
  items: IMenuItem[];
}
const HeaderMenu: FC<Props> = ({ className, items }) => {
  return (
    <div className={cn("inline-block text-[#ccc]", className)}>
      <div className="ml-[10px] flex text-[15px]">
        {items.map((item: IMenuItem, idx) => (
          <HeaderLink href={item.href} title={item.title} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default HeaderMenu;
