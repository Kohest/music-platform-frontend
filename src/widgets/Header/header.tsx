import HeaderLogo from "./ui/header-logo";
import { FC } from "react";
import HeaderMenu from "./ui/header-menu";
import { MenuItems } from "../../shared/constants/menu-items";
import HeaderSearch from "./ui/header-search";
import { useOutside } from "../../shared/hooks/useOutside";
import UserProfileModal from "../../features/user-profile/ui/user-profile-modal";
import { useGetProfileQuery } from "../../entities/profile/profileApi";
import { getFullUrl } from "../../shared/utils/get-full-url";
import HeaderLogin from "./ui/header-login";

const Header: FC = () => {
  const { data } = useGetProfileQuery();
  const { isShow, setIsShow, ref } = useOutside(false);

  const handleAvatarClick = () => {
    setIsShow(!isShow);
  };

  const avatarUrl =
    data?.avatar && data?.avatar.length > 0
      ? getFullUrl(data.avatar)
      : "https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-middle";

  return (
    <div className="h-[71px] flex border-b border-[#e5e5e5]">
      <HeaderLogo />
      <div className="flex">
        <HeaderMenu
          items={MenuItems(data?._id || null)}
          className="ml-[10px]"
        />
        <HeaderSearch className="ml-10" />
      </div>
      <div className="mr-[30px] text-right flex-grow leading-[71px]">
        {data ? (
          <span
            onClick={handleAvatarClick}
            className="h-[70px] ml-[14px] cursor-pointer inline-flex max-w-full justify-center items-center"
            title={data.name}
          >
            <div className="w-[42px] h-[42px] flex items-center justify-center">
              <div
                className="w-8 h-8 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${avatarUrl})` }}
              />
            </div>
          </span>
        ) : (
          <HeaderLogin />
        )}
      </div>
      {isShow && data && (
        <div ref={ref}>
          <UserProfileModal userName={data.name} />
        </div>
      )}
    </div>
  );
};

export default Header;
