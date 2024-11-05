import React, { FC } from "react";
interface Props {
  title: string;
  subtitle: string;
  image: string;
}
const EmptyList: FC<Props> = ({ title, subtitle, image }) => {
  return (
    <div className="relative pt-[15px] mb-8 text-left">
      <div className="text-center mb-[30px]">
        <p className="text-[22px] my-2">{title}</p>
        <p className="text-[15px] text-[#999]">{subtitle}</p>
      </div>
      <div className="text-center flex justify-center">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default EmptyList;
