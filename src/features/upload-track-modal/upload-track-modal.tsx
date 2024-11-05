import React, { FC, useEffect } from "react";
import x from "../../shared/assets/images/upload.svg";
import { useCreateTrackMutation } from "../../entities/tracks/tracksApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
interface Props {
  setModal: (isModal: boolean) => void;
}
const UploadTrackModal: FC<Props> = ({ setModal }) => {
  const { albumId } = useParams();
  const [createTrack, { isLoading, error: formError }] =
    useCreateTrackMutation();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const formData = new FormData();
      formData.append("name", files[0].name.slice(0, -4));
      formData.append("artist", "Неизвестно");
      formData.append("audio", files[0]);
      if (albumId) {
        formData.append("albumId", albumId);
      }
      //@ts-ignore
      await createTrack(formData);
      setModal(false);
    }
  };
  useEffect(() => {
    if (formError) {
      console.error(formError);
      toast.error("Произошла ошибка добавления трека: " + formError, {
        position: "bottom-right",
      });
    }
  }, [formError]);

  return (
    <div className="fixed inset-0 bg-white p-10 z-[101]">
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[300px] text-center -mt-[150px] -ml-[250px]">
        <button
          onClick={() => setModal(false)}
          className="block absolute opacity-40 hover:opacity-60 -top-[100px] m-[5px] right-0 h-[35px] min-w-[35px]"
        >
          <span
            style={{ backgroundImage: `url('${x}')` }}
            className="w-6 h-6 block rotate-45 bg-cover bg-no-repeat"
          />
        </button>
        <div>
          <div className="text-[35px] mb-[15px] font-[500]">
            Загрузите треки на Музыку
          </div>
          <div className="text-[15px] mb-10">
            Выберите аудиофайлы, чтобы загрузить в ваш плейлист.
          </div>
          <div>
            <input
              id="uploadFile"
              type="file"
              className="hidden"
              onChange={(event) => handleFileUpload(event)}
            />
            <label
              htmlFor="uploadFile"
              className="text-[15px] inline-block pt-[6px] h-[35px] px-[13px] rounded-[4px] bg-[#ffdb4d] cursor-pointer"
            >
              Выбрать файлы
            </label>
          </div>
        </div>
        <div className="pt-[35px] opacity-50 text-[13px] mb-3">
          Помните, что загрузка файлов может требовать наличия у вас согласия
          правообладателя.
        </div>
      </div>
    </div>
  );
};

export default UploadTrackModal;
