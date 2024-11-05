import GeneralPlayerPanel from "./ui/general-player-panel";
import GeneralPlayerVolume from "./ui/general-player-volume";
import { RootState } from "../../app/store/store";
import { useAppSelector } from "../../app/store/hooks";
import {
  setCurrentTime,
  setIsRepeat,
  setVolume,
} from "../../app/store/audio/audioSlice";
import GeneralPlayerProgress from "./ui/general-player-progress";
import GeneralPlayerTime from "./ui/general-player-time";
import { useGlobalPlayer } from "./model/useGlobalPlayer";

const GeneralPlayer = () => {
  const { currentTime, duration, isPause, isRepeat, volume } = useAppSelector(
    (state: RootState) => state.audioSlice
  );
  const { audioRef, handlePlayPause, handleNextTrack, handlePreviousTrack } =
    useGlobalPlayer();
  return (
    <div className="fixed w-full max-w-[1440px] bottom-0 m-auto h-auto bg-white z-[100]">
      <div className="relative h-full min-h-[60px]">
        <GeneralPlayerProgress
          audioRef={audioRef}
          currentTime={currentTime}
          duration={duration}
          setCurrentTime={setCurrentTime}
        />
        <GeneralPlayerTime currentTime={currentTime} duration={duration} />
        <GeneralPlayerPanel
          handlePlayNext={handleNextTrack}
          handlePlayPrevious={handlePreviousTrack}
          setIsRepeat={setIsRepeat}
          isRepeat={isRepeat}
          play={isPause}
          handlePlayPause={handlePlayPause}
          audioRef={audioRef}
        />
        <GeneralPlayerVolume
          audioRef={audioRef}
          volume={volume}
          setVolume={setVolume}
        />
      </div>
    </div>
  );
};

export default GeneralPlayer;
