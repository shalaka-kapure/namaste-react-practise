import { useEffect, useState } from "react";
import { resList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  // const [restaurants, setRestaurants] = useState(resList); mapping data from the mock data
  const [filteredRes, setfilteredRes] = useState([]);
  const filterData = (searchTxt, restaurants) => {
    return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase()))
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRes(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!restaurants) return null;

  return (restaurants?.length > 0) ? (
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
            <Link to= {"/restaurant/"+ restaurant.data.id}>
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          ))
        )}
      </div>
    </>
  ) : (
    <ShimmerUI />
  );
  
  }
export default Body;
