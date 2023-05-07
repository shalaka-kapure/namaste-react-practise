import { IMG_CDN_URL } from "../config";

//1) using props const RestaurantCard = (props) => {
//2) const RestaurantCard = ({restaurant}) => { destructuring props

//3) const RestaurantCard = ({restaurant}) => { destructuring props and its children
//const {name, cuisines,cloudinaryImageId, lastMileTravelString } = restaurant.data;

//4)destructuring children on the fly and 5) using map
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL+cloudinaryImageId }
        alt="logo"
      />
      <h2>{name}</h2>
      {/* 1) <h2>{props.restaurant.data?.name}</h2> */}
      {/* 2) <h2>{restaurant.data?.name}</h2> */}
      {/* 3), 4), 5) <h2>{name}}</h2> */}{" "}
      {/* If props are further destructured*/}
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} </h4>
    </div>
  );
};

export default RestaurantCard;