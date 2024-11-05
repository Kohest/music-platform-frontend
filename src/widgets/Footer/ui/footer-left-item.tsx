import React, { FC } from "react";
import { IFooterItem } from "../model/types";
import { Link } from "react-router-dom";
interface Props {
  item: IFooterItem;
}
const FooterLeftItem: FC<Props> = ({ item }) => {
  return (
    <div className="inline-block mt-[-5px] mx-[10px] mb-[10px] whitespace-nowrap first:ml-0 text-[13px] hover:text-[#f33]">
      <Link to={item.href}>{item.title}</Link>
    </div>
  );
};

export default FooterLeftItem;
