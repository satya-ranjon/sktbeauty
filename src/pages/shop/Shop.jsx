import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import PageHeader from "../../components/PageHeader";
import SingleProductCard from "../../components/SingleProductCard";
import useProducts from "../../hooks/useProducts";
import useTheme from "../../hooks/useTheme";

const Shop = () => {
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
      <PageHeader title="Shop" currentPage="Shop" />
      <div className=" container mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-10 mt-20">
          {data?.map((item) => (
            <Link key={item._id} to={`/product/${item._id}`}>
              <SingleProductCard product={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
