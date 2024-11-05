import React, { useEffect } from "react";
import CollectionMenu from "../features/collection-menu/collection-menu";
import CollectionProfilePanel from "../features/collection/collection-profile-panel/collection-profile-panel";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useGetPublicProfileQuery } from "../entities/profile/profileApi";
import { toast } from "react-toastify";
import { IProfileResponse } from "../entities/profile/types";
import Loader from "../shared/ui/loader";
import PageContainer from "../shared/ui/page-container";

const CollectionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPublicProfileQuery(id as string);

  useEffect(() => {
    if (error || !id || id === "null") {
      if (error) {
        toast.error("Не удалось загрузить профиль", {
          position: "bottom-right",
        });
      }
      navigate("/home", { replace: true });
    }
  }, [id, error, navigate]);
  if (isLoading) {
    return <Loader />;
  }
  if (!data) {
    return (
      <div className="bg-white border-[#e5e5e5] w-[950px] flex flex-col flex-[1_1_auto] relative">
        <PageContainer>
          <>
            <h2 className="text-center">Профиль не найден.</h2>
            <CollectionMenu />
            <Outlet />
          </>
        </PageContainer>
      </div>
    );
  }

  return (
    <div className="bg-white border-[#e5e5e5] w-[950px] flex flex-col flex-[1_1_auto] relative">
      <PageContainer>
        <>
          <CollectionProfilePanel data={data as IProfileResponse} />
          <CollectionMenu />
          <Outlet />
        </>
      </PageContainer>
    </div>
  );
};

export default CollectionPage;
