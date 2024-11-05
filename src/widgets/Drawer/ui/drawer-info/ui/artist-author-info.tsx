import React, { FC, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { infoType } from "../types";
import { useUpdateAlbumMutation } from "../../../../../entities/albums/albumApi";
import { useUpdateName } from "../../../../../shared/hooks/useUpdateName";
import { useUpdateTrackMutation } from "../../../../../entities/tracks/tracksApi";
interface Props {
  artist?: string;
  userId: string;
  name?: string;
  isAuthor: boolean | undefined;
  infoType?: keyof typeof infoType;
  itemId: string;
}
const ArtistAuthorInfo: FC<Props> = ({
  artist,
  name,
  userId,
  isAuthor = false,
  infoType,
  itemId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(artist || "Неизвестно");
  const [updateAlbum, { isLoading }] = useUpdateAlbumMutation();
  const [updateTrack, { isLoading: isTrackLoading }] = useUpdateTrackMutation();
  const { handleKeyDown } = useUpdateName({
    formDataKey: "artist",
    mutationFunction: infoType === "album" ? updateAlbum : updateTrack,
    toastErrorMessage: "Не удалось обновить артиста",
    toastSuccessMessage: "Артист обновлен",
  });
  const handleAddArtist = useCallback(async () => {
    await updateAlbum({
      id: itemId,
      body: { artist: "Неизвестно" },
    });
  }, [itemId, updateAlbum]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewName(e.target.value);
  const handleEditClick = () => setIsEditing(true);
  const handleBlur = () => setIsEditing(false);
  return (
    <div className="mb-[5px] text-[15px]">
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-[#777] text-[15px]">Исполнитель: </span>
          {isEditing ? (
            <input
              type="text"
              value={newName}
              onChange={handleInputChange}
              onKeyDown={(event) => handleKeyDown(event, newName, itemId)}
              className="text-[15px] inline-block"
              autoFocus
              onBlur={handleBlur}
            />
          ) : artist ? (
            <div className="group relative">
              <Link
                to={`/search?text=${artist}&type=all`}
                className="hover:text-[#f33] text-[#222]"
              >
                {artist}
              </Link>
              {isAuthor && (
                <span
                  onClick={handleEditClick}
                  className="hidden w-6 h-6 bg-no-repeat bg-cover absolute top-0 opacity-60
                  hover:opacity-100 active:scale-75 cursor-pointer group-hover:inline-block
                  bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/pen-circle.svg')]"
                />
              )}
            </div>
          ) : isAuthor && infoType === "album" ? (
            <button
              disabled={isLoading || isTrackLoading}
              className="border-transparent hover:border-[#ffdb4d] py-1"
              onClick={handleAddArtist}
            >
              Добавить исполнителя
            </button>
          ) : (
            <span>Неизвестно</span>
          )}
        </div>
        <span className="text-[#777] text-[15px]">Автор: </span>
        {name ? (
          <Link
            to={`/collection/${userId}`}
            className="hover:text-[#f33] text-[#222]"
          >
            {name}
          </Link>
        ) : (
          <span>Неизвестно</span>
        )}
      </div>
    </div>
  );
};
export default ArtistAuthorInfo;
