import { Link } from "react-router-dom";
import SingleProductCard from "./SingleProductCard";
import useProducts from "../hooks/useProducts";
import Loader from "./Loader";
import useDisplay from "../hooks/useDisplay";
import { useLayoutEffect, useState } from "react";

const RelatedProduct = () => {
  const [show, setShow] = useState(3);
  const [data, loading] = useProducts();
  const [windowWidth] = useDisplay();

  useLayoutEffect(() => {
    if (windowWidth > 1024) {
      setShow(3);
    }
    if (windowWidth <= 1024) {
      setShow(4);
    }
  }, [windowWidth]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-10 mt-20">
      {data?.slice(0, show).map((item) => (
        <Link key={item._id} to={`/product/${item._id}`}>
          <SingleProductCard product={item} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedProduct;
