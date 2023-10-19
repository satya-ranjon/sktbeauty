import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import BrandSlider from "./BrandSlider";
import Rating from "../../components/Rating";
import Button from "../../components/Button";

const BrandProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(data);

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
    <div className="bg-[#f6eeff]">
      <BrandSlider />
      <div className=" container mx-auto px-5 py-20">
        {data?.length === 0 && (
          <h1 className=" text-5xl font-semibold  text-center mt-3 text-[#471d6b] uppercase">
            Product Not Found
          </h1>
        )}
        {data?.length > 0 && (
          <>
            <SectionTitle>BRANDED PRODUCTS</SectionTitle>
            <div className=" grid grid-cols-4 gap-5 mt-20 text-violet-950">
              {data?.map((item) => {
                return (
                  <div key={item._id} className=" bg-white">
                    <Link
                      to={`/product/${item._id}`}
                      className="w-full bg-white relative">
                      <img
                        src={item.imageUrl}
                        className=" w-full h-72"
                        alt=""
                      />
                      <h1 className="mt-5 px-5 text-xl font-semibold uppercase text-center">
                        {item.name}
                      </h1>
                      <h1 className="py-3 text-sm font-semibold text-center px-10 text-zinc-400">
                        {item.description.slice(0, 70)}
                      </h1>
                      <div className=" pb-5">
                        <Rating rating={item.rating} />
                      </div>
                      <div className="py-5 text-center font-bold text-xl">
                        ${item.price}
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
                    <div className=" flex justify-center items-center pb-5">
                      <Button>Add Card</Button>
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
