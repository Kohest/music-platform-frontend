import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  year?: number;
  genre?: string;
  isActiveForm: boolean;
  setActiveForm: (isActive: boolean) => void;
  isAuthor: boolean;
}
const AlbumDetails: FC<Props> = ({
  year,
  genre,
  isAuthor,
  isActiveForm,
  setActiveForm,
}) => {
  return (
    <div className="text-[#777] my-[5px] text-[15px] relative">
      <span>{year}</span>
      <span className="inline-block w-[2px] h-[2px] -mt-[2px] mx-[6px] bg-[#d8d8d8] rounded-[50%] align-middle">
        &nbsp;
      </span>
      <Link to={"/"} className="hover:text-[#f33]">
        {genre}
      </Link>
      {isAuthor && !isActiveForm && (
        <button
          onClick={() => setActiveForm(!isActiveForm)}
          className="border border-transparent hover:border-[#ccc] hover:text-black p-1 ml-5 rounded-[4px] duration-100"
        >
          Редактировать
        </button>
      )}
    </div>
  );
};

export default AlbumDetails;
