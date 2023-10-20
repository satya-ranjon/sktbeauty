import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useProducts from "../../hooks/useProducts";
import Loader from "../../components/Loader";
import SingleProductCard from "../../components/SingleProductCard";
import useTheme from "../../hooks/useTheme";

const OurProducts = () => {
  const [data, loading] = useProducts();
  const { dark } = useTheme();

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className={`${
        dark ? "bg-zinc-800 text-zinc-200" : "bg-[#f6eeff] text-[#471d6b]"
      } `}>
      <div className=" container mx-auto px-5 ">
        <SectionTitle> Beauty Products</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-10 mt-20">
          {data?.slice(0, 9).map((item) => (
            <Link key={item._id} to={`/product/${item._id}`}>
              <SingleProductCard product={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
