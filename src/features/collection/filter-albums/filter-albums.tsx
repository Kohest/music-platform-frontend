import React, { FC, useState } from "react";
import FilterAlbumsModal from "./ui/filter-albums-modal";

interface Props {
  setFilter: React.Dispatch<
    React.SetStateAction<{
      name: "asc" | "desc" | "";
      date: "asc" | "desc" | "";
    }>
  >;
}

const FilterAlbums: FC<Props> = ({ setFilter }) => {
  const [isModal, setIsModal] = useState(false);
  const [filterText, setFilterText] = useState(
    "по дате добавления: сначала новые"
  );

  return (
    <>
      <div
        className="absolute top-0 right-0 inline-block cursor-pointer"
        onClick={() => setIsModal(!isModal)}
      >
        <div className="h-7 leading-[27px] active:scale-95 duration-200 group">
          <span className="select-none border border-[#ccc] group-hover:border-[#b3b3b3] duration-100 h-[26px] text-[13px] inline-block px-[13px] rounded-[5px] align-top">
            {filterText}
          </span>
          <div className="w-7 h-[26px] border border-[#ccc] group-hover:border-[#b3b3b3] duration-100 inline-flex items-center justify-center relative rounded-[5px]">
            <span
              className={`bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/dropdown.svg')] w-6 h-6 bg-cover bg-no-repeat absolute -ml-[1px] opacity-80 ${
                isModal ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      {isModal && (
        <FilterAlbumsModal
          setFilterText={setFilterText}
          setIsModal={setIsModal}
          setFilter={setFilter}
        />
      )}
    </>
  );
};

export default FilterAlbums;
