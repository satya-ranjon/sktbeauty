import { useEffect, useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import RatingInput from "../../components/RatingInput";

import SelectProductType from "../../components/SelectProductType";
import SelectProductBrand from "../../components/SelectProductBrand";
import CheckBoxInput from "../../components/CheckBoxInput";
import toast from "react-hot-toast";

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

const initialState = {
  name: "",
  imageUrl: "",
  types: [],
  brandName: {},
  price: "",
  description: "",
  rating: "",
  new: false,
  sale: false,
};

const ProductForm = ({ getValue = () => {}, resetForm }) => {
  const [state, setState] = useState(initialState);

  const getSelectedTypesValue = (value) => {
    setState((prev) => ({ ...prev, types: value }));
  };
  const getRatingValue = (value) => {
    setState((prev) => ({ ...prev, rating: value }));
  };
  const getBrand = (value) => {
    setState((prev) => ({ ...prev, brandName: value }));
  };

  useEffect(() => {
    setState(initialState);
  }, [resetForm]);

  const handleSubmit = (e) => {
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
    getValue(state);

    // try {
    //   const response = await fetch(
    //     `${import.meta.env.VITE_SERVER_URL}/product`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(state),
    //     }
    //   );

    //   if (!response.ok) {
    //     toast.error("Network response was not ok");
    //   }

    //   const data = await response.json();
    //   console.log(data);
    //   setResetForm(!resetForm);
    //   setState(initialState);
    //   toast.success("Product Create Successfully");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <form onSubmit={handleSubmit} className=" py-10 flex flex-col gap-5">
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
        reset={resetForm}
        label="Select Product Types"
      />
      <SelectProductBrand
        label="Select Product Brand"
        getValue={getBrand}
        reset={resetForm}
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
        reset={resetForm}
        label="Product Rating"
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
          onChange={() => setState((prev) => ({ ...prev, sale: !prev.sale }))}
        />
      </div>

      <Button>Create Product</Button>
    </form>
  );
};

export default ProductForm;
