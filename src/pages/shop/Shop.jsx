import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import SingleProductCard from "../../components/SingleProductCard";
import useProducts from "../../hooks/useProducts";
import useTheme from "../../hooks/useTheme";
import useProductBrand from "../../hooks/useProductBrand";
import CheckBoxInput from "../../components/CheckBoxInput";
import { useState } from "react";
import SkeletonBox from "../../components/skeleton/SkeletonBox";
import SkeletonBar from "../../components/skeleton/SkeletonBar";
import SingleProductSkeleton from "../../components/skeleton/SingleProductSkeleton";

const Shop = () => {
  const [selectBrand, setSelectBrand] = useState([]);
  const [filterProduct, setFilterProducts] = useState([]);
  const [data, loading] = useProducts();
  const [brands, brandLoading] = useProductBrand();
  const { dark } = useTheme();

  let products = filterProduct.length > 0 ? filterProduct : data;

  const handleBrandCheck = (value) => {
    const findSelectBrand = selectBrand?.find((i) => i._id === value._id);

    if (findSelectBrand) {
      const newSelectBrands = selectBrand?.filter((i) => i._id !== value._id);
      setSelectBrand(newSelectBrands);

      const RemoveSelectedBrandProducts = filterProduct?.filter(
        (item) => item?.brandName._id !== value._id
      );
      setFilterProducts(RemoveSelectedBrandProducts);
      return;
    }
    const filterSelectedBrandProducts = data?.filter(
      (item) => item?.brandName._id === value._id
    );

    setFilterProducts((prev) => [...prev, ...filterSelectedBrandProducts]);

    setSelectBrand((prev) => [...prev, value]);
  };

  return (
    <div
      className={`${
        dark ? "bg-zinc-800 text-zinc-200" : "bg-[#f6eeff] text-[#471d6b]"
      } `}>
      <PageHeader title="Shop" currentPage="Shop" />
      <div className=" container mx-auto px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-7 gap-4">
          <div className=" col-span-2 lg:col-span-1 ">
            <h1 className="  text-3xl border-b-2 pb-3">Brands</h1>
            {brandLoading ? (
              <SkeletonBox>
                <div className=" grid grid-cols-3 md:grid-cols-1 gap-2 mt-3">
                  <SkeletonBar width="w-full" />
                  <SkeletonBar width="w-full" />
                  <SkeletonBar width="w-full" />
                  <SkeletonBar width="w-full" />
                  <SkeletonBar width="w-full" />
                  <SkeletonBar width="w-full" />
                </div>
              </SkeletonBox>
            ) : (
              <div className=" grid grid-cols-3 md:grid-cols-1 gap-2 mt-3">
                {brands?.map((item) => {
                  return (
                    <CheckBoxInput
                      key={item._id}
                      label={item.name}
                      onClick={() => handleBrandCheck(item)}
                    />
                  );
                })}
              </div>
            )}
          </div>
          <div className=" col-span-5 md:col-span-4 lg:col-span-5 xl:col-span-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-5 gap-y-10 ">
              {loading ? (
                <>
                  <SingleProductSkeleton />
                  <SingleProductSkeleton />
                  <SingleProductSkeleton />
                  <SingleProductSkeleton />
                  <SingleProductSkeleton />
                  <SingleProductSkeleton />
                </>
              ) : (
                products?.map((item) => (
                  <Link key={item._id} to={`/product/${item._id}`}>
                    <SingleProductCard product={item} />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
