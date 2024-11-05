import React, { FC } from "react";
interface Props {
  text: string;
}
const FilterOptionTitle: FC<Props> = ({ text }) => {
  return (
    <div className="px-3 mt-[10px] mb-[10px] text-[13px] text-[#777]">
      {text}
    </div>
  );
};

export default FilterOptionTitle;
