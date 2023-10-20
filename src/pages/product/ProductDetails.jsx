import { useLoaderData } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Rating from "../../components/Rating";
import Button from "../../components/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import RelatedProduct from "../../components/RelatedProduct";
import toast from "react-hot-toast";
import useAuthentication from "../../hooks/useAuthentication";
import useTheme from "../../hooks/useTheme";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { dark } = useTheme();

  const product = useLoaderData();
  const {
    name,
    imageUrl,
    types,
    brandName,
    price,
    description,
    rating,
    new: ProductNew,
    sale,
  } = product || {};

  const { userId } = useAuthentication();

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  const handleAddCard = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          quantity: quantity,
          product: product,
        }),
      });

      if (!response.ok) {
        toast.error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      toast.success("Product Add Card Successfully");
      setQuantity(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        dark ? " bg-zinc-800 text-zinc-200" : "bg-[#f6eeff] text-violet-950"
      }`}>
      <PageHeader title="SHOP" currentPage="Product Details" />
      <div className=" container mx-auto px-5 py-20">
        <div className=" xl:mx-[200px]">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className=" relative">
              <img src={imageUrl} alt="" className=" w-[400px] h-[400px]" />
              <div className=" absolute -top-3 left-0 z-10">
                <div className="flex gap-2">
                  {ProductNew && (
                    <span className="p-1 px-3 bg-violet-600 text-white font-semibold text-sm z-10">
                      New
                    </span>
                  )}
                  {sale && (
                    <span className="p-1 px-3 bg-violet-900 text-white font-semibold text-sm z-10">
                      SALE
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5 items-start justify-start">
              <h1 className=" uppercase text-5xl font-normal ">{name}</h1>
              <div className=" text-zinc-500">{description}</div>
              <Rating rating={rating} />
              <h1 className=" font-semibold text-2xl">$ {price}</h1>
              <div className=" flex justify-center items-center h-full gap-2">
                <button className=" p-2 border-2 border-violet-950">
                  <AiOutlineMinus
                    className=" text-md"
                    onClick={decrementQuantity}
                  />
                </button>
                <span className=" text-md">{quantity}</span>

                <button className=" p-2 border-2 border-violet-950">
                  <AiOutlinePlus
                    className="text-md"
                    onClick={incrementQuantity}
                  />
                </button>
              </div>
              <Button onClick={handleAddCard}> ADD TO CARD</Button>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center mt-8 gap-10">
          <div className={`p-5 mb-0 border-2 my-4 ${dark && "bg-zinc-600"}`}>
            <img src={brandName?.img} alt="img" />
            <h1 className=" text-4xl font-semibold text-center">
              {brandName.name}
            </h1>
          </div>
          <div className="">
            <h1 className=" text-2xl font-semibold uppercase pb-4 ">
              category's
            </h1>
            <div className=" flex justify-start gap-5 items-center">
              {types?.map((i) => (
                <div
                  key={i.id}
                  className={`px-3 py-2 text-md ${
                    dark ? " bg-violet-900" : " bg-zinc-200"
                  }`}>
                  {i.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-14">
          <SectionTitle>RELATED PRODUCTS</SectionTitle>
          <RelatedProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
