import { useState } from "react";
import slider from "../../data/slider.json";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState({ start: 0, end: 1 });
  console.log(activeSlide);
  const handleSliderNext = () => {
    if (slider.length > activeSlide.end) {
      setActiveSlide((prev) => ({
        ...prev,
        start: prev.start + 1,
        end: prev.end + 1,
      }));
    }
    if (slider.length === activeSlide.end) {
      setActiveSlide((prev) => ({
        ...prev,
        start: 0,
        end: 1,
      }));
    }
  };
  const handleSliderPrev = () => {
    if (activeSlide.start === 0) {
      setActiveSlide((prev) => ({
        ...prev,
        start: slider.length - 1,
        end: slider.length,
      }));
      return;
    }
    setActiveSlide((prev) => ({
      ...prev,
      start: prev.start - 1,
      end: prev.end - 1,
    }));
  };

  return (
    <div className=" flex justify-center items-center">
      {slider.slice(activeSlide.start, activeSlide.end)?.map((item, i) => (
        <div
          key={i}
          style={{ backgroundImage: `url(${item.img})` }}
          className={`bg-cover bg-no-repeat bg-center w-full h-[600px] relative bg-start`}>
          {/* <img src={item.img} alt="slider" className=" w-full h-[500px]" /> */}
          <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#471d6b33]">
            <div className="text-white container mx-auto px-5 flex flex-col justify-center items-start w-full h-full">
              <h2 className="tracking-[.45em] text-xl">
                {item.label.toUpperCase()}
              </h2>
              <div className=" mt-6">
                {item?.title.map((t, i) => (
                  <h1 key={i} className="tracking-[.25em] text-4xl md:text-6xl">
                    {t.toUpperCase()}
                  </h1>
                ))}
              </div>
              <button className="mt-8 border-2 border-white px-3 py-2">
                EXPLORE
              </button>
              <div className=" flex justify-start items-center gap-4">
                <button
                  onClick={handleSliderPrev}
                  className="mt-8 border-2 border-white px-3 py-2">
                  <AiOutlineArrowLeft />
                </button>
                <button
                  onClick={handleSliderNext}
                  className="mt-8 border-2 border-white px-3 py-2">
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
