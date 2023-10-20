import { useEffect, useState } from "react";
import brand from "../../data/brands.json";

const SingleSlider = ({ start = 0, end = 1 }) => {
  const [activeSlide, setActiveSlide] = useState({ start: start, end: end });

  const handleSliderNext = () => {
    if (brand.length > activeSlide.end) {
      setActiveSlide((prev) => ({
        ...prev,
        start: prev.start + 1,
        end: prev.end + 1,
      }));
      return;
    }
    if (brand.length === activeSlide.end) {
      setActiveSlide((prev) => ({
        ...prev,
        start: 0,
        end: 1,
      }));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSliderNext();
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <div className=" w-full">
      {brand.slice(activeSlide.start, activeSlide.end)?.map((item) => (
        <div key={item._id} className=" w-full h-full relative">
          <img src={item.img} className=" w-full h-96" />
          <div
            style={{ color: item.color }}
            className={` absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-5 justify-center items-start pl-28 text-[${item.color}]`}>
            <h1 className="  uppercase tracking-[.45em] font-semibold">
              {item.title}
            </h1>
            <h1 className=" text-5xl  uppercase tracking-[.25em] font-semibold">
              {item.offer}
            </h1>
            <button
              style={{ borderBlockColor: item.color, color: item.color }}
              className={` px-4 py-2 font-semibold text-md border-2 border-[${item.color}]`}>
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleSlider;
