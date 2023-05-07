import { useState } from "react";
import { resList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(resList);

  const filterData = (searchTxt, restaurants) => {
    return restaurants.filter((restaurant) => restaurant.data.name.includes(searchTxt))
  };
  return (
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
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardsList">
        {/* 1), 2), 3) <RestaurantCard restaurant={resList[0]} /> */}
        {/* 4)  <RestaurantCard name={resList[0]}.data.name} cuisines={resList[0]}.data.cuisines} lastMileTravelString={resList[0]}.data.lastMileTravelString}/> */}
        {/* <RestaurantCard {...resList[0]}.data}/> spread operator shortcut for 4th way*/}
        {/*5)*/}
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
