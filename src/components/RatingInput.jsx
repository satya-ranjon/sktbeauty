import React, { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

const initialStar = [
  { id: "1", select: false },
  { id: "2", select: false },
  { id: "3", select: false },
  { id: "4", select: false },
  { id: "5", select: false },
];

const RatingInput = ({ getValue = () => {}, label, reset, initialData }) => {
  const [stars, setStats] = useState(initialStar);

  useEffect(() => {
    setStats(initialStar);
  }, [reset]);

  const handleSelect = (index) => {
    let temp = [];
    for (let i = 0; i <= index; i++) {
      temp.push({ id: initialStar[i].id, select: true });
    }
    for (let i = index + 1; i < stars.length; i++) {
      temp.push({ id: initialStar[i].id, select: false });
    }
    setStats(temp);
  };

  useEffect(() => {
    if (initialData) {
      const index = parseFloat(initialData) - 1;
      handleSelect(index);
    }
  }, [initialData]);

  useEffect(() => {
    const filterSelect = stars?.filter((item) => item.select === true);
    getValue(filterSelect?.length);
  }, [stars]);

  return (
    <div>
      <div className="text-sm font-medium leading-6 text-violet-950 uppercase">
        {label}
      </div>
      <div className=" flex justify-start items-center gap-3 ">
        {stars?.map((item, index) => (
          <div onClick={() => handleSelect(index)} className="" key={item.id}>
            {item.select ? (
              <AiFillStar className=" text-5xl cursor-pointer text-violet-950 " />
            ) : (
              <AiOutlineStar className=" text-5xl cursor-pointer text-violet-950" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

RatingInput.propTypes = {
  getValue: PropTypes.func,
  label: PropTypes.string,
  reset: PropTypes.bool,
};
export default React.memo(RatingInput);
