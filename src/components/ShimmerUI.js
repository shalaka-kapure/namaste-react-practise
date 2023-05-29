import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const ShimmerUI = () => {
  return (
    <div className="bg-gray-200 min-h-[90vh]">
      <div className="flex flex-col lg:flex-row items-center justify-between px-12 py-2">
        <div className="flex flex-wrap ml-[25px] mr-[10px]">
          {Array(18)
            .fill("")
            .map((e, index) => (
              <div className="flex bg-white flex-col gap-2 my-10 mx-5 md:m-0">
                <div className="rounded-lg overflow-hidden shimmer-bg">
                  <Skeleton width={"200px"} height={"155px"} />
                </div>
                <div className="flex gap-2">
                  <Skeleton width={"90px"} height={"25px"} />
                  <Skeleton width={"100px"} height={"25px"} />
                </div>
                <div className="flex gap-2">
                  <Skeleton width={"100px"} height={"25px"} />
                  <Skeleton width={"60px"} height={"25px"} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
