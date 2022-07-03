import React from "react";
import Skills from "./Skills";

const Work = () => {
  return (
    <>
      <div>
        <div className="">
          <h1 className="font-bold text-[1.2rem] dark:text-white">Work</h1>
          <div className="w-12 h-1 bg-black mb-4 dark:bg-slate-500"></div>
          <p className="dark:text-white">
            Satrio is a freelance and front-end developer based in Bekasi. I
            work with the latest front-end frameworks like Next, React js and
            React Native. I'm always learning to keep improving and be the best.
          </p>
          <Skills />
        </div>
      </div>
    </>
  );
};

export default Work;
