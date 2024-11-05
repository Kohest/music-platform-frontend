import React, { FC } from "react";
import arrowIcon from "../../../../shared/assets/images/arrow.svg";
import { cn } from "../../../../shared/utils/cnUtil";
interface Props {
  text: string;
  onClick?: () => void;
  isDesc?: boolean;
}
const TrackFilterElement: FC<Props> = ({ text, onClick, isDesc }) => {
  return (
    <div
      className="flex-[1_1_25%] h-9 text-[13px] group cursor-pointer"
      onClick={onClick}
    >
      <span className="leading-[35px] group-hover:text-[#f33]">{text}</span>
      <span className="inline-block w-6 h-6  ml-1">
        <span
          className={cn(
            "inline-block opacity-30 w-6 h-6 align-middle bg-cover bg-no-repeat",
            isDesc && "rotate-180 opacity-60"
          )}
          style={{ backgroundImage: `url(${arrowIcon})` }}
        />
      </span>
    </div>
  );
};

export default TrackFilterElement;
