import React, { FC, useState } from "react";
import { useOutside } from "../../../shared/hooks/useOutside";
import { cn } from "../../../shared/utils/cnUtil";
import { useNavigate } from "react-router-dom";
interface Props {
  className?: string;
}
const HeaderSearch: FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const { isShow, setIsShow, ref } = useOutside(false);
  const navigate = useNavigate();
  const handleSearchClick = () => {
    activeSearch && navigate(`/search?text=${searchQuery}&type=all`);
    setActiveSearch(!activeSearch);
    setIsShow(!isShow);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?text=${searchQuery}&type=all`);
    }
  };
  return (
    <div
      className={cn("flex h-[70px] leading-[71px] relative", className)}
      ref={ref}
    >
      <div className="w-[100px] ml-[3px] flex z-[2] justify-center items-center">
        <button
          className="w-[35px] h-[35px] align-middle text-center flex justify-center items-center  cursor-pointer active:pt-[2px]"
          onClick={handleSearchClick}
        >
          <span className="block bg-[url(https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/loupe.svg)] w-[24px] h-[24px] opacity-40 bg-cover bg-no-repeat hover:opacity-100" />
        </button>
      </div>
      {isShow && (
        <div className="absolute w-auto  text-[15px] leading-[20px] z-[1] top-[19px] left-8">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Трек, альбом, исполнитель, подкаст"
            type="text"
            className="overflow-ellipsis pr-[7px] pl-[38px] w-[360px] border border-[#e5e5e5] shadow-md h-[35px]"
          />
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
