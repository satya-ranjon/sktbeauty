import { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PageHeader from "../../components/PageHeader";
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

const AddProduct = () => {
  const [state, setState] = useState(initialState);
  const [resetForm, setResetForm] = useState(false);

  const getSelectedTypesValue = (value) => {
    setState((prev) => ({ ...prev, types: value }));
  };
  const getRatingValue = (value) => {
    setState((prev) => ({ ...prev, rating: value }));
  };
  const getBrand = (value) => {
    setState((prev) => ({ ...prev, brandName: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setResetForm(!resetForm);
    setState(initialState);
  };

  return (
    <div className="bg-[#f6eeff]">
      <PageHeader title="Create Product" currentPage="Product add" />
      <div className=" container mx-auto px-5">
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
              onChange={() =>
                setState((prev) => ({ ...prev, sale: !prev.sale }))
              }
            />
          </div>

          <Button>Create Product</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
