import React, { useState } from "react";
import UploadTrackModal from "../../features/upload-track-modal/upload-track-modal";
const UploadTrack = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="flex-[1_1_auto] text-right">
        <button
          onClick={() => setModal(true)}
          className="py-2 px-5 inline-block cursor-pointer border active:scale-95
  border-[#ccc] rounded-[18px] duration-200 hover:border-[#929292]"
        >
          <span>Загрузить трек</span>
        </button>
      </div>
      {modal && <UploadTrackModal setModal={setModal} />}
    </>
  );
};

export default UploadTrack;
