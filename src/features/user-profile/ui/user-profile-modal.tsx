import React, { FC } from "react";
import { useAuth } from "../../../entities/auth/hooks/useAuth";
import UserProfileModalLi from "./user-profile-modal-li";
import { useNavigate } from "react-router-dom";
interface Props {
  userName: string;
}
const UserProfileModal: FC<Props> = ({ userName }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    window.location.reload();
  };
  const handleNavigate = () => {
    navigate("/profile");
  };
  return (
    <div
      className="max-h-[775px] min-h-[100px] top-[79px] right-[-90px] text-[#222]
bg-white absolute z-[100] overflow-y-auto overflow-x-hidden animate-fadeIn"
      style={{ boxShadow: "0 10px 20px -5px rgba(0, 0, 0, .4)" }}
    >
      <div className="w-[270px]">
        <ul className="w-full ">
          <li className="block py-[10px] px-[15px] border-b border-[#e5e5e5]">
            <span className="h-10 max-w-full font-bold text-[16px]">
              {userName}
            </span>
          </li>
          <UserProfileModalLi text="Мой аккаунт" onClick={handleNavigate} />
          <UserProfileModalLi text="Выйти" onClick={handleLogout} />
        </ul>
      </div>
    </div>
  );
};

export default UserProfileModal;
