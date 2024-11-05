import React, { Dispatch, FC, SetStateAction, useState } from "react";
import TrackFilterElement from "./tracks-filter-element";
interface Props {
  setTitleFilter: Dispatch<SetStateAction<"asc" | "desc">>;
  setArtistFilter: Dispatch<SetStateAction<"asc" | "desc">>;
  titleFilter: "asc" | "desc";
  artistFilter: "asc" | "desc";
}
const TracksFilter: FC<Props> = ({
  setArtistFilter,
  setTitleFilter,
  artistFilter,
  titleFilter,
}) => {
  return (
    <div className="text-[#777] relative h-9 flex flex-row flex-nowrap justify-between items-center">
      <div className="text-right pr-4 basis-[40px] h-9">
        <span className="inline-block h-full leading-[35px]">#</span>
      </div>
      <TrackFilterElement
        text="Название"
        onClick={() => {
          setTitleFilter((prev) => (prev === "asc" ? "desc" : "asc"));
        }}
        isDesc={titleFilter === "desc"}
      />
      <TrackFilterElement
        text="Исполнитель"
        onClick={() => {
          setArtistFilter((prev) => (prev === "asc" ? "desc" : "asc"));
        }}
        isDesc={artistFilter === "desc"}
      />
    </div>
  );
};

export default TracksFilter;
