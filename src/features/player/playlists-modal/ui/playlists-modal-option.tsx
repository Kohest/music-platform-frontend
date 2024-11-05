import React, { FC, useEffect, useState } from "react";
import { useUpdateAlbumMutation } from "../../../../entities/albums/albumApi";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { toast } from "react-toastify";
import { toggleModal } from "../../../../app/store/player/playerSlice";
interface Props {
  title: string;
  albumId: string;
}
const PlaylistsModalOption: FC<Props> = ({ title, albumId }) => {
  const [updateAlbum, { error, isLoading }] = useUpdateAlbumMutation();
  const { openModalTrackId } = useAppSelector((state) => state.playerSlice);
  const dispatch = useAppDispatch();

  const handleAddTrack = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    await updateAlbum({
      id: albumId,
      body: {
        tracks: [openModalTrackId || ""],
      },
    });
    //@ts-ignore
    dispatch(toggleModal(null));
  };
  return (
    <div
      className="cursor-pointer h-10 px-2 py-[10px] hover:bg-[#f6f5f3] group"
      onClick={(event) => handleAddTrack(event)}
      aria-disabled={isLoading || !!error}
    >
      <span
        className="hidden float-left
            bg-cover
            bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/plus-big.svg')]
            w-6 h-6 align-middle group-hover:block"
      />
      <span className="block ml-[34px] pr-[10px]">{title}</span>
    </div>
  );
};

export default PlaylistsModalOption;
