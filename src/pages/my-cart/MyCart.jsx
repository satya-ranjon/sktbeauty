import Button from "../../components/Button";
import PageHeader from "../../components/PageHeader";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import useMyCard from "../../hooks/useMyCard";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";

const MyCart = () => {
  const [cards, setCards] = useState([]);
  const [data, loading] = useMyCard();
  const { dark } = useTheme();

  useEffect(() => {
    setCards(data);
  }, [data]);

  let subTotal = 0;
  cards?.map((item) => {
    const quantity = parseFloat(item?.quantity);
    const productPrice = parseFloat(item?.product?.price);
    subTotal += productPrice * quantity;
  });

  const shipping = 30;
  const total = subTotal + shipping;

  const handleDeleteCard = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/card/${id}`,
        {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        toast.error("Network response was not ok");
      }
      await response.json();
      const filterCard = cards?.filter((i) => i._id !== id);
      setCards(filterCard);
      toast.success("Card Delete Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }
  if (cards?.length === 0) {
    return (
      <div
        className={`py-32 ${
          dark ? " bg-zinc-800 text-zinc-200" : " bg-[#f6eeff] text-violet-950"
        }`}>
        <h1 className=" text-5xl font-semibold  text-center mt-3 uppercase">
          You have not card
        </h1>
        <div className=" flex justify-center items-center pt-5">
          <Link to="/">
            <Button> Continue Shoping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${
        dark ? " bg-zinc-800 text-zinc-200" : " bg-[#f6eeff] text-violet-950"
      }`}>
      <PageHeader title="CARD" currentPage="Card" />
      <div className=" container mx-auto px-5 py-20">
        <div className=" grid grid-cols-1 lg:grid-cols-3  lg:gap-5 xl:gap-10 ">
          <div className=" col-span-2  w-full ">
            {/* Single Card  */}
            {cards?.map((item) => (
              <div
                key={item._id}
                className={`grid grid-cols-2 md:grid-cols-3 gap-1  pr-5 border-b-2 py-2 ${
                  dark ? "bg-zinc-700" : "bg-white"
                }`}>
                <div className="col-span-2  ">
                  {/* Product info */}
                  <div className=" flex gap-4 justify-start items-center">
                    <img
                      src={item?.product?.imageUrl}
                      alt=""
                      className=" w-20 h-20"
                    />
                    <div className="">
                      <h1 className=" uppercase">{item?.product?.name}</h1>
                      <h2>${item?.product?.price}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-between gap-2 md:gap-0 items-center px-2 md:px-0">
                  <div className=" uppercase md:hidden">
                    sub total :
                    <span>
                      $
                      {parseFloat(item?.product?.price) *
                        parseFloat(item.quantity)}
                    </span>
                  </div>
                  <div className=" flex justify-center items-center h-full gap-2">
                    {/* <button className=" p-2 border-2 border-violet-950">
                      <AiOutlinePlus className="text-md" />
                    </button> */}
                    <span className=" text-md">{item?.quantity}</span>
                    {/* <button className=" p-2 border-2 border-violet-950">
                      <AiOutlineMinus className=" text-md" />
                    </button> */}
                  </div>
                  <div className="hidden md:block">
                    $
                    {parseFloat(item?.product?.price) *
                      parseFloat(item.quantity)}
                  </div>
                  <div className="">
                    <AiOutlineDelete
                      onClick={() => handleDeleteCard(item._id)}
                      className=" text-3xl cursor-pointer hover:text-red-600 duration-300 transition-colors"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" lg:col-span-1 mt-4 lg:mt-0 ">
            <div className={`${dark ? "bg-zinc-700" : "bg-white"}`}>
              <div className=" flex justify-between uppercase items-center  p-5  border-b-2">
                <h1>SUBTOTAL</h1>
                <h1>${subTotal}</h1>
              </div>
              <div className=" flex justify-between uppercase items-center  p-5  border-b-2">
                <h1>SHIPPING</h1>
                <h1>${shipping}</h1>
              </div>
              <div className=" flex justify-between uppercase items-center  p-5  border-b-2">
                <h1>Total</h1>
                <h1>${total}</h1>
              </div>
              <div className=" flex justify-end p-5">
                <Button>Check Out</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
