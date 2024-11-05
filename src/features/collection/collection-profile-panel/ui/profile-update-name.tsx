import React, { FC, useState } from "react";
import { useUpdateProfileMutation } from "../../../../entities/profile/profileApi";
import { toast } from "react-toastify";
import { useOutside } from "../../../../shared/hooks/useOutside";
import { useUpdateName } from "../../../../shared/hooks/useUpdateName";
interface Props {
  name: string;
  isAuthor: boolean;
}
const ProfileUpdateName: FC<Props> = ({ name, isAuthor }) => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const { isShow, ref, setIsShow } = useOutside(false);
  const [newName, setNewName] = useState(name);
  const { handleKeyDown } = useUpdateName({
    formDataKey: "name",
    mutationFunction: updateProfile,
    toastErrorMessage: "Не удалось обновить имя",
    toastSuccessMessage: "Имя обновлено",
  });
  return (
    <div className="w-full">
      <div className="mb-[5px] text-[#777] text-[13px] uppercase tracking-widest">
        Коллекция
      </div>
      {isShow && isAuthor ? (
        <input
          type="text"
          ref={ref}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event, newName)}
          className="relative text-[40px] overflow-hidden mb-[3px] font-bold  border border-[#ffdb4d]"
          id="nameUpload"
        />
      ) : (
        <h1 className="relative text-[40px] pr-[33px] overflow-hidden mb-[3px] font-bold group">
          {name || "Пользователь"}
          {isAuthor && (
            <span
              onClick={() => setIsShow(true)}
              className="hidden w-6 h-6 bg-no-repeat duration-200 bg-cover absolute top-0 opacity-60
            hover:opacity-100 active:scale-75 cursor-pointer group-hover:inline-block
            bg-[url('https://music.yandex.ru/node_modules/@yandex-music-int/music-ui/blocks/d-icon/white/pen-circle.svg')]"
            />
          )}
        </h1>
      )}
    </div>
  );
};
export default ProfileUpdateName;
