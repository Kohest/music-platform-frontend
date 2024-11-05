import React, { FC } from "react";
interface Props {
  popupPosition: number;
  popupTime: string;
}
const GeneralPlayerPopup: FC<Props> = ({ popupPosition, popupTime }) => {
  return (
    <div
      className="absolute bg-black text-white text-xs px-2 py-1 rounded"
      style={{
        left: `${popupPosition}px`,
        bottom: "90px",
        transform: "translateX(-50%)",
      }}
    >
      {popupTime}
    </div>
  );
};

export default GeneralPlayerPopup;
