import { images } from "../constant";

const Logo = () => {
  return (
    <div className="flex items-end justify-center  gap-1 text-white">
      <img src={images.logo} alt="logo" className=" w-10 h-10" />
      <span className="font-normal text-2xl logo-text ">SKT-Beauty</span>
    </div>
  );
};

export default Logo;
