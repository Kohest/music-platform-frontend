import React, { FC } from "react";
import FilterOptionTitle from "./filter-option-title";
import FilterAlbumsOption from "./filter-albums-option";

interface Props {
  title: string;
  options: { label: string; value: string }[];
  onSelect: (value: any) => void;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
}

const FilterOptionBlock: FC<Props> = ({
  title,
  options,
  onSelect,
  setFilterText,
}) => {
  return (
    <div>
      <FilterOptionTitle text={title} />
      <ul>
        {options.map((item, index) => (
          <FilterAlbumsOption
            text={item.label}
            key={index}
            onClick={() => {
              onSelect(item.value);
              setFilterText(`${title}: ${item.label}`);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default FilterOptionBlock;
