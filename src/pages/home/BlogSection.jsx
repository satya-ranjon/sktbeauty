import { LuCalendarDays } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import SectionTitle from "../../components/SectionTitle";
import useGetBlog from "../../hooks/useGetBlog";
import Loader from "../../components/Loader";
import useTheme from "../../hooks/useTheme";

const BlogSection = () => {
  const [data, loading] = useGetBlog();
  const { dark } = useTheme();

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className={`${
        dark ? "bg-zinc-800 text-zinc-200" : "bg-[#f6eeff] text-[#471d6b]"
      } `}>
      <div className="py-16 container mx-auto px-5">
        <h1 className=" text-center text-xl font-normal italic">Beauty News</h1>

        <SectionTitle> LATEST FROM BLOG</SectionTitle>

        <div className="mt-10">
          <div className=" cursor-pointer flex flex-col lg:flex-row  gap-4 justify-between items-start">
            {data[0]?._id && (
              <div className=" w-full">
                <img src={data[0]?.img} alt="" className=" w-full h-[370px]" />
                <div className=" flex justify-start items-center gap-3 text-sm py-3 italic border-b-[1px] border-[#471d6b]">
                  <div className=" flex justify-start items-center gap-2">
                    <LuCalendarDays className=" text-xl " />
                    <span>Fab 10,2023</span>
                  </div>
                  <div className=" flex justify-start items-center gap-2">
                    <FaUserAlt className=" text-xl " />
                    <span>{data[0]?.author}</span>
                  </div>
                  <div className=" flex justify-start items-center gap-2">
                    <AiOutlineMessage className=" text-xl " />
                    <span>{data[0]?.comment}</span>
                  </div>
                </div>
                <h1 className=" text-xl font-semibold uppercase  mt-3">
                  {data[0]?.title}
                </h1>
                <div className="">{data[0]?.description.slice(0, 70)}..</div>
                <button className=" mt-2 text-md font-semibold text-white bg-[#471d6b] px-2 py-2 flex justify-start items-center gap-1">
                  <BiSolidRightArrow /> <span>Read More</span>
                </button>
              </div>
            )}
            <div className=" w-full flex flex-col gap-4 md:gap-2 justify-start items-start ">
              {data?.slice(1, 4)?.map((item) => (
                <div
                  key={item._id}
                  className="w-full flex flex-col md:flex-row justify-start items-start gap-3">
                  <div className="w-full">
                    <img src={item.img} alt="" className=" h-[180px] w-full" />
                  </div>
                  <div className="w-full">
                    <div className=" w-full flex justify-start items-center gap-3 text-sm py-3 italic border-b-[1px] border-[#471d6b]">
                      <div className=" flex justify-start items-center gap-2">
                        <LuCalendarDays className=" text-xl " />
                        <span>Fab 10,2023</span>
                      </div>
                      <div className=" flex justify-start items-center gap-2">
                        <FaUserAlt className=" text-xl " />
                        <span>{item.author}</span>
                      </div>
                      <div className=" flex justify-start items-center gap-2">
                        <AiOutlineMessage className=" text-xl " />
                        <span>{item.comment}</span>
                      </div>
                    </div>
                    <h1 className="uppercase text-xl font-semibold   mt-3">
                      {item.title}
                    </h1>
                    <div className="">{item.description?.slice(0, 50)}...</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
