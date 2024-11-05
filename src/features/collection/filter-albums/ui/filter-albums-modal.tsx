import React, { FC } from "react";
import FilterOptionBlock from "./filter-option-block";

interface Props {
  setIsModal: (value: boolean) => void;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<
    React.SetStateAction<{
      name: "asc" | "desc" | "";
      date: "asc" | "desc" | "";
    }>
  >;
}

const FilterAlbumsModal: FC<Props> = ({
  setFilter,
  setIsModal,
  setFilterText,
}) => {
  const handleSelectNameOrder = (value: "asc" | "desc" | "") => {
    setFilter({ name: value, date: "" });
    setIsModal(false);
  };

  const handleSelectDateOrder = (value: "asc" | "desc" | "") => {
    setFilter({ name: "", date: value });
    setIsModal(false);
  };

  return (
    <div
      style={{ boxShadow: "0 10px 20px -5px rgba(0, 0, 0, .4)" }}
      className="bg-white absolute z-[11] max-w-full h-auto right-0"
    >
      <FilterOptionBlock
        setFilterText={setFilterText}
        title="по названию"
        options={[
          { label: "От А до Я", value: "asc" },
          { label: "От Я до А", value: "desc" },
        ]}
        onSelect={handleSelectNameOrder}
      />
      <FilterOptionBlock
        setFilterText={setFilterText}
        title="по дате добавления"
        options={[
          { label: "сначала новые", value: "desc" },
          { label: "сначала старые", value: "asc" },
        ]}
        onSelect={handleSelectDateOrder}
      />
    </div>
  );
};

export default FilterAlbumsModal;
