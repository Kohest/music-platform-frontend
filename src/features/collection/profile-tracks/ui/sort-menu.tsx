import React, { FC } from "react";
import SortButton from "./sort-button";
interface Props {
  filterType: "all" | "favored" | "myTracks";
  setFilterType: (type: "all" | "favored" | "myTracks") => void;
  isFetching: boolean;
}
const SortMenu: FC<Props> = ({ filterType, setFilterType, isFetching }) => {
  return (
    <nav className="-my-1 -mx-[2px] rounded-[4px] inline-block relative">
      <SortButton
        loading={isFetching}
        text="Все"
        onClick={() => setFilterType("all")}
        active={filterType === "all"}
      />
      <SortButton
        loading={isFetching}
        text="Любимые"
        onClick={() => setFilterType("favored")}
        active={filterType === "favored"}
      />
      <SortButton
        loading={isFetching}
        text="Мои mp3"
        onClick={() => setFilterType("myTracks")}
        active={filterType === "myTracks"}
      />
    </nav>
  );
};

export default SortMenu;
