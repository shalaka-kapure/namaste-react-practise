import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

const RestaurantMenu = () => {
  const { id } = useParams();
  
  const [resInfo, menu] = useRestaurant(id);
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1>
        It looks like you're offline, please check your internet connection
      </h1>
    );
  }

  return (menu?.length > 0) ?  (
    <>
      <div className="resInfo">
        <div className="resImg">
          <img src={IMG_CDN_URL + resInfo?.cloudinaryImageId} />
        </div>
        <div>
          <h2>{resInfo.name}</h2>
          <h3>Address: {resInfo?.labels[1].message}</h3>
          <h3>
            Cuisine: {resInfo?.cuisines ? resInfo?.cuisines.join(", ") : ""}
          </h3>
          <h3>Cost for Two: {resInfo.costForTwoMessage}</h3>
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
  ) : (
    <ShimmerUI />
  ) 
};

export default RestaurantMenu;
