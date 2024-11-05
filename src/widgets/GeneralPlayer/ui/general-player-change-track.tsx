import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
enum ChangeTrack {
  PREV = "PREV",
  NEXT = "NEXT",
}
interface Props {
  side: keyof typeof ChangeTrack;
  onClick?: () => void;
}
const GeneralPlayerChangeTrack: FC<Props> = ({ side, onClick }) => {
  return (
    <div
      className="mr-2 py-[10px] opacity-40 inline-block cursor-pointer align-top hover:opacity-80"
      onClick={onClick}
    >
      <div
        className={cn(
          "m-[6px] w-7 h-7 bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/track-prev.svg')]",
          side === "NEXT" && "rotate-180"
        )}
      />
    </div>
  );
};

export default GeneralPlayerChangeTrack;
