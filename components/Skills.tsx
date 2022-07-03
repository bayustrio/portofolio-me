import React from "react";
import Typescript from "../images/typescript.svg";
import reactJs from "../images/reactJs.svg";
import nextJs from "../images/nextJs.svg";
import Redux from "../images/Redux.svg";
import Git from "../images/git.svg";
import Image from "next/image";
const Skills = () => {
  return (
    <>
      <div className="my-14">
        <h1 className="font-bold text-[1.2rem] dark:text-white">Skills</h1>
        <div className="w-12 h-1 bg-black mb-4 dark:bg-slate-500"></div>

        <div className="mx-auto xl:flex m-auto  lg:flex grid md:mx-auto sm:mx-auto  grid-cols-3  lg:flex-row md:flex-row flex-col justify-center lg:justify-center gap-3 w-full">
          <div className="xl:w-[13%]  lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] flex hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[#017ACC] items-center flex-col justify-center xl:h-[15vh] bg-white p-3  ">
            <div className="w-[90%] mx-auto overflow-hidden flex justify-center">
              <Image height={55} width={55} src={Typescript} />
            </div>
            <span className="p-0 m-0">Typescript</span>
          </div>

          {/*  */}
          <div className="xl:w-[13%]  lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] flex hover:shadow-[#61DBFB] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] items-center flex-col justify-center xl:h-[15vh] bg-white p-3  ">
            <div className="w-[90%] mx-auto overflow-hidden flex justify-center">
              <Image height={65} width={65} src={reactJs} />
            </div>
            <span className="p-0 m-0">React js</span>
          </div>
          {/*  */}
          <div className="xl:w-[13%]  lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] flex hover:shadow-[#000000] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] items-center flex-col justify-center xl:h-[15vh] bg-white p-3  ">
            <div className="w-[90%] mx-auto overflow-hidden flex justify-center">
              <Image
                className="w-[80px] h-[80px]"
                height={80}
                width={80}
                src={nextJs}
              />
            </div>
            <span className="p-0 m-0">Next js</span>
          </div>
          {/*  */}
          <div className="xl:w-[13%]  lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] flex hover:shadow-[#764ABC] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] items-center flex-col justify-center xl:h-[15vh] bg-white p-3  ">
            <div className="w-[90%] mx-auto overflow-hidden flex justify-center">
              <Image
                className="w-[80px] h-[80px]"
                height={80}
                width={80}
                src={Redux}
              />
            </div>
            <span className="p-0 m-0">Redux</span>
          </div>
          {/*  */}
          <div className="xl:w-[13%]  lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] flex hover:shadow-[#DE4C35] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] items-center flex-col justify-center xl:h-[15vh] bg-white p-3  ">
            <div className="w-[90%] mx-auto overflow-hidden flex justify-center">
              <Image
                className="w-[80px] h-[80px]"
                height={80}
                width={80}
                src={Git}
              />
            </div>
            <span className="p-0 m-0">Git</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
