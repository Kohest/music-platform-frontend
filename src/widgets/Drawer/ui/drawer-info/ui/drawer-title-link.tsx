import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  text: string;
  href: string;
}

const DrawerTitleLink: FC<Props> = ({ text, href }) => {
  return (
    <Link
      to={href}
      className="block text-[#777] leading-[18px] text-[13px] tracking-widest uppercase hover:text-[#f33]"
    >
      {text}
    </Link>
  );
};

export default DrawerTitleLink;
