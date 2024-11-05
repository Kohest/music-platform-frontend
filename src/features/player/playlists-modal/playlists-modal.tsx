import React, { FC } from "react";
import back from "../../../shared/assets/images/back.svg";
import { useGetALbumsByTypeQuery } from "../../../entities/albums/albumApi";
import { decodeJwt } from "../../../shared/utils/decode-jwt";
import PlaylistsModalOption from "./ui/playlists-modal-option";
import Loader from "../../../shared/ui/loader";
import { toast } from "react-toastify";

interface Props {
  setPlaylistsModal: (value: boolean) => void;
}
const PlaylistsModal: FC<Props> = ({ setPlaylistsModal }) => {
  const handleClosePlaylistsModal = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setPlaylistsModal(false);
  };
  const token = decodeJwt();
  const { data, isError, isFetching } = useGetALbumsByTypeQuery({
    id: token?.id as string,
    type: "myAlbums",
  });

  if (isFetching) {
    return <Loader />;
  }
  if (isError) {
    toast.error("Не удалось загрузить плейлисты", {
      position: "bottom-right",
    });
  }
  return (
    <div>
      <ul>
        <li
          className="cursor-pointer relative height-10 pt-2 pr-[30px] pb-2 pl-[10px]
      hover:bg-[#f0f0f0] duration-200 border-b border-[#e5e5e5]"
          onClick={(event) => handleClosePlaylistsModal(event)}
        >
          <span className="inline-block mr-[10px] align-top">
            <span
              style={{ backgroundImage: `url(${back})` }}
              className="block opacity-85 bg-cover bg-no-repeat w-6 h-6"
            />
          </span>
          <span className="align-middle">Добавить в плейлист</span>
        </li>
      </ul>
      <div className="w-[260px] h-[250px] overflow-x-hidden">
        <div className="text-[#777] h-10 px-[10px] py-[15px]">
          Добавить в плейлист
        </div>
        <div>
          {data && data.length ? (
            data.map((album) => (
              <PlaylistsModalOption title={album.title} albumId={album._id} />
            ))
          ) : (
            <div className="text-xl text-center text-[#777] mt-16">
              Плейлисты не найдены
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsModal;
