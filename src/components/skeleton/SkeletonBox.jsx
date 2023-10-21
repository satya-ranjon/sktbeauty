const SkeletonBox = ({ children }) => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      {children}
    </div>
  );
};

export default SkeletonBox;
