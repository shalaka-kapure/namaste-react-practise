import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/utils.js";
import useOnline from "../utils/useOnline";
import useRes from "../utils/useRes";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Body = () => {
  const [restaurants, filteredRes, setFilteredRes, resInfo] = useRes();
  const [searchTxt, setSearchTxt] = useState("");
  const isOnline = useOnline();
  const [activeSort, setActiveSort] = useState(null);

  useEffect(() => {
    if (restaurants) {
      // Filter the data initially when the component mounts
      const filteredData = filterData(searchTxt, restaurants);
      setFilteredRes(filteredData);
    }
  }, [searchTxt, restaurants, setFilteredRes]);

  const handleSortByCostLowToHigh = () => {
    const sortedData = [...filteredRes].sort((a, b) => {
      if (a.data.costForTwo < b.data.costForTwo) {
        return -1;
      }
      if (a.data.costForTwo > b.data.costForTwo) {
        return 1;
      }
      return 0;
    });
    setFilteredRes(sortedData);
    setActiveSort("costLowToHigh");
  };

  const handleSortByCostHighToLow = () => {
    const sortedData = [...filteredRes].sort((a, b) => {
      if (a.data.costForTwo > b.data.costForTwo) {
        return -1;
      }
      if (a.data.costForTwo < b.data.costForTwo) {
        return 1;
      }
      return 0;
    });
    setFilteredRes(sortedData);
    setActiveSort("costHighToLow");
  };

  const handleSortByRating = () => {
    const sortedData = [...filteredRes].sort((a, b) => {
      if (a.data.avgRating > b.data.avgRating) {
        return -1;
      }
      if (a.data.avgRating < b.data.avgRating) {
        return 1;
      }
      return 0;
    });
    setFilteredRes(sortedData);
    setActiveSort("rating");
  };

  const handleSortByDeliveryTime = () => {
    const sortedData = [...filteredRes].sort((a, b) => {
      if (a.data.deliveryTime < b.data.deliveryTime) {
        return -1;
      }
      if (a.data.deliveryTime > b.data.deliveryTime) {
        return 1;
      }
      return 0;
    });
    setFilteredRes(sortedData);
    setActiveSort("deliveryTime");
  };

  if (!isOnline) {
    return (
      <div className="bg-gray-200 h-[90vh] flex items-center justify-center">
        <h1>
          It looks like you're offline, please check your internet connection
        </h1>
      </div>
    );
  }

  if (!restaurants) return null;

  return restaurants?.length > 0 ? (
    <div className="bg-gray-200 min-h-[90vh]">
      <div className="flex flex-col lg:flex-row items-center justify-between px-12 py-2">
        <div className="flex flex-row items-center justify-center">
          <div className="text-xl lg:w-auto w-[50%]">{filteredRes.length} restaurants</div>
          <div className="flex flex-row items-center justify-center lg:w-auto w-[50%]">
            <input
              type="text"
              className="border-2 border-gray-800 bg-gray-200 rounded ml-5 p-1 h-8 text-gray-800"
              placeholder="Search here..."
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row lg:justify-around justify-evenly lg:w-[500px] w-[100vw]">
          <div>
            <h3
              className={`cursor-pointer ${
                activeSort === "costLowToHigh" ? "border-b border-black" : ""
              } hover:border-b-[1px] hover:border-black lg:w-auto w-[126px]`}
              onClick={handleSortByCostLowToHigh}
            >
              Cost: Low to High
            </h3>
          </div>
          <div>
            <h3
              className={`cursor-pointer ${
                activeSort === "costHighToLow" ? "border-b border-black" : ""
              } hover:border-b-[1px] hover:border-black lg:w-auto w-[126px]`}
              onClick={handleSortByCostHighToLow}
            >
              Cost: High to Low
            </h3>
          </div>
          <div>
            <h3
              className={`cursor-pointer ${
                activeSort === "rating" ? "border-b border-black" : ""
              } hover:border-b-[1px] hover:border-black lg:w-auto w-[50px]`}
              onClick={handleSortByRating}
            >
              Rating
            </h3>
          </div>
          <div>
            <h3
              className={`cursor-pointer ${
                activeSort === "deliveryTime" ? "border-b border-black" : ""
              } hover:border-b-[1px] hover:border-black lg:w-auto w-[100px]`}
              onClick={handleSortByDeliveryTime}
            >
              Delivery Time
            </h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border border-gray-300 w-[93vw] h-[1px] mx-10">

      </div>
      <div className="flex flex-wrap lg:ml-[35px] ml-[8px]">
        {filteredRes?.length === 0 ? (
          <div className="bg-gray-200 w-[100vw] flex items-center justify-center">
            <h1>No restaurants matched your Search</h1>
          </div>
        ) : (
          filteredRes.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        )}
      </div>
    </div>
  ) : (
    <ShimmerUI />
  );
};

export default Body;
