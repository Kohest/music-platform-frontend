import React, { FC, useEffect } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import dots from "../../../shared/assets/images/dots.svg";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../app/store/player/playerSlice";
import { useLocation } from "react-router-dom";
interface Props {
  className?: string;
  trackId: string;
}
const PlayerActionModal: FC<Props> = ({ className, trackId }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(toggleModal(trackId));
  };
  useEffect(() => {
    //@ts-ignore
    const handleClose = () => dispatch(toggleModal(null));
    window.addEventListener("scroll", handleClose);
    handleClose();
    return () => {
      window.removeEventListener("scroll", handleClose);
    };
  }, [location]);
  return (
    <button
      onClick={handleClick}
      className={cn(
        className,
        "h-6 w-6 z-10 mr-[18px] active:bg-[#f0f0f0] rounded-[50%] active:scale-95 duration-100"
      )}
    >
      <span
        style={{ backgroundImage: `url(${dots})` }}
        className="inline-block opacity-40 hover:opacity-70 duration-200 bg-cover bg-no-repeat w-6 h-6"
      />
    </button>
  );
};
export default PlayerActionModal;
