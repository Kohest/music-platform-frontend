import React from "react";
import { useCreateAlbumMutation } from "../../../entities/albums/albumApi";
import upload from "../../../shared/assets/images/upload.svg";
const UploadAlbum = () => {
  const [createAlbum, { isLoading, error }] = useCreateAlbumMutation();
  const handleAddAlbum = () => {
    createAlbum({
      title: "Новый плейлист",
      genre: "Жанр",
    });
  };
  return (
    <div className="inline-block bg-[#f6f8f9] w-[200px] h-[200px] m-[15px] relative group">
      <button
        className="inline-block cursor-pointer"
        onClick={handleAddAlbum}
        disabled={isLoading || !!error}
      >
        <span className="flex flex-row flex-nowrap justify-center items-center w-[200px] h-[200px]">
          <span
            className="bg-no-repeat bg-cover inline-block opacity-30 w-[36px] h-[36px] group-hover:opacity-60 duration-100"
            style={{ backgroundImage: `url(${upload})` }}
          />
        </span>
      </button>
    </div>
  );
};

export default UploadAlbum;
