import React, { FC } from "react";
import { cn } from "../../../../shared/utils/cnUtil";
interface Props {
  text: string;
  onClick?: () => void;
  active: boolean;
  className?: string;
  loading: boolean;
}
const SortButton: FC<Props> = ({
  text,
  onClick,
  className,
  active,
  loading,
}) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={cn(
        className,
        "pl-[2px] bg-[#f4f4f4] min-w-[140px] py-[2px] h-7",
        active && "bg-[#ffdb4d] duration-300",
        loading && "opacity-50 cursor-not-allowed"
      )}
      style={{ borderRadius: "0 4px 4px 0" }}
    >
      <span className="min-w-[28px] text-[13px]">{text}</span>
    </button>
  );
};

export default SortButton;
