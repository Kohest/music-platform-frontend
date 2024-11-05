import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/store/hooks";
import { getFullUrl } from "../../../shared/utils/get-full-url";

const GeneralPlayerSong = () => {
  const { artist, picture, name } = useAppSelector((state) => state.audioSlice);
  return (
    <div className="absolute bottom-0 ml-[220px] right-[210px] left-0">
      <div className="inline-block relative max-w-full align-top">
        <div className="ml-0 py-[5px] max-w-[500px] flex">
          <div className="leading-[50px] mt-0 h-[50px] align-middle">
            <div className="absolute left-0 top-0 inline-block w-[50px] h-[50px] mt-[5px]">
              <Link to={"/"}>
                {picture && (
                  <img
                    className="w-full h-full object-contain"
                    src={getFullUrl(picture)}
                    alt="artist"
                  />
                )}
              </Link>
            </div>
            <div className="mr-[175px] ml-20 leading-[1.6] text-[13px] mt-[5px]">
              <div className="font-bold">{name}</div>
              <div className="text-[#222] font-light">{artist}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralPlayerSong;
