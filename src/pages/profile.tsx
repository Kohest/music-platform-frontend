import React, { useEffect } from "react";
import Title from "../shared/ui/title";
import { useGetProfileQuery } from "../entities/profile/profileApi";
import { toast } from "react-toastify";
import UpdateProfileForm from "../widgets/UpdateProfileForm/update-profile-form";
import { IProfileResponse } from "../entities/profile/types";
import Loader from "../shared/ui/loader";
import PageContainer from "../shared/ui/page-container";

const ProfilePage = () => {
  const { data, isError, isLoading } = useGetProfileQuery();
  if (isError) {
    toast.error("Не удалось загрузить профиль", {
      position: "bottom-right",
    });
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      className="bg-white border-[#e5e5e5] w-[950px]
   flex flex-col flex-[1_1_auto] relative 
  "
    >
      <PageContainer>
        <>
          <Title text="Настройки" />
          <div>
            <UpdateProfileForm data={data as IProfileResponse} />
          </div>
        </>
      </PageContainer>
    </div>
  );
};

export default ProfilePage;
