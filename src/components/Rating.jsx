import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useTheme from "../hooks/useTheme";

const Rating = ({ rating }) => {
  const star = [1, 2, 3, 4, 5];
  const { dark } = useTheme();
  return (
    <div>
      <div className=" flex justify-center items-center gap-1">
        {star?.slice(0, rating).map((i) => (
          <AiFillStar
            key={i}
            className={`${dark ? "text-zinc-200" : "text-violet-950"} text-xl`}
          />
        ))}
        {star?.slice(rating, star.length).map((i) => (
          <AiOutlineStar
            key={i}
            className={`${dark ? "text-zinc-200" : "text-violet-950"} text-xl`}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
