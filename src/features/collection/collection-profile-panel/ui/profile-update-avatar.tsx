import React, { FC } from "react";
import { toast } from "react-toastify";
import { useUpdateProfileMutation } from "../../../../entities/profile/profileApi";
import { getFullUrl } from "../../../../shared/utils/get-full-url";
import uploadPhoto from "../../../../shared/assets/images/upload-photo.svg";
import { useFileUpload } from "../../../../shared/hooks/useUpdatePicture";
interface Props {
  name: string;
  avatar: string;
  isAuthor: boolean;
}
const ProfileUpdateAvatar: FC<Props> = ({ name, avatar, isAuthor }) => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const avatarBg = avatar
    ? `url(${getFullUrl(avatar)})`
    : `url('https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-200')`;
  const { handleFileChange } = useFileUpload({
    formDataKey: "avatar",
    mutationFunction: updateProfile,
    toastErrorMessage: "Не удалось обновить аватар",
    toastSuccessMessage: "Аватар обновлен",
  });
  return (
    <div
      className="relative flex-grow-0 shrink-0 basis-[200px] w-[200px] min-h-[200px] mr-[30px] group"
      title={name || "Пользователь"}
    >
      <div
        className="flex w-[200px] h-[200px] justify-center items-center flex-[0_0_auto] bg-cover bg-no-repeat rounded-[50%]"
        style={{ backgroundImage: avatarBg }}
      />
      {isAuthor && (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleFileChange(event)}
            className="absolute left-[88px] bottom-[20px] cursor-pointer opacity-0"
            id="avatarUpload"
          />
          <label
            htmlFor="avatarUpload"
            className="group-hover:opacity-100 opacity-0 absolute left-[88px] bottom-[20px] cursor-pointer bg-black/50 rounded-[50%]"
          >
            <span
              className="block w-6 h-6 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${uploadPhoto})` }}
            />
          </label>
        </>
      )}
    </div>
  );
};
export default ProfileUpdateAvatar;
