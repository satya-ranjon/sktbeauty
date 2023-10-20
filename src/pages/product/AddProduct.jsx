import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import toast from "react-hot-toast";
import ProductForm from "./ProductForm";
import useTheme from "../../hooks/useTheme";

const AddProduct = () => {
  const [resetForm, setResetForm] = useState(false);
  const { dark } = useTheme();

  const handleCreate = async (value) => {
    setResetForm(!resetForm);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/product`,
        {
          method: "POST",
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
      if (data?.acknowledged) setResetForm(!resetForm);
      toast.success("Product Create Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={` ${dark ? "bg-zinc-800" : "bg-[#f6eeff]"}`}>
      <PageHeader title="Create Product" currentPage="Product add" />
      <div className=" container mx-auto px-5">
        <ProductForm getValue={handleCreate} resetForm={resetForm} />
      </div>
    </div>
  );
};

export default AddProduct;
