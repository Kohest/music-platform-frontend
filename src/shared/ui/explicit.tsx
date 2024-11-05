import React from "react";

const Explicit = () => {
  return (
    <span
      title="Может содержать контент для взрослых"
      className="flex items-center justify-center text-[#777] -mt-[2px] -ml-[5px] w-[62px] h-[20px] tracking-widest
     bg-[#f7f7f7] after:uppercase after:-mr-[2px] after:-mb-[1px] after:content-['explicit'] text-[10px]"
    />
  );
};

export default Explicit;
