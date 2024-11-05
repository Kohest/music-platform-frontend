import React, { FC } from "react";
import { cn } from "../utils/cnUtil";
interface Props {
  text: string;
  className?: string;
}
const Title: FC<Props> = ({ text, className }) => {
  return (
    <div className={cn("mt-[35px] mb-[25px] text-[45px]", className)}>
      <h1 className="leading-[45px] font-[700]">{text}</h1>
    </div>
  );
};

export default Title;
