import React, { FC } from "react";
import { cn } from "../utils/cnUtil";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "./error-text";
interface Props {
  type: string;
  placeholder?: string;
  className?: string;
  registerAsValue: string;
  textSize?: keyof typeof TextSize;
  valueAsNumber?: boolean;
}
enum TextSize {
  small = "small",
  large = "large",
}
const Input: FC<Props> = ({
  type,
  placeholder,
  className,
  registerAsValue,
  valueAsNumber,
  textSize = "large",
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const value = watch(registerAsValue);
  const errorText = errors[registerAsValue]?.message as string;
  return (
    <div className={className}>
      <input
        {...register(registerAsValue, { valueAsNumber })}
        type={type}
        placeholder={placeholder}
        className={cn(
          "text-[24px] px-4 h-[56px] w-full border border-[rgba(211,211,222,.2)] focus:border-[#d8dce6] rounded-[20px]",
          errorText && "border-[#f33]",
          textSize === TextSize.small && "text-[16px]"
        )}
      />
      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};

export default Input;
