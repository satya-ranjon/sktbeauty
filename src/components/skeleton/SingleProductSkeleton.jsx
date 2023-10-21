import SkeletonBar from "./SkeletonBar";
import SkeletonBox from "./SkeletonBox";
import SkeltonImg from "./SkeltonImg";

const SingleProductSkeleton = () => {
  return (
    <SkeletonBox>
      <div className="flex gap-3">
        <SkeltonImg hight="h-44" />
        <div className=" w-full ">
          <SkeletonBar width="w-full" />
          <SkeletonBar width="w-full" />
          <SkeletonBar width="w-36" />
          <SkeletonBar width="w-24" />
          <SkeletonBar width="w-full" />
        </div>
      </div>
    </SkeletonBox>
  );
};

export default SingleProductSkeleton;
