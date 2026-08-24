import React from "react";

const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row justify-center items-center bg-black">
      <div className="breeding-rhombus-spinner">
        <div className="rhombus child-1"></div>
        <div className="rhombus child-2"></div>
        <div className="rhombus child-3"></div>
        <div className="rhombus child-4"></div>
        <div className="rhombus child-5"></div>
        <div className="rhombus child-6"></div>
        <div className="rhombus child-7"></div>
        <div className="rhombus child-8"></div>
        <div className="rhombus big"></div>
      </div>
    </div>
  );
};

export default Loader;
