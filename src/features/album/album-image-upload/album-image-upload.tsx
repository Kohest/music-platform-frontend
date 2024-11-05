import React, { FC } from "react";
import { toast } from "react-toastify";
import { useUpdateAlbumMutation } from "../../../entities/albums/albumApi";
import { useFileUpload } from "../../../shared/hooks/useUpdatePicture";
interface Props {
  albumId: string;
  pictureBg: string;
}
const AlbumImageUpload: FC<Props> = ({ albumId, pictureBg }) => {
  const [updateAlbum, { isLoading }] = useUpdateAlbumMutation();
  const { handleFileChange } = useFileUpload({
    mutationFunction: updateAlbum,
    formDataKey: "picture",
    toastSuccessMessage: "Обложка обновлена",
    toastErrorMessage: "Не удалось обновить обложку",
  });
  return (
    <div
      className="w-full h-full group relative bg-cover bg-no-repeat"
      style={{ backgroundImage: pictureBg }}
    >
      <div className="h-[35px] w-full absolute bottom-0">
        <input
          type="file"
          accept="image/*"
          onChange={(event) => handleFileChange(event, albumId)}
          className="absolute h-full cursor-pointer opacity-0 w-full"
          id="pictureUpload"
        />
        <label
          htmlFor="pictureUpload"
          className="block group-hover:opacity-100 opacity-0 cursor-pointer bg-black/30 rounded-[4px] text-center"
        >
          <span className="h-full min-h-[35px] text-[15px] text-white block bg-cover bg-no-repeat leading-[35px]">
            Добавить обложку
          </span>
        </label>
      </div>
    </div>
  );
};

export default AlbumImageUpload;
