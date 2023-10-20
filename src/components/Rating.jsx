import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  const star = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className=" flex justify-center items-center gap-1">
        {star?.slice(0, rating).map((i) => (
          <AiFillStar key={i} className=" text-violet-950 text-xl" />
        ))}
        {star?.slice(rating, star.length).map((i) => (
          <AiOutlineStar key={i} className=" text-violet-950 text-xl" />
        ))}
      </div>
    </div>
  );
};

export default Rating;
