import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import { getFullUrl } from "../../../shared/utils/get-full-url";
interface Props {
  picture: string;
  audioSrc: string | undefined;
  playerAudio: string | undefined;
  isPause: boolean;
}
const PlayerPicture: FC<Props> = ({
  picture,
  audioSrc,
  isPause,
  playerAudio,
}) => {
  return (
    <div
      className={cn(
        `w-[50px] h-[50px] relative after:absolute after:left-0 after:top-0 after:w-full
            after:h-full group-hover:after:bg-black/60 after:duration-300`,
        audioSrc === playerAudio && isPause && "after:bg-black/60"
      )}
    >
      <img src={getFullUrl(picture)} alt="song picture" />
      {audioSrc === playerAudio && !isPause && (
        <div className="absolute top-0 w-full h-full flex items-center justify-center bg-black/60">
          <span className="inline-block h-4 w-4 bg-[#ffdb4d] rounded-[50%] animate-scale"></span>
        </div>
      )}
    </div>
  );
};

export default PlayerPicture;
