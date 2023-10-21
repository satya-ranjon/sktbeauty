import useTheme from "../../hooks/useTheme";

const SkeletonBar = ({ hight, width }) => {
  const { dark } = useTheme();
  return dark ? (
    <div
      className={` bg-gray-200  dark:bg-gray-700 my-2 ${hight || "h-4"} ${
        width || "w-32"
      } `}></div>
  ) : (
    <div
      className={` bg-violet-200  dark:bg-violet-950 my-2 ${hight || "h-4"} ${
        width || "w-32"
      } `}></div>
  );
};

export default SkeletonBar;
