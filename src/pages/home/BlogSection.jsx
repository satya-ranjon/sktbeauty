import { LuCalendarDays } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";

const BlogSection = () => {
  return (
    <div className="bg-[#f6eeff] text-[#471d6b]">
      <div className="py-16 container mx-auto px-5">
        <h1 className=" text-center text-xl font-normal italic">Beauty News</h1>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className=" text-5xl font-semibold  text-center mt-3  uppercase">
            LATEST FROM BLOG
          </h1>
          <span className=" h-1 w-56 bg-[#471d6b]"></span>
          <span className=" h-1 w-40 bg-[#471d6b]"></span>
        </div>
        <div className="mt-10">
          <div className=" flex flex-col lg:flex-row  gap-4 justify-between items-start">
            <div className=" w-full">
              <img
                src="https://i.ibb.co/7pqwdp7/1-FILEminimizer-1.jpg"
                alt=""
                className=" w-full h-[370px]"
              />
              <div className=" flex justify-start items-center gap-3 text-sm py-3 italic border-b-[1px] border-[#471d6b]">
                <div className=" flex justify-start items-center gap-2">
                  <LuCalendarDays className=" text-xl " />
                  <span>Fab 10,2023</span>
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaUserAlt className=" text-xl " />
                  <span>Jolie Dayn</span>
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <AiOutlineMessage className=" text-xl " />
                  <span>0</span>
                </div>
              </div>
              <h1 className=" text-xl font-semibold uppercase  mt-3">
                Integer vitae libero ac risus
              </h1>
              <div className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy ....
              </div>
              <button className=" mt-2 text-md font-semibold text-white bg-[#471d6b] px-2 py-2 flex justify-start items-center gap-1">
                <BiSolidRightArrow /> <span>Read More</span>
              </button>
            </div>
            <div className=" w-full flex flex-col gap-2 justify-start items-start ">
              <div className="w-full flex justify-start items-start gap-3">
                <div className="w-full">
                  <img
                    src="https://i.ibb.co/7pqwdp7/1-FILEminimizer-1.jpg"
                    alt=""
                    className=" h-[180px] w-full"
                  />
                </div>
                <div className="w-full">
                  <div className=" w-full flex justify-start items-center gap-3 text-sm py-3 italic border-b-[1px] border-[#471d6b]">
                    <div className=" flex justify-start items-center gap-2">
                      <LuCalendarDays className=" text-xl " />
                      <span>Fab 10,2023</span>
                    </div>
                    <div className=" flex justify-start items-center gap-2">
                      <FaUserAlt className=" text-xl " />
                      <span>Jolie Dayn</span>
                    </div>
                    <div className=" flex justify-start items-center gap-2">
                      <AiOutlineMessage className=" text-xl " />
                      <span>0</span>
                    </div>
                  </div>
                  <h1 className="uppercase text-xl font-semibold   mt-3">
                    Integer vitae libero ac risus
                  </h1>
                  <div className="">
                    Lorem Ipsum is simply dummy text of the printing and
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-start gap-3">
                <div className="w-full">
                  <img
                    src="https://i.ibb.co/7pqwdp7/1-FILEminimizer-1.jpg"
                    alt=""
                    className=" h-[180px] w-full"
                  />
                </div>
                <div className="w-full">
                  <div className=" w-full flex justify-start items-center gap-3 text-sm py-3 italic border-b-[1px] border-[#471d6b]">
                    <div className=" flex justify-start items-center gap-2">
                      <LuCalendarDays className=" text-xl " />
                      <span>Fab 10,2023</span>
                    </div>
                    <div className=" flex justify-start items-center gap-2">
                      <FaUserAlt className=" text-xl " />
                      <span>Jolie Dayn</span>
                    </div>
                    <div className=" flex justify-start items-center gap-2">
                      <AiOutlineMessage className=" text-xl " />
                      <span>0</span>
                    </div>
                  </div>
                  <h1 className=" uppercase text-xl font-semibold   mt-3">
                    Integer vitae libero ac risus
                  </h1>
                  <div className="">
                    Lorem Ipsum is simply dummy text of the printing and
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-start gap-3">
                <div className="w-full">
                  <img
                    src="https://i.ibb.co/7pqwdp7/1-FILEminimizer-1.jpg"
                    alt=""
                    className=" h-[180px] w-full"
                  />
                </div>
                <div className="w-full">
                  <div className=" w-full flex justify-start items-center gap-3 text-sm py-3 italic border-b-[1px] border-[#471d6b]">
                    <div className=" flex justify-start items-center gap-2">
                      <LuCalendarDays className=" text-xl " />
                      <span>Fab 10,2023</span>
                    </div>
                    <div className=" flex justify-start items-center gap-2">
                      <FaUserAlt className=" text-xl " />
                      <span>Jolie Dayn</span>
                    </div>
                    <div className=" flex justify-start items-center gap-2">
                      <AiOutlineMessage className=" text-xl " />
                      <span>0</span>
                    </div>
                  </div>
                  <h1 className="uppercase text-xl font-semibold   mt-3">
                    Integer vitae libero ac risus
                  </h1>
                  <div className="">
                    Lorem Ipsum is simply dummy text of the printing and
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
