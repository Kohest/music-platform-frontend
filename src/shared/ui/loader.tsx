import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#ffdb4d]"></div>
    </div>
  );
};

export default Loader;
