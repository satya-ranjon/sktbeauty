import SectionTitle from "../../components/SectionTitle";
import Loader from "../../components/Loader";
import useProductBrand from "../../hooks/useProductBrand";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

const Brand = () => {
  const [data, loading] = useProductBrand();
  const { dark } = useTheme();

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className={`${
        dark ? "bg-zinc-800 text-zinc-200" : "bg-[#f6eeff] text-[#471d6b]"
      } `}>
      <div className=" container mx-auto px-5 py-20">
        <SectionTitle> Ours Brands</SectionTitle>
        <div
          className={`flex flex-wrap justify-center items-center gap-5 mt-10 ${
            dark && "bg-zinc-700"
          }`}>
          {data?.map((item, i) => (
            <Link
              to={`/brand-product/${item?._id}`}
              key={i}
              className="p-10 flex flex-col gap-4 opacity-60 hover:opacity-100 ">
              <div className="">
                <img src={item.img} alt="" className="w-56" />
              </div>
              <h1 className="uppercase font-semibold text-xl tracking-[.45em]">
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
