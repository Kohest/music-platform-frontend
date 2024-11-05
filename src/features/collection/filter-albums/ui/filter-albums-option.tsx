import React, { FC } from "react";

interface Props {
  text: string;
  onClick?: () => void;
}

const FilterAlbumsOption: FC<Props> = React.memo(({ text, onClick }) => {
  return (
    <li
      className="cursor-pointer h-10 px-3 min-w-[204px] text-[15px] flex items-center hover:bg-[#e5e5e5]/50"
      onClick={onClick}
    >
      {text}
    </li>
  );
});

export default FilterAlbumsOption;
