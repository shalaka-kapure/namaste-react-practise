import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getResInfo();
  }, []);

  async function getResInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    console.log(
      Object.values(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    );
    setMenu(
      Object.values(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )
    );
  }

  return (!resInfo || !menu) ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="resInfo">
        <div className="resImg">
          <img src={IMG_CDN_URL + resInfo.cloudinaryImageId} />
        </div>
        <div>
          <h2>{resInfo.name}</h2>
          <h3>Address: {resInfo?.locality + ", " + resInfo.areaName}</h3>
          <h3>
            Cuisine: {resInfo?.cuisines ? resInfo.cuisines.join(", ") : ""}
          </h3>
          <h3>Rating: {resInfo?.avgRating} stars </h3>
        </div>
      </div>
      <div className="resMenu">
        <h2>MENU</h2>
        {menu.map((card, index) => (
          <div key={index}>
            {card?.card?.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
              <div>
                <h2>{card?.card?.card?.title}</h2>
                {card?.card?.card?.itemCards?.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3>{item?.card?.info?.name}</h3>
                    <p>Category: {item?.card?.info?.category}</p>
                    <p>Description: {item?.card?.info?.description}</p>
                    <p>
                      Price: Rs.{" "}
                      {item?.card?.info?.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
