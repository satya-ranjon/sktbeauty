import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import useTheme from "../../hooks/useTheme";

import Button from "../../components/Button";
import InputField from "../../components/InputField";
import RatingInput from "../../components/RatingInput";

import SelectProductType from "../../components/SelectProductType";
import SelectProductBrand from "../../components/SelectProductBrand";
import CheckBoxInput from "../../components/CheckBoxInput";

const types = [
  { id: "1", name: "Skincare" },
  { id: "2", name: "Makeup" },
  { id: "3", name: "Haircare" },
  { id: "4", name: "Fragrances" },
  { id: "5", name: "Bath and Body" },
  { id: "6", name: "Nail Care" },
  { id: "7", name: "Oral Care" },
  { id: "8", name: "Men's Brooming" },
];

const UpdateProduct = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  const { dark } = useTheme();

  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!state.name) {
      toast.error("Product Name is Require!");
      return;
    } else if (!state.imageUrl) {
      toast.error("Product Image Url is Require!");
      return;
    } else if (state.types.length === 0) {
      toast.error("Product Types is Require!");
      return;
    } else if (!state.brandName?._id) {
      toast.error("Product Brand is Require!");
      return;
    } else if (!state.price) {
      toast.error("Product Price is Require!");
      return;
    } else if (!state.description) {
      toast.error("Product Description is Require!");
      return;
    } else if (!state.rating) {
      toast.error("Product Rating is Require!");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/product/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        }
      );
      if (!response.ok) {
        toast.error("Network response was not ok");
      }
      await response.json();
      toast.success("Product Update Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedTypesValue = (value) => {
    setState((prev) => ({ ...prev, types: value }));
  };
  const getRatingValue = (value) => {
    setState((prev) => ({ ...prev, rating: value }));
  };
  const getBrand = (value) => {
    setState((prev) => ({ ...prev, brandName: value }));
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={`${dark ? "bg-zinc-800" : "bg-[#f6eeff]"}`}>
      <PageHeader title="Update Product" currentPage="Product Update" />
      <div className=" container mx-auto px-5">
        <form onSubmit={handleUpdate} className=" py-10 flex flex-col gap-5">
          <InputField
            label="Product Name"
            value={state.name}
            onChange={(e) =>
              setState((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <InputField
            label="Product Image Url"
            value={state.imageUrl}
            onChange={(e) =>
              setState((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
          />

          <SelectProductType
            types={types}
            getValue={getSelectedTypesValue}
            label="Select Product Types"
            initialData={state.types}
          />

          <SelectProductBrand
            label="Select Product Brand"
            getValue={getBrand}
            initialData={state.brandName}
          />

          <InputField
            type="number"
            label="Product Price"
            value={state.price}
            onChange={(e) =>
              setState((prev) => ({ ...prev, price: e.target.value }))
            }
          />
          <InputField
            textarea={true}
            label="Product Short Description"
            value={state.description}
            onChange={(e) =>
              setState((prev) => ({ ...prev, description: e.target.value }))
            }
          />

          <RatingInput
            getValue={getRatingValue}
            label="Product Rating"
            initialData={state.rating}
          />

          <div className=" flex justify-start gap-3">
            <CheckBoxInput
              label="New Product (Optional)"
              checked={state.new}
              onChange={() => setState((prev) => ({ ...prev, new: !prev.new }))}
            />
            <CheckBoxInput
              label="Sale Product (Optional)"
              checked={state.sale}
              onChange={() =>
                setState((prev) => ({ ...prev, sale: !prev.sale }))
              }
            />
          </div>

          <Button>Update Product</Button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(UpdateProduct);
