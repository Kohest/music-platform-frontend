import React, { FC } from "react";
import Input from "../../../shared/ui/input";
interface Props {
  optionText: string;
  registerAsValue: string;
  placeholder?: string;
  inputType: string;
}
const ProfileFormOption: FC<Props> = ({
  optionText,
  registerAsValue,
  placeholder,
  inputType,
}) => {
  return (
    <div className="flex justify-between border-b border-[#e5e5e5] pt-[23px] pb-[22px] items-center">
      <div className="mr-[30px] flex-[1_1_100%] text-[16px]">
        {optionText}:{" "}
      </div>
      <Input
        textSize="small"
        className="w-[600px]"
        registerAsValue={registerAsValue}
        type={inputType}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ProfileFormOption;
