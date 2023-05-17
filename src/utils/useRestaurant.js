import { useState, useEffect } from "react";
import { MENU_DATA_URL } from "../config";

const useRestaurant = (id) => {
  const [resInfo, setResInfo] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getResInfo();
  }, []);

  async function getResInfo() {
    const data = await fetch(MENU_DATA_URL + id + "&submitAction=ENTER");

    const json = await data.json();
    // console.log(json.data);
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    console.log(
      Object.values(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )
    );
    setMenu(
      Object.values(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )
    );
  }
  return [resInfo, menu];
};

export default useRestaurant;
