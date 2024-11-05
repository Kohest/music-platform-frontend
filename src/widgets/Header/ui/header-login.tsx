import React from "react";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <Link
      to="/auth"
      className="inline-block ml-[18px] px-[15px] h-8 text-[15px] leading-[30px] bg-[#ffdb4d] rounded-[3px]"
    >
      <span>Войти</span>
    </Link>
  );
};

export default HeaderLogin;
