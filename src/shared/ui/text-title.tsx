import React, { FC } from "react";
import { cn } from "../utils/cnUtil";
interface Props {
  text: string;
  className?: string;
}
const TextTitle: FC<Props> = ({ text, className }) => {
  return (
    <div
      className={cn(
        className,
        "inline-block mr-[13px] cursor-default text-[20px] font-bold"
      )}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default TextTitle;
