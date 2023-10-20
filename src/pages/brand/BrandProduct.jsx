import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import BrandSlider from "./BrandSlider";
import Rating from "../../components/Rating";
import Button from "../../components/Button";
import useTheme from "../../hooks/useTheme";

const BrandProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { dark } = useTheme();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/brand-products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className={`${
        dark ? "bg-zinc-800 text-zinc-200" : "bg-[#f6eeff] text-[#471d6b]"
      } `}>
      <BrandSlider />
      <div className=" container mx-auto px-5 py-20">
        {data?.length === 0 && (
          <h1 className=" text-5xl font-semibold  text-center mt-3  uppercase">
            Product Not Found
          </h1>
        )}
        {data?.length > 0 && (
          <>
            <SectionTitle>BRANDED PRODUCTS</SectionTitle>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-20 text-violet-950">
              {data?.map((item) => {
                return (
                  <div
                    key={item._id}
                    className={` ${
                      dark ? " bg-zinc-700 text-zinc-200" : " bg-white"
                    }`}>
                    <Link
                      to={`/product/${item._id}`}
                      className="w-full  relative">
                      <img
                        src={item.imageUrl}
                        className=" w-full h-72"
                        alt=""
                      />
                      <h1 className="mt-5 px-5 text-xl font-semibold uppercase text-center">
                        {item.name}
                      </h1>
                      <h1 className="py-3 text-sm font-semibold text-center px-10 ">
                        {item.description.slice(0, 70)}
                      </h1>
                      <div className=" pb-2">
                        <Rating rating={item.rating} />
                      </div>
                      <div className=" text-center text-xl uppercase">
                        BRAND: {item?.brandName?.name}
                      </div>
                      <div className="py-3 text-center font-bold text-xl">
                        PRICE: ${item.price}
                      </div>
                      <div className=" flex flex-wrap gap-1 justify-center pb-3">
                        {item.types?.map((i) => (
                          <span
                            key={i.id}
                            className={`px-2 py-1 text-xs ${
                              dark ? "bg-violet-900" : "bg-zinc-300"
                            }`}>
                            {i.name}
                          </span>
                        ))}
                      </div>

                      <div className=" absolute -top-3 right-0 z-10">
                        <div className="flex gap-2">
                          {item?.new && (
                            <span className="p-1 px-3 bg-violet-600 text-white font-semibold text-sm z-10">
                              New
                            </span>
                          )}
                          {item?.sale && (
                            <span className="p-1 px-3 bg-violet-900 text-white font-semibold text-sm z-10">
                              SALE
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                    <div className=" flex justify-center items-center pb-5 gap-4">
                      <Link to={`/product/${item._id}`}>
                        <Button>Details </Button>
                      </Link>
                      <Link to={`/product-update/${item._id}`}>
                        <Button>Update </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BrandProduct;
