import React, { FC } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cnUtil";
interface Props {
  className?: string;
  href: string;
}
const ArrowLink: FC<Props> = ({ href, className }) => {
  return (
    <Link
      to={href}
      className={cn(
        className,
        "absolute top-[30px] left-[20px] h-9 w-9 flex items-center justify-center"
      )}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="rgba(247,247,255,.9)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.40628 13.058C1.82161 12.4724 1.8216 11.5276 2.40628 10.9421C4.21771 9.12778 7.75104 5.58897 8.03999 5.30001C8.42999 4.91001 9.06999 4.91001 9.45999 5.30001C9.84999 5.69001 9.84999 6.32001 9.45999 6.71001L6.74328 9.42672C6.20889 9.96111 5.61652 10.4323 4.97578 10.8331L4.63311 11.0474L4.84118 11.254C5.57493 11.0854 6.32616 11 7.0806 11H21.0025C21.5548 11 22.0025 11.4477 22.0025 12C22.0025 12.5523 21.5548 13 21.0025 13H7.0806C6.32616 13 5.57493 12.9146 4.84118 12.746L4.63311 12.9526L4.97578 13.1669C5.61652 13.5677 6.20889 14.0389 6.74328 14.5733L9.45999 17.29C9.84999 17.68 9.84999 18.31 9.45999 18.7C9.06999 19.09 8.42999 19.09 8.03999 18.7C7.75104 18.411 4.21771 14.8722 2.40628 13.058Z"></path>
      </svg>
    </Link>
  );
};

export default ArrowLink;
