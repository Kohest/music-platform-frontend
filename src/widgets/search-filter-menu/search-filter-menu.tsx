import React, { FC } from "react";
import SearchMenuOption from "../../features/search-menu-option/search-menu-option";
import { SearchType } from "../../features/search-menu-option/types";
import { SetURLSearchParams } from "react-router-dom";
interface Props {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  trackLength: number;
  albumLength: number;
}
const SearchFilterMenu: FC<Props> = ({
  searchParams,
  setSearchParams,
  trackLength,
  albumLength,
}) => {
  const typeQuery = searchParams.get("type");

  const handleTypeChange = (newType: keyof typeof SearchType) => {
    searchParams.set("type", newType);
    setSearchParams(searchParams);
  };

  return (
    <div className="mb-[6px] relative">
      <nav className="rounded-[4px] inline-block -m-[2px]">
        <SearchMenuOption
          typeQuery={typeQuery}
          handleTypeChange={handleTypeChange}
          newType="all"
          text={`Все ${trackLength + albumLength}`}
        />
        {trackLength > 0 && (
          <SearchMenuOption
            typeQuery={typeQuery}
            handleTypeChange={handleTypeChange}
            newType="tracks"
            text={`Треки ${trackLength}`}
          />
        )}
        {albumLength > 0 && (
          <SearchMenuOption
            typeQuery={typeQuery}
            handleTypeChange={handleTypeChange}
            newType="albums"
            text={`Альбомы ${albumLength}`}
          />
        )}
      </nav>
    </div>
  );
};

export default SearchFilterMenu;
