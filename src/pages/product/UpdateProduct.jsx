import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProductForm from "./ProductForm";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import useTheme from "../../hooks/useTheme";

const UpdateProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dark } = useTheme();

  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/product/${id}`)
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

  const handleUpdate = async (value) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/product/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );

      if (!response.ok) {
        toast.error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      toast.success("Product Update Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={`${dark ? "bg-zinc-800" : "bg-[#f6eeff]"}`}>
      <PageHeader title="Create Product" currentPage="Product add" />
      <div className=" container mx-auto px-5">
        <ProductForm getValue={handleUpdate} initialData={data} />
      </div>
    </div>
  );
};

export default UpdateProduct;
