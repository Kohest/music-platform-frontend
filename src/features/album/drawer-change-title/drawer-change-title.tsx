import React, { FC, useState } from "react";
import { useUpdateAlbumMutation } from "../../../entities/albums/albumApi";
import { useOutside } from "../../../shared/hooks/useOutside";
import { useUpdateName } from "../../../shared/hooks/useUpdateName";
import { useUpdateTrackMutation } from "../../../entities/tracks/tracksApi";
interface Props {
  itemId: string;
  title: string;
  itemType: "album" | "track";
}
const DrawerChangeTitle: FC<Props> = ({ itemId, title, itemType }) => {
  const [updateAlbum, { isLoading }] = useUpdateAlbumMutation();
  const [updateTrack, { isLoading: tracksLoading }] = useUpdateTrackMutation();
  const { isShow, ref, setIsShow } = useOutside(false);
  const [newTitle, setNewTitle] = useState(title);
  const { handleKeyDown } = useUpdateName({
    formDataKey: itemType === "album" ? "title" : "name",
    mutationFunction: itemType === "album" ? updateAlbum : updateTrack,
    toastErrorMessage: "Не удалось обновить имя",
    toastSuccessMessage: "Имя обновлено",
  });
  return (
    <div>
      {isShow ? (
        <input
          type="text"
          ref={ref}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => {
            handleKeyDown(e, newTitle, itemId);
            if (e.key === "Enter") {
              setIsShow(false);
            }
          }}
          className="relative text-[35px] overflow-hidden mb-[3px] font-bold  border border-[#ffdb4d]"
          id="nameUpload"
        />
      ) : (
        <h1
          className="relative text-[35px] overflow-hidden mb-[3px] font-bold border border-transparent hover:border-[#ffdb4d]"
          onClick={() => setIsShow(true)}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default DrawerChangeTitle;
