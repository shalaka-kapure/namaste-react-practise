import { useEffect, useState } from "react";

const useRes = () => {
  const [restaurants, setRestaurants] = useState([]);
  // const [restaurants, setRestaurants] = useState(resList); mapping data from the mock data
  const [filteredRes, setfilteredRes] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRes(json?.data?.cards[2]?.data?.data?.cards);
  }
  return [restaurants, filteredRes, setfilteredRes];
};
export default useRes;
