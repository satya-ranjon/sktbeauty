import SingleSlider from "./SingleSlider";

const BrandSlider = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <div className=" flex">
      <SingleSlider start={randomNumber} end={randomNumber + 1} />
      <SingleSlider />
    </div>
  );
};

export default BrandSlider;
