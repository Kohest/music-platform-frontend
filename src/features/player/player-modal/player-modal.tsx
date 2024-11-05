import React, { FC, useState } from "react";
import PlaylistsModal from "../playlists-modal/playlists-modal";
const PlayerModal: FC = () => {
  const [playlistsModal, setPlaylistsModal] = useState(false);

  const handleOpenPlaylistsModal = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setPlaylistsModal(true);
  };

  return (
    <div
      className="absolute z-20 w-[260px] max-h-[789px] bg-white top-[60px] left-[200px] animate-fadeIn"
      style={{
        boxShadow: "0 10px 20px -5px rgba(0, 0, 0, .4)",
      }}
    >
      {!playlistsModal && (
        <ul>
          <li
            className="cursor-pointer relative height-10 pt-2 pr-[30px] pb-2 pl-[10px] hover:bg-[#f0f0f0] duration-200"
            onClick={(event) => handleOpenPlaylistsModal(event)}
          >
            <span className="inline-block mr-[10px] align-top">
              <span
                className="block opacity-85 bg-cover bg-no-repeat w-6 h-6
            bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/plus-big.svg')]"
              />
            </span>
            <span className="align-middle">Добавить в плейлист</span>
          </li>
          <li className="cursor-pointer relative height-10 pt-2 pr-[30px] pb-2 pl-[10px] hover:bg-[#f0f0f0] duration-200">
            <span className="inline-block mr-[10px] align-top">
              <span
                className="block opacity-85 bg-cover bg-no-repeat w-6 h-6
            bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/share.svg')]"
              />
            </span>
            <span className="align-middle">Поделиться</span>
          </li>
        </ul>
      )}
      {playlistsModal && (
        <PlaylistsModal setPlaylistsModal={setPlaylistsModal} />
      )}
    </div>
  );
};

export default PlayerModal;
