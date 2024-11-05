import React, { FC } from "react";
import { cn } from "../utils/cnUtil";
import { Loader } from "lucide-react";
enum buttonVariant {
  white = "white",
  outline = "outline",
}
interface Props {
  text: string;
  disabled?: boolean;
  className?: string;
  variant?: keyof typeof buttonVariant;
  onClick?: () => void;
}
const Button: FC<Props> = ({
  text,
  className,
  disabled,
  variant = "white",
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      onClick={onClick}
      className={cn(
        className,
        "h-14 w-full text-[16px] font-bold leading-5  text-center rounded-[20px]  duration-150 active:scale-95 overflow-hidden",
        variant === "white" && "bg-white hover:bg-[#ebebebd3] text-[#1f1f24]",
        variant == "outline" &&
          "text-white bg-transparent border border-[#222426] hover:border-[#e1e1e5] hover:bg-[#292933] duration-150",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {disabled ? <Loader className="animate-spin inline-block" /> : text}
    </button>
  );
};

export default Button;
