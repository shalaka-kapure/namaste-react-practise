import { useEffect, useState } from "react";
import { resList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/utils";
import useOnline from "../utils/useOnline";
import useRes from "../utils/useRes";

const Body = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [restaurants, filteredRes, setfilteredRes] = useRes();
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1>
        It looks like you're offline, please check your internet connection
      </h1>
    );
  }

  if (!restaurants) return null;

  return restaurants?.length > 0 ? (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search here..."
          value={searchTxt}
          onChange={(e) => setsearchTxt(e.target.value)}
        />
        <button
          className="searchBtn"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setfilteredRes(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardsList">
        {filteredRes?.length === 0 ? (
          <h1>No restaurants matched your filter</h1>
        ) : (
          filteredRes.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.data.id}>
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        )}
      </div>
    </>
  ) : (
    <ShimmerUI />
  );
};
export default Body;
