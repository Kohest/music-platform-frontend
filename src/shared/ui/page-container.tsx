import React, { FC } from "react";
interface Props {
  children: JSX.Element;
}
const PageContainer: FC<Props> = ({ children }) => {
  return (
    <div className="w-[950px] pt-[30px] pr-[30px] pb-[60px] pl-[30px] flex-[1_0_auto] min-h-[700px]">
      {children}
    </div>
  );
};

export default PageContainer;
