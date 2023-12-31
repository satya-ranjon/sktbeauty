import { GrFormView } from "react-icons/gr";
import useTheme from "../hooks/useTheme";
import Rating from "./Rating";
import Button from "./Button";

const SingleProductCard = ({ product }) => {
  const { dark } = useTheme();

  return (
    <div
      className={`${
        dark ? "bg-zinc-700" : "bg-white"
      } flex justify-start gap-2 items-start  p-5 group cursor-pointer relative`}>
      <div className="w-36 h-full relative">
        <div className="w-full block">
          <img src={product?.imageUrl} alt="img" className=" w-full h-36" />
        </div>
        <div className=" absolute top-0 left-0 bottom-0 right-0 border-2 opacity-0 group-hover:opacity-100 duration-300 transition-all ">
          <div className=" h-full w-full flex justify-center items-center">
            <GrFormView className=" text-6xl " />
          </div>
        </div>
      </div>
      <div>
        <h1 className="uppercase">{product.name}</h1>

        <div className=" text-md text-zinc-500 py-3">
          {product?.description?.slice(0, 50)}
        </div>
        <div className=" flex justify-start items-center">
          <Rating rating={product?.rating} />
        </div>
        <div className=" flex justify-between items-center">
          <h2 className=" text-end p-4 clear-left text-md font-semibold">
            ${product.price}
          </h2>
          <button className=" bg-violet-800 text-white  py-1 text-sm px-3 rounded-sm">
            {" "}
            Add Card
          </button>
        </div>
      </div>
      <div className=" absolute -top-3 right-0 z-10">
        <div className="flex gap-2">
          {product?.new && (
            <span className="p-1 px-3 bg-violet-600 text-white font-semibold text-sm z-10">
              New
            </span>
          )}
          {product?.sale && (
            <span className="p-1 px-3 bg-violet-900 text-white font-semibold text-sm z-10">
              SALE
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
