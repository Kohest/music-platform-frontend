import React, { FC } from "react";
import { SearchType } from "./types";
import { cn } from "../../shared/utils/cnUtil";
interface Props {
  handleTypeChange: (newType: keyof typeof SearchType) => void;
  text: string;
  newType: keyof typeof SearchType;
  typeQuery: string | null;
}
const SearchMenuOption: FC<Props> = ({
  handleTypeChange,
  text,
  newType,
  typeQuery,
}) => {
  return (
    <button
      disabled={typeQuery === newType}
      onClick={() => handleTypeChange(newType)}
      className="inline-block rounded-[4px] pl-[2px] bg-[#f4f4f4] mb-[10px] py-[2px] hover:bg-[#ccc] duration-100"
    >
      <span
        className={cn(
          "flex items-center h-7 min-w-7 px-4 text-[13px] align-top",
          typeQuery === newType && "bg-[#ffdb4d] animate-fadeIn"
        )}
      >
        {text}
      </span>
    </button>
  );
};

export default SearchMenuOption;
