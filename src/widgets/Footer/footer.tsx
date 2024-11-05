import React from "react";
import FooterLeftItem from "./ui/footer-left-item";
import { FooterItems } from "../../shared/constants/footer-items";

const Footer = () => {
  return (
    <div className="flex flex-wrap leading-[18px] pt-[20px] pb-[60px]  pl-[30px] pr-[30px]">
      <div className="basis-[45%] grow pr-[10px] break-words shrink text-[13px]">
        <div className="flex flex-wrap items-start mt-0 mr-[-10px] mb-[5px] ml-[5px]">
          {FooterItems.map((item, idx) => (
            <FooterLeftItem item={item} key={idx} />
          ))}
        </div>
        <div className="text-[#777] mb-[20px]">
          Сервис может содержать информацию, не предназначенную для
          несовершеннолетних
        </div>
      </div>
      <div className="grow-0 shrink-0 basis-auto break-words text-right leading-[18px]">
        <div className="flex  mt-0 mr-[-10px] mb-[5px] flex-col">
          <div>© 2024 Лучшая музыка</div>
          <div>Проект компании Blabla</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
