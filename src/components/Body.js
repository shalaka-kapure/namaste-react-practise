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
  };
  

  if (!isOnline) {
    return (
      <h1>
        It looks like you're offline, please check your internet connection
      </h1>
    );
  }

  if (!restaurants) return null;

  return restaurants?.length > 0 ? (
    <div className="bg-gray-200">
      <div className="flex flex-row items-center justify-between px-10">
        <div className="flex flex-row items-center justify-center">
          <div className="text-xl">{filteredRes.length} restaurants</div>
          <div className="flex flex-row items-center justify-center">
            <input
              type="text"
              className="border border-black bg-gray-800 rounded ml-5 p-1 h-8 text-white"
              placeholder="Search here..."
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            <button
              className="border border-gray-800 bg-gray-800 m-3 p-1 rounded-md text-white"
              onClick={() => {
                const filteredData = filterData(searchTxt, restaurants);
                setFilteredRes(filteredData);
              }}
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-around w-[500px]">
          <div>
            <h3
              className="cursor-pointer hover:border-b-[1px] active:border-b-[1px]"
              onClick={handleSortByCostLowToHigh}
            >
              Cost: Low to High
            </h3>
          </div>
          <div>
            <h3
              className="cursor-pointer hover:border-b-[1px] active:border-b-[1px]"
              onClick={handleSortByCostHighToLow}
            >
              Cost: High to Low
            </h3>
          </div>
          <div>
            <h3
              className="cursor-pointer hover:border-b-[1px] active:border-b-[1px]"
              onClick={handleSortByRating}
            >
              Rating
            </h3>
          </div>
          <div>
            <h3
              className="cursor-pointer hover:border-b-[1px] active:border-b-[1px]"
              onClick={handleSortByDeliveryTime}
            >
              Delivery Time
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ml-[25px]">
        {filteredRes?.length === 0 ? (
          <h1>No restaurants matched your Search</h1>
        ) : (
          filteredRes.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
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
