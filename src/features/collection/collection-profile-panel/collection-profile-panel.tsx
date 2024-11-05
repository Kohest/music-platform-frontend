import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { IProfileResponse } from "../../../entities/profile/types";
import ProfileUpdateAvatar from "./ui/profile-update-avatar";
import ProfileSettings from "../../../shared/ui/profile-settings";
import ProfileUpdateName from "./ui/profile-update-name";
import { decodeJwt } from "../../../shared/utils/decode-jwt";

interface Props {
  data: IProfileResponse;
}
const CollectionProfilePanel: FC<Props> = ({ data }) => {
  const { id: accessId } = decodeJwt() || { id: null };
  const { id: profileId } = useParams();
  const isAuthor = accessId === profileId;
  return (
    <div className="min-h-[200px] mb-10 flex flex-row justify-between">
      <ProfileUpdateAvatar
        avatar={data.avatar}
        name={data.name}
        isAuthor={isAuthor}
      />
      <div className="flex-grow basis-full w-full flex flex-col justify-between">
        <ProfileUpdateName name={data.name} isAuthor={isAuthor} />
        <div className="w-full mt-[15px] flex flex-row justify-between">
          <div className="flex-[1_1_100%] text-left"></div>
          {isAuthor && (
            <div className="flex-[1_1_100%] text-right">
              <ProfileSettings />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionProfilePanel;
